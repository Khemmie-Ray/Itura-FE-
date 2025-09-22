"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  user_id: string;
  email: string;
  walletAddress: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoading(false);
      return;
    }

    const checkToken = async () => {
      try {
        const res = await fetch("https://services.cavos.xyz/api/v1/external/auth/token/check", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Token check failed");
        const data = await res.json();

        if (data.valid) {
          setUser({
            user_id: data.user.user_id,
            email: data.user.email,
            walletAddress: data.wallet.address,
          });
        } else {
          logout();
        }
      } catch (err) {
        console.error("Token validation error:", err);
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
