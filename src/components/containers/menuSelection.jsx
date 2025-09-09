import { NavLink } from "react-router-dom";
import { useState } from "react";

//Icones
import { ChevronRight } from 'lucide-react';
import { UserPlus } from "lucide-react";

export default function Header() {
    const [oppenedMenu, closedMenu] = useState(false);

    return(
        <div className="display flex relative">
            {/*Configurando o menu aberto*/}
            
            <button onClick={() => closedMenu(!oppenedMenu)} className="w-30g gap-3 h-10 flex justify-center items-center cursor-pointer">
                <UserPlus/>
                Cadastro
            </button>

            {oppenedMenu &&(
                <div className="w-60 h-44 bg-white border-2 border-gray-300 rounded-md shadow-lg absolute top-12 flex flex-col gap-2 animate-[fadeIn_0.3s_ease-in-out]">
                    <style jsx>{`
                        @keyframes fadeIn {
                            0% {
                                opacity: 0;
                                transform: translateY(-10px);
                            }
                            100% {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    `}</style>
                    <div className="font-bold w-59 h-12 bg-red-500 rounded-md display flex justify-center items-center text-white">
                        <NavLink to="#">Quem será registrado</NavLink>
                    </div>
                    <NavLink to="/registrar-aluno" className="font-bold display justify-center text-red-600 flex p-3 gap-25 cursor-pointer">Aluno <ChevronRight /></NavLink>
                    <NavLink to="/registrar-funcionario"  className="font-bold display flex justify-center gap-13.5 p-3 text-blue-500 cursor-pointer">Funcionário <ChevronRight /></NavLink>
                </div>
            )}
        </div>
        
    );
}
