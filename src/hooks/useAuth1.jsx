import { useState } from 'react';
import api from '../services/api.js';

export const  useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    // Login
    const login = async (login, senha) => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.post('/login', { login, senha });
            const data = response.data.data;

            if (response.data && data.token) {
                // Salvar token
                localStorage.setItem('jwtToken', data.token);
                api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

                localStorage.setItem('userData', JSON.stringify(data.user));
                setUser(data.user);

                return { success: true, user: data.user };
            } else {
                const message = data.message || 'Algo deu errado durante o login';
                setError(message);
                return { success: false, error: message };
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'Erro de conexão';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    // Logout
    const logout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userData');
        setUser(null);
        delete api.defaults.headers.common['Authorization'];
    };

    // Inicializa autenticação ao carregar a aplicação
    const initializeAuth = async () => {
        const token = localStorage.getItem('jwtToken');
        if (!token) return;

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            const response = await api.get('/users/me');
            if (response.data.success) {
                const { _id: userId, role, email, name } = response.data.data;
                const userData = { userId, role, email, name };
                setUser(userData);
                localStorage.setItem('userData', JSON.stringify(userData));
            } else {
                logout(); // token inválido ou expirado
            }
        } catch {
            logout(); // erro de conexão ou token inválido
        }
    };

    const getToken = () => localStorage.getItem('jwtToken');

    const isAuthenticated = () => !!user;

    return {
        login,
        logout,
        initializeAuth,
        getToken,
        isAuthenticated,
        user,
        loading,
        error,
        clearError: () => setError(null),
    };
};

export default useAuth;