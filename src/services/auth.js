import Api from './api.js';

export async function loginUser(login, senha) {
    try{
        const response = await Api.post('/login', {login, senha})

        return response.data;   
    } catch (error){
        console.error("Erro ao fazer login:", error);
    }
}