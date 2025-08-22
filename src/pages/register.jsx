import { NavLink } from "react-router-dom";

import DelayManagement from "../components/containers/delayManagement.jsx";
import LoggedHeader from "../components/layout/loggedHeader.jsx";
import Footer from "../components/layout/footer.jsx"

function Register() {

    return(
        <>
            <LoggedHeader />

            <DelayManagement />
        </>
    )
}

export default Register;