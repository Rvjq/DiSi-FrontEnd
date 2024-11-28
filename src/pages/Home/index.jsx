import './styles.css'
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';

const Home = () => {
    return (
        <BodyFrame>
            <Head title="Home"/>
            <h1 className='center-text'>Home</h1>
            <div className='divider' />
        </BodyFrame>
    )
}

export default Home