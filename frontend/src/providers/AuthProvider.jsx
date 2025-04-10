import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const userData = localStorage.getItem("user_data");

    if (accessToken && userData) {
      try {
        const parsedUserData = userData ? JSON.parse(userData) : null;
        setLoginData({
          token: accessToken,
          user: parsedUserData,
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
        setLoginData(null);
      }
    }
    setLoading(false);
  }, []);

  const login = (data) => {
    setLoginData(data);
    localStorage.setItem("token", data.token);

    if (data.user) {
      localStorage.setItem("user_data", JSON.stringify(data.user));
    }

    return true;
  };

  const logout = () => {
    setLoginData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user_data");

    return true;
  };

  return (
    <AuthContext.Provider value={{ loginData, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
