import { useState } from 'react';


import { NavLink, useNavigate } from 'react-router-dom';
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import MainContent from '../components/layout/mainContent.jsx';

// icons
import { IconInput } from '../components/inputs/iconInput.jsx';
import { PasswordInput } from '../components/inputs/passwordInput.jsx';
import { GraduationCap } from 'lucide-react';
import { FormContainer } from '../components/containers/formContainer.jsx';

// util
//import maskCpf from '../util/maskCpf.js';

// hook
import { useAuth } from '../hooks/useAuth.jsx';
import maskCPF from '../util/maskCpf.js';

function Login () {
    const [password, setPassword] = useState("");
    const { login, loading, error } = useAuth();
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    //Aplicando a máscara no CPF
    const handleCpfChange = (e) => {
        setCpf(maskCPF(e.target.value));
    }

    const handleSubmit = async () => {
        const result = await  login(cpf, password);  
        
        if(result.success) {
            navigate('/registrar-aluno')
        }
    };
    
    return (
        <>
            <Header />
            <MainContent>
                <FormContainer buttonText={loading ? "Entrando...": "Entrar"} title="Faça o login" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-10">
                        <span>
                            <h2>Insira seu CPF</h2>
                            <IconInput maxLength={14} icon={<GraduationCap />} placeholder="123.456.789-00" type="text" value={cpf} onChange={handleCpfChange} />
                        </span>
                        <span>
                            <h2>Insira sua senha</h2>
                            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
                        </span>
                        
                        {/* Exibindo a mensagem de erro */}
                        {error && (
                            <p className='text-red-500 text-sm mt-2'>{error}</p>
                        )}

                        <div className="flex items-start justify-start flex-col gap-3">
                        <span>
                            <NavLink to="/forgot-password" className="text-red-600 hover:underline">Esqueceu sua senha?</NavLink>
                        </span>
                        <span className='flex items-center gap-3 content-start'>
                            <label htmlFor="remember-me">Lembrar de mim</label>
                            <input type="checkbox" className='appearance-none w-5 h-5 border-2 border-red-500 rounded checked:bg-red-500 checked:border-red-500 
                                checked:after:content-["✔"] checked:after:text-white checked:after:block checked:after:text-center checked:after:leading-5' id="remember-me" />
                        </span>
                        </div>
                    </div>
                </FormContainer>
            </MainContent>
            <Footer />
        </>
    );
};

export default Login;