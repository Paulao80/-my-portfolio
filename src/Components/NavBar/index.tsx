import video from 'assets/videos/logo.mp4'
import 'Components/NavBar/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

type Props = {
    onHabClick: Function
}

const NavBar = ({ onHabClick }: Props) => {

    return (
        <header>
            <video src={video} autoPlay loop></video>
            <nav>
                <ul className="menu">
                    <li className="item-menu">
                        <Link to="#portifolio">PORTIFÓLIO</Link>
                    </li>
                    <li className="item-menu">
                        <Link to="#sobre">SOBRE</Link>
                    </li>
                    <li className="item-menu">
                        <Link to="#contatos">CONTATO</Link>
                    </li>
                    <li className="menu-hab">
                        <button className="icon" onClick={() => onHabClick()}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default NavBar;