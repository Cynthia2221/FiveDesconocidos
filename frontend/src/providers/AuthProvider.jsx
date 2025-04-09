import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("access_token");
    const userData = sessionStorage.getItem("user_data");

    if (accessToken && userData) {
      try {
        const parsedUserData = userData ? JSON.parse(userData) : null;
        setLoginData({
          access_token: accessToken,
          user: parsedUserData,
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
        setLoginData(null);
      }
    }
    setLoading(false);
  }, [loading]);

  const login = (data) => {
    setLoginData(data);
    sessionStorage.setItem("access_token", data.access_token);

    if (data.user) {
      sessionStorage.setItem("user_data", JSON.stringify(data.user));
    }

    return true;
  };

  const logout = () => {
    setLoginData(null);
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("user_data");

    return true;
  };

  return (
    <AuthContext.Provider value={{ loginData, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
