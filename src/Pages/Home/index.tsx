import 'Pages/Home/style.css'
import NavBar from 'Components/NavBar/index'
import Aside from 'Components/Aside'
import { useState } from 'react'

const Home = () => {

    const [state, setState] = useState('hidden');

    const HabClick = () => {
        if (state === 'hidden') {
            setState('');
        }
        else {
            setState('hidden')
        }
    }

    window.onresize = () => {
        setState('hidden');
    }

    return (
        <>
            <NavBar onHabClick={HabClick} />
            <Aside state={state} />
        </>
    );
}

export default Home;