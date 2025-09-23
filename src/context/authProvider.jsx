import { useEffect, useAuth } from "react";

// Criando um provider para o AuthContext
export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  useEffect(() => {
    // Inicializa a autenticação quando o componente for montado
    auth.initializeAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};