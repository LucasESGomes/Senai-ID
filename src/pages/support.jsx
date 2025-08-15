import React from 'react';
import { useState } from 'react';

import Header from '../components/layout/header.jsx';
import Footer from '../components/layout/footer.jsx';
import MainContent from '../components/layout/mainContent.jsx';

import { IconInput } from '../components/inputs/iconInput.jsx';
import { FormContainer } from '../components/containers/formContainer.jsx';

import { Phone } from 'lucide-react';

import maskPhone from '../util/maskPhone.js';

function Support() {
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e) => {
        setPhone(maskPhone(e.target.value));
    };

    return (
        <>
            <Header />
            <MainContent>
                <FormContainer title="Support" buttonText="Enviar">
                    <div className="flex flex-col gap-4">
                       <span>
                            <h2>Telefone para contato</h2>
                            <IconInput icon={<Phone />} placeholder="11 91234-5678" value={phone} onChange={handlePhoneChange} />
                       </span>
                       <span>
                            <h2> Mensagem </h2>
                            <textarea className='border-2 w-full border-gray-300 p-2 rounded-md' name="message" id=""></textarea>
                       </span>
                    </div>
                </FormContainer>
            </MainContent>
            <Footer />
        </>
    );
}


export default Support;
