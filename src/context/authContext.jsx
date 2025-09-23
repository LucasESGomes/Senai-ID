import React, { createContext, useContext,} from 'react';

// Criação do contexto de autenticação
const AuthContext = createContext();



// Criando um hook para consumir o contexto facilmente
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuthContext deve ser usado dentro de um AuthProvider');
  }

  return context;
};
