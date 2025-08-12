import React from 'react';

import { NavLink } from 'react-router-dom';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import MainContent from '../components/mainContent.jsx';

// icons
import { IconInput } from '../components/iconInput.jsx';
import { PasswordInput } from '../components/passwordInput.jsx';
import { GraduationCap } from 'lucide-react';
import { FormContainer } from '../components/formContainer.jsx';

function Login () {


    return (
        <>
            <Header />
            <MainContent>
                <FormContainer buttonText="Entrar" title="Faça o login" onSubmit={() => {alert('Login realizado com sucesso!')}}>
                    <div className="flex flex-col gap-10 p-5">
                        <span>
                            <h2>Insira seu CPF</h2>
                            <IconInput icon={<GraduationCap />} placeholder="123.456.789-00" type="text" />
                        </span>

                        <span>
                            <h2>Insira sua senha</h2>
                            <PasswordInput />
                        </span>
                        <span>
                            <h4>Esqueceu sua senha?</h4>
                        </span>
                    </div>
                </FormContainer>
            </MainContent>
            <Footer />
        </>
    );
};

export default Login;