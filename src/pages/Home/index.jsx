import './styles.css'
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';

const Home = () => {
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

            <button className='enter-btn'>Entrar</button>
        </BodyFrame>
    )
}

export default Home