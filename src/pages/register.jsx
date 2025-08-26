import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import LoggedHeader from "../components/layout/loggedHeader.jsx";
import MainContent from "../components/layout/mainContent.jsx";
import { FormContainer } from "../components/containers/formContainer.jsx";
import FormRow from "../components/layout/formRow.jsx";
import { IconInput } from "../components/inputs/iconInput.jsx";
import { IconSelect } from "../components/inputs/iconSelect.jsx";
import { FileInput } from "../components/inputs/fileInput.jsx";

// Icons
import { User, SquareUser, GraduationCap, Calendar, Wrench } from 'lucide-react';

// util
import maskCPF from "../util/maskCpf.js";

function Register() {
    const [cpf, setCpf] = useState("");
    const [courses, setCourses] = useState([]);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handleCpfChange = (e) => {
        setCpf(maskCPF(e.target.value));
    };

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        setPhotoPreview(imageURL); // Atualiza o estado da imagem
    } else {
        setPhotoPreview(null); // Se não houver arquivo, remove a pré-visualização
    }
};


    useEffect(() => {
        fetch('/cursos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const options = data.map(course => ({
                    value: course.id,
                    label: course.nome
                }));
                setCourses(options);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <>
            <LoggedHeader />

            <MainContent>
                <FormContainer title="Cadastro de aluno" buttonText="Cadastrar" width="3xl" gap="10" onSubmit={() => { alert("Cadastro realizado com sucesso!") }}>
                    <FormRow>
                        <div className="w-[48%] flex flex-col">
                            <IconInput icon={<User />} placeholder="Digite o nome completo" type="text" label="Nome" />
                        </div>
                        <div className="w-[48%] flex flex-col gap-2">
                            <IconInput icon={<SquareUser />} placeholder="Digite o CPF" type="text" onChange={handleCpfChange} value={cpf} maxLength="14" label="CPF" />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-[48%] flex flex-col gap-2">
                            <IconInput icon={<GraduationCap />} placeholder="Digite a matrícula" maxLength="8" type="text" label="Matrícula" />
                        </div>
                        <div className="w-[48%] flex flex-col gap-2">
                            <IconInput icon={<Calendar />} placeholder="Insira a data de nascimento" type="date" label="Data de nascimento" />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-full flex flex-col gap-2">
                            <IconSelect icon={<Wrench />} options={courses} label="Curso" />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Foto do aluno</label>
                            <div className="flex items-start gap-4">
                                <img
                                    src={photoPreview || "/placeholder-foto.png"}
                                    alt=""
                                    className="w-32 h-32 rounded-full object-cover bg-gray-800"
                                />
                                <FileInput onChange={handleImageChange} >

                                </FileInput>
                            </div>
                        </div>
                    </FormRow>
                </FormContainer>
            </MainContent>
        </>
    );
}

export default Register;