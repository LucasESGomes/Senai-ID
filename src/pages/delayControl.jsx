import { NavLink } from "react-router-dom";

//Components
import FormManagement from "../components/containers/formManagement.jsx";
import LoggedHeader from "../components/layout/loggedHeader.jsx"
import MainContent from '../components/layout/mainContent.jsx'
import Footer from "../components/layout/footer.jsx"

function DelayControl() {

    return(
        <>
            <LoggedHeader />

            <MainContent>
                <FormManagement>
                    <div className="flex justify-around text-black font-bold border-b-2 pb-3">
                        <p>Usuário</p>
                        <p>ID</p>
                        <p>Status</p>
                        <p>Documento</p>
                        <p>Ações</p>
                    </div>
                </FormManagement>
            </MainContent>


            <Footer />
        </>
    )
}

export default DelayControl;