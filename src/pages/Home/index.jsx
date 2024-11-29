import './styles.css'
import { useState } from 'react';
import { API_ENDPOINTS, API } from "@api";
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';

const Home = () => {

    const [checkInID, setCheckInID] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');
    const [breakStartTime, setBreakStartTime] = useState('');
    const [breakEndTime, setBreakEndTime] = useState('');

    const checkIn = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post(API_ENDPOINTS.CHECKIN, {userId: localStorage.getItem('id')});
            console.log('Check-in realizado!', response);
            setCheckInID(response.data.id);
        } catch (error) {
            console.error('Erro ao realizar Check-in:', error);
        }
    }

    const checkOut = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post(API_ENDPOINTS.CHECKOUT+checkInID);
            console.log('Check-out realizado!', response);
        } catch (error) {
            console.error('Erro ao realizar Check-out:', error);
        }
    }

    const breakStart = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post(API_ENDPOINTS.CHECKOUT+checkInID);
            console.log('Início do intervalo realizado!', response);
        } catch (error) {
            console.error('Erro ao realizar Início do intervalo:', error);
        }
    }

    const breakEnd = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post(API_ENDPOINTS.CHECKOUT+checkInID);
            console.log('Fim do intervalo realizado!', response);
        } catch (error) {
            console.error('Erro ao realizar Fim do intervalo:', error);
        }
    }

    return (
        <BodyFrame>
            <Head title="Home"/>
            <h1 className='text-title'>Meu Saldo de Horas:<br/>00:00</h1>
            <div className='divider'>
                <img src="/imagens/calendar-icon.png" alt="calendar" className='home-icon-higlight'/>
                <h1 className='text-higlight'>Terça, 5 de fevereiro 2024</h1>
            </div>
            <h1 className='left-text'>Jornada</h1>

            <img src="/imagens/enter-icon.png" alt="enter" className='home-icon'/>
            <h1 className='text-item-big'>Entrada</h1>
            <h1 className='text-item' style={{width: "60%"}}>Planejado<br/>12:00</h1>
            <div className='line-break'/>

            <img src="/imagens/coffe-icon.png" alt="coffe" className='home-icon'/>
            <h1 className='text-item-big'>Início intervalo</h1>
            <h1 className='text-item' style={{width: "45%"}}>Planejado<br/>14:00 | 14:30</h1>
            <div className='line-break'/>

            <img src="/imagens/work-icon.png" style={{margin: "7px 0px 0px 17px"}} alt="work" className='home-icon'/>
            <h1 className='text-item-big'>Fim intervalo</h1>
            <div className='line-break'/>

            <img src="/imagens/exit-icon.png" alt="exit" className='home-icon'/>
            <h1 className='text-item-big'>Saída</h1>
            <h1 className='text-item'style={{width: "65%"}}>Planejado<br/>20:00</h1>
            <div className='line-break'/>

            <button onClick={checkIn} className='btn'>Entrar</button>
            <button onClick={checkOut} className='btn exit-btn'>Saída</button>
            <button onClick={breakStart} className='btn'>Início Intervalo</button>
            <button onClick={breakEnd} className='btn exit-btn'>Fim Intervalo</button>
        </BodyFrame>
    )
}

export default Home