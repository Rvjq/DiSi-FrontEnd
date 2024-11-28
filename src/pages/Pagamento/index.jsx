import './styles.css'
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';
import { FaRegCircleXmark } from "react-icons/fa6";

const Pagamento = () => {
    
    return (
        <BodyFrame>
            <Head title="Pagamento"/>
            <a href="/home"><FaRegCircleXmark className='content-icon'/></a>
            <h1 className='center-text'>Histórico Salarial</h1>
            <div className='divider' />
        </BodyFrame>    
    );
};

export default Pagamento;
