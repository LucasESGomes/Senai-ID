const Footer = () => {

    return(
        <footer className="w-full shadow-2xl/100" >
            <nav className="w-full py-4" >
                <ul className="flex justify-around text-black">
                    <li className="#">Unidades</li>
                    <li className="#" >Perguntas Frequentes</li>
                    <li className="#" >Fale Conosco</li>
                    <li className="#" >Transparência</li>
                    <li className="#" >Para a sua empresa</li>
                </ul>
            </nav>
            <div className="flex justify-around items-center text-white py-9 bg-red-800" >
                <div>
                    <p className="font-bold" >INSTITUIÇÃO E EDIFÍCIO</p>
                    <p>Mogi das Cruzes - SP</p>
                    <p>CEP 08780-070</p>
                </div>
                <div>
                    <p className="font-bold" >CENTRAL DE ATENDIMENTO</p>
                    <p>(11) 4728-3900</p>
                </div>
                <div>
                    <p className="font-bold" >REDES SOCIAIS</p>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                    <img src=""/>
                </div>
            </div>
            <div className="flex justify-center items-center text-white py-3 bg-red-500">
                <p className="#">
                    &copy; {new Date().getFullYear()} SENAI ID. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;