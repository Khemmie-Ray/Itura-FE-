"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useAegis } from "@cavos/aegis";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type AuthContextType = {
  user: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { aegisAccount } = useAegis();
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (aegisAccount?.address) {
          setUser(aegisAccount.address);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Failed to check connection:", err);
      } finally {
        setLoading(false);
      }
    };

    checkConnection();
  }, [aegisAccount]);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const res: any = await aegisAccount.signIn(email, password);
      toast.success("Log in Successful");
      const cavosUserId = res.user_id;
      // console.log(cavosUserId)
      setUser(aegisAccount.address || null);

      if (res) {
        router.replace("/dashboard");
      }
      console.log(res);
    } catch (error: any) {
      let errorMessage = "Login failed";

      if (error?.message) {
        const match = error.message.match(/\{.*\}/);
        if (match) {
          try {
            const parsed = JSON.parse(match[0]);
            errorMessage = parsed.error || errorMessage;
          } catch {
            errorMessage = error.message;
          }
        } else {
          errorMessage = error.message;
        }
      }
      toast.error(`Login failed ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await aegisAccount.signOut();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
