import { useState, useEffect, createContext, useContext } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";


// Create a context with a dummy default value
const AuthContext = createContext(undefined);

export const AuthProvider= ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [csrfToken, setCsrfToken] = useState(sessionStorage.getItem("csrfToken"));
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const login = async (email, password) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { access_token, csrf_token } = await response.json();
      // console.log(await response.json())
      setToken(access_token);
      setCsrfToken(csrf_token)
      const userFromToken = jwt(access_token);
      setUser({
        userId: userFromToken.user_id,
        // name: userFromToken.name,
        // role: userFromToken.role,
      });

      setIsAuthenticated(true);
      sessionStorage.setItem("token", access_token);
      sessionStorage.setItem("csrfToken", csrf_token);
    } else {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    setToken(null);
    setCsrfToken(null);
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("csrfToken");
    navigate("/");
  };

  const getAccessTokenSilently = () => {
    return token;
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const cToken = sessionStorage.getItem("csrfToken");
    if (token && cToken) {
      setIsAuthenticated(true);
      setToken(token);
      setCsrfToken(cToken);

      const userFromToken = jwt(token);
      setUser({
        user_id: userFromToken.user_id
        // email: userFromToken.sub,
        // name: userFromToken.name,
        // role: userFromToken.role,
      });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        token,
        csrfToken,
        isLoading,
        user,
        isAuthenticated,
        getAccessTokenSilently,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;