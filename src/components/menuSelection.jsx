import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function Header() {
    const [closedMenu, oppenedMenu] = useState(false);

    return(
        <div>
            {/*Configurando o menu aberto*/}
            <UserPlus/>
            <button onClick={() => oppenedMenu(!closedMenu)} className="w-10 h-10 flex justify-center items-center bg-red-500 text-white rounded-md">
                Cadastro
            </button>

            {oppenedMenu &&(
                <div>
                    
                </div>
            )}
        </div>
        
    );
}