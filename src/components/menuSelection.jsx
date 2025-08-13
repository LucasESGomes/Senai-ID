import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function Header() {
    const [oppenedMenu, closedMenu] = useState(false);

    return(
        <div>
            {/*Configurando o menu aberto*/}
            
            <button onClick={() => closedMenu(!oppenedMenu)} className="w-30g gap-3 h-10 flex justify-center items-center text-red-500">
                <UserPlus/>
                Cadastro
            </button>

            {oppenedMenu &&(
                <div className="W-40 h-40 bg-white border-2 border-gray-300 rounded-md shadow-lg absolute top-12 right-0 flex flex-col gap-2 p-4">
                    <p className="cursor-pointer">Aluno</p>
                    <p className="cursor-pointer">Funcionário</p>
                </div>
            )}
        </div>
        
    );
}