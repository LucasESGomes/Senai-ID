import { NavLink } from "react-router-dom";

//Icons
import { Search } from 'lucide-react';

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
    );
}

export default FormManagement;