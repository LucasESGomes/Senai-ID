import { NavLink } from "react-router-dom";

import DelayManagement from "../components/containers/formManagement.jsx";
import LoggedHeader from "../components/layout/loggedHeader.jsx"
import Footer from "../components/layout/footer.jsx"

function DelayControl() {

    return(
        <>
            <LoggedHeader />

            <DelayManagement />

            <Footer />
        </>
    )
}

export default DelayControl;