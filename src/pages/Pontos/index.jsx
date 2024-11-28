import './styles.css'
import Head from '@components/head';   
import BodyFrame from '@components/body-frame';
import { FaRegCircleXmark } from "react-icons/fa6";

const Pontos = () => {
    return (
        <BodyFrame>
            <Head title="Pontos"/>
            <a href="/home"><FaRegCircleXmark className='content-icon'/></a>
            <h1 className='center-text'>Meus Pontos</h1>
            <div className='divider' />
        </BodyFrame>
    );
}

export default Pontos;
