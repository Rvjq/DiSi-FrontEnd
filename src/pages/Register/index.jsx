import './styles.css'
import { useNavigate } from 'react-router-dom'
import { FaUser} from "react-icons/fa";
import { MdLock, MdEmail } from "react-icons/md";
import Head from "@components/Head";

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className="container-register">
            <Head title="Cadastro"/>
            <div className='container-image'></div>
            <div className="container-form-register">
            <img src='/imagens/Logo login-cadastro.svg'/>
                <div className="header-title">
                    <h1>Cadastro</h1>
                    <p className=""></p>
                </div>

                <form>
                    <div className="content-input">
                        <FaUser className='icon' />
                        <input type="text" placeholder="Usuário" id="user-text" required />
                    </div>
                    <div className="content-input">
                        <MdEmail className='icon' />
                        <input type="email" placeholder="Email" id="user-text" required />
                    </div>

                    <div className="content-input">
                        <MdLock className='icon' />
                        <input type="password" placeholder="Senha" id="password-text" required />
                    </div>
                    <div className="content-input">
                        <MdLock className='icon' />
                        <input type="password" placeholder="Confirmar Senha" id="password-text" required />
                    </div>
                    <div className="container-nav">
                        <p> Ao prosseguir com o cadastro, voce está sujeito aos <a className='termos a-termos' href="#">termos de condição</a></p>
        
                    </div>

                    <button className='button' type="submit" onClick={() => navigate("/home")}>Entrar</button>
                    <div className="container-nav">
                        <p>Ja tem uma conta? <a className='cadastre-a a-text' href="/login">Faça Login</a></p>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Register

