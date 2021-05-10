import Aside from "Components/Aside";
import Header from "Components/Header";
import { useState } from "react";

const NavBar = () => {

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
            <Header onHabClick={HabClick} />
            <Aside state={state} />
        </>
    );
}

export default NavBar;
