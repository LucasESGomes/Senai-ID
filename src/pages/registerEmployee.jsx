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

// Icons
import { User, SquareUser, BriefcaseBusiness, Calendar, Wrench, IdCardLanyard } from 'lucide-react';

// util
import maskCPF from "../util/maskCpf.js";

function RegisterEmployee() {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        cpf: "",
        pis: "",
        nif: "",
    });
    const [cargos, setCargos] = useState([]);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

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
        fetch('/cargos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const options = data.map(cargo => ({
                    value: cargo.nome,
                    label: cargo.nome
                }));
                setCargos(options);
            })
            .catch(error => {
                console.error( error);
            });
    }, []);

    return (
        <>
            <LoggedHeader />

            <MainContent>
                <FormContainer title="Cadastro de aluno" theme="employee" buttonText="Cadastrar" width="3xl" onSubmit={() => { alert("Cadastro realizado com sucesso!") }}>
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
                            <h2>NIF</h2>
                            <IconInput 
                                icon={<BriefcaseBusiness />} 
                                placeholder="Digite o NIF" 
                                maxLength="8" 
                                type="text"
                                inputmode="numeric" 
                                label="NIF" 
                                value={formData.nif}
                                onChange={(e) => handleInputChange('nif', e.target.value)}
                            />
                        </div>
                        <div className="w-[48%] flex flex-col gap-2">
                            <h2>PIS</h2>
                            <IconInput 
                                icon={<IdCardLanyard />} 
                                placeholder="Insira o PIS" 
                                type="text"
                                inputMode="numeric"
                                maxLength={11} 
                                label="PIS" 
                                value={formData.pis}
                                onChange={(e) => handleInputChange('pis', e.target.value)}
                            />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-full flex flex-col gap-2">
                            <IconSelect 
                                icon={<Wrench />} 
                                options={cargos} 
                                label="Cargo" 
                                value={cargos.find(option => option.value === formData.cargo)}
                                onChange={(selectedOption) => {
                                handleInputChange('cargo', selectedOption?.target?.value);
                            }}

                            />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-gray-700 font-medium">Foto do Funcionário</label>
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
                    name={formData.name || "Nome do Funcionário"} 
                    cpf={formData.cpf || "000.000.000-00"} 
                    nif={formData.nif || "00000000"}
                    pis={formData.pis || "000.00000.00-0"}
                    type="funcionario"
                    role={formData.cargo || "Cargo do Funcionário"}
                />
            </MainContent>
        </>
    );
}

export default RegisterEmployee;