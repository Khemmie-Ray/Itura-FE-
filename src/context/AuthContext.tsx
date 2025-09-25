"use client";

import { createContext, useContext, useState, useEffect } from "react";

type AuthResponse = {
  success: boolean;
  message: string;
};

type AuthContextType = {
  user: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthResponse>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    if (storedWallet) {
      setUser(storedWallet);
    }
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   async function validateToken() {
  //     const accessToken = localStorage.getItem("accessToken");
  //     const refreshToken = localStorage.getItem("refreshToken");

  //     if (!accessToken || !refreshToken) {
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const res = await fetch(
  //         "https://services.cavos.xyz/api/v1/external/auth/token/check",
  //         {
  //           method: "POST",
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (res.ok) {
  //         const data = await res.json();
  //         if (data.valid) {
  //           setUser(data.user);
  //         } else {
  //           await refreshAccessToken(refreshToken);
  //         }
  //       } else {
  //         await refreshAccessToken(refreshToken);
  //       }
  //     } catch (err) {
  //       console.error("Auth error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   validateToken();
  // }, []);

  // const refreshAccessToken = async (refreshToken: string) => {
  //   try {
  //     const res = await fetch('https://services.cavos.xyz/api/v1/external/auth/token/refresh', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         refresh_token: refreshToken,
  //         app_id: process.env.NEXT_PUBLIC_CAVOS_APP_ID,
  //         network: 'sepolia'
  //       }),
  //       }
  //     );

  //     if (!res.ok) throw new Error("Refresh failed");

  //     const dx = await res.json();
  //     console.log(dx)

  //     localStorage.setItem("accessToken", dx.data.authData.accessToken);
  //     localStorage.setItem("refreshToken", dx.data.authData.refreshToken);

  //     setUser(dx.user);
  //   } catch (err) {
  //     console.error("Token refresh failed", err);
  //   }
  // };


  
  const login = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await fetch(
        "https://services.cavos.xyz/api/v1/external/auth/login",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CAVOS_ORG_SECRET}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, network: "sepolia" }),
        }
      );
  
      if (!response.ok) {
        return { success: false, message: "Login failed" };
      }
  
      const res = await response.json();
  
      localStorage.setItem("accessToken", res.data.authData.accessToken);
      localStorage.setItem("refreshToken", res.data.authData.refreshToken);
      localStorage.setItem("wallet", res.data.wallet.address);
  
      // const safeUser: User = {
      //   user_id: res.data.user_id,
      //   email: res.data.email,
      //   wallet: { address: res.data.wallet.address },
      // };
  
      // setUser(safeUser);
  
      return { success: true, message: res.message };
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
  
      return { success: false, message: errorMessage };
    }
  };
  
  
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
