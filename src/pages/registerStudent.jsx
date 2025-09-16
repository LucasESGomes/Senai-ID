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
import Carteirinha from "../components/layout/carteirinha.jsx";
import Footer from "../components/layout/footer.jsx";

// Icons
import { User, SquareUser, GraduationCap, Calendar, Wrench } from 'lucide-react';

// util
import maskCPF from "../util/maskCpf.js";

function RegisterStudent() {
    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
        matricula: "",
        dateOfBirth: "",
        course: "",
    });
    const [courses, setCourses] = useState([]);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleDateOfBirthChange = (e) =>{
        // Transformar a data para o formato dd/mm/yyyy

        const date = new Date(e.target.value);
        const day = String(date.getDate() + 1).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        const formattedDate = `${day}/${month}/${year}`;
        handleInputChange('dateOfBirth', formattedDate);
    }

    const handleCpfChange = (e) => {
        const maskedValue = maskCPF(e.target.value);
        handleInputChange('cpf', maskedValue);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPhotoPreview(imageURL);
        } else {
            setPhotoPreview(null);
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
                    value: course.nome,
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
                <FormContainer title="Cadastro de aluno" buttonText="Cadastrar" width="3xl" onSubmit={() => { alert("Cadastro realizado com sucesso!") }}>
                    <FormRow>
                        <div className="w-[48%] flex flex-col gap-2">
                            <h2>Nome completo</h2>
                            <IconInput 
                                icon={<User />} 
                                placeholder="Digite o nome completo" 
                                type="text" 
                                label="Nome" 
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                            />
                        </div>
                        <div className="w-[48%] flex flex-col gap-2">
                            <h2>CPF</h2>
                            <IconInput 
                                icon={<SquareUser />} 
                                placeholder="Digite o CPF" 
                                type="text" 
                                onChange={handleCpfChange} 
                                value={formData.cpf} 
                                maxLength="14" 
                                label="CPF" 
                            />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-[48%] flex flex-col gap-2">
                            <h2>Matrícula</h2>
                            <IconInput 
                                icon={<GraduationCap />} 
                                placeholder="Digite a matrícula" 
                                maxLength="8" 
                                type="text"
                                inputmode="numeric" 
                                label="Matrícula" 
                                value={formData.matricula}
                                onChange={(e) => handleInputChange('matricula', e.target.value)}
                            />
                        </div>
                        <div className="w-[48%] flex flex-col gap-2">
                            <h2>Data de nascimento</h2>
                            <IconInput 
                                icon={<Calendar />} 
                                placeholder="Insira a data de nascimento" 
                                type="date" 
                                label="Data de nascimento" 
                                width="100%" 
                                onChange={handleDateOfBirthChange}
                            />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-full flex flex-col gap-2">
                            <IconSelect 
                                icon={<Wrench />} 
                                options={courses} 
                                label="Curso" 
                                value={courses.find(option => option.value === formData.course)}
                                onChange={(selectedOption) => {
                                handleInputChange('course', selectedOption?.target?.value);
                            }}

                            />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Foto do aluno</label>
                            <div className="flex items-center gap-4">
                                <img
                                    src={photoPreview || "/placeholder-foto.png"}
                                    alt=""
                                    className="w-32 h-32 rounded-full object-cover bg-gray-800"
                                />
                                <div className="flex flex-col justify-between gap-6 ">
                                    <FileInput onChange={handleImageChange} ></FileInput>
                                    <span>
                                        <h3>{photoPreview ? "Foto selecionada" : "Nenhuma foto selecionada"}</h3>
                                        <h3>Arquivos suportados: JPG, PNG</h3>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FormRow>
                </FormContainer>
                
                {/* Carteirinha com dados em tempo real */}
                <Carteirinha 
                    photoPreview={photoPreview}
                    name={formData.name || "Nome do Estudante"} 
                    dateOfBirth={formData.dateOfBirth || "00/00/0000"} 
                    course={formData.course || ""} 
                    matricula={formData.matricula || "00000000"} 
                    cpf={formData.cpf || "000.000.000-00"} 
                />
            </MainContent>

            <Footer></Footer>
        </>
    );
}

export default RegisterStudent;