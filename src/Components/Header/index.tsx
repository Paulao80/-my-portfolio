import video from 'assets/videos/logo.mp4'
import 'Components/Header/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

type Props = {
    onHabClick: Function
}

const Header = ({ onHabClick }: Props) => {

    return (
        <header>
            <video src={video} autoPlay loop></video>
            <nav>
                <ul className="menu">
                    <li className="item-menu">
                        <Link to="#portifolio">PORTIFÓLIO</Link>
                    </li>
                    <li className="item-menu">
                        <a href="/#sobre">SOBRE</a>
                    </li>
                    <li className="item-menu">
                        <a href="/#contatos">CONTATO</a>
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

export default Header;