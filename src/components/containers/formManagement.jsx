import { NavLink } from "react-router-dom";

//Icons
import { Search } from 'lucide-react';
import { AlarmClock } from 'lucide-react';


const FormManagement = () => {

    return (
        <div className="flex w-450 h-180 shadow-2xl rounded-3xl bg-white">
            <div className="flex items-center w-450 h-18 bg-red-500 rounded-t-3xl pl-7 pr-7 justify-between">
                
                {/*Título e ícone*/}
                <div className="flex items-center">
                    <AlarmClock size={38} className="text-white" />
                    <p className="text-white p-5 font-bold text-2xl">Gerenciamento de Atrasos</p>
                </div>

                {/*Input para busca de alunos*/}
                <div className="flex justify-start items-center gap-2 w-100 bg-red-400 h-10 rounded-md pl-3">
                    <Search className="text-white" />
                    <input
                        type="text"
                        className="outline-none text-white placeholder:text-gray-100 focus:text-white placeholder:font-semibold placeholder:text-[14px] bg-red-400"
                        placeholder="Pesquisar contas..."
                    />
                </div>
            </div>
        </div>
    );
}

export default FormManagement;