import "./Navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const Navbar = ( { name } ) => {
    const navigate = useNavigate()
    return (
        <nav className="navbar">
            <input type="image" onClick={() => navigate("/home")} className="navbar-brand" src="/imagens/sidi_logo.png" alt="logo" />
            <div className="navbar-divider" />
            <h1 className="navbar-text align-right">Bom dia, { name }!</h1>
            <FaRegCircleUser className="navbar-icon align-left"/>
            <h2 className="navbar-text">Perfil</h2>
        </nav>
    );
};

export default Navbar;