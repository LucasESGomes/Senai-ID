import { NavLink } from "react-router-dom";

//Icons
import { Search } from 'lucide-react';

import { AlarmClock } from 'lucide-react';


const FormManagement = () => {

    return(

        <main className="flex justify-center position relative top-10">
            <div className="w-450 h-180 shadow-2xl rounded-3xl ">
                <div className="flex text-white w-450 h-18 bg-red-500 rounded-t-3xl">
                    <p className="text-white p-5 font-bold text-2xl">Gerenciamento de Atrasos</p>

                    <Search />
                    <input type="text" className=""/>
                </div>


            </div>
        </main>

        <div className="flex justify-center position relative top-10">
            <div className="w-450 h-180 shadow-2xl rounded-3xl ">
                <div className="flex text-white items-center w-450 h-18 bg-red-500 rounded-t-3xl pl-7">
                    <AlarmClock size={38} className="text-white"/>
                    <p className="text-white p-5 font-bold text-2xl">Gerenciamento de Atrasos</p>

                    {/*Input para busca de alunos*/}
                    <div className="flex items-center gap-2 bg-red-400 h-10 rounded-md">
                        <Search className=""/>
                        <input type="text" className="outline-none placeholder:text-white placeholder:font-semibold placeholder:text-[14px]" placeholder="Pesquisar contas..."/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FormManagement;