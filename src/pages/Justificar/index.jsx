import './styles.css'
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';
import { FaRegCircleXmark } from "react-icons/fa6";

const Justificar = () => {
    return (
        <BodyFrame >
            <Head title="Justificar"/>
            <a href="/home"><FaRegCircleXmark className='content-icon'/></a>
            <h1 className='center-text'>Justificar Faltas</h1>
            <div className='divider flex'>
            </div>
        </BodyFrame>
    );
}

export default Justificar;
