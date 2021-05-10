import video from 'assets/videos/logo.mp4'
import 'Components/NavBar/style.css'

const NavBar = () => {
    return (
        <header>
            <video src={video} autoPlay loop></video>
            <nav>
                <ul className="menu">
                    <li className="item-menu">
                        <a href="#portifolio">PORTIFÓLIO</a>
                    </li>
                    <li className="item-menu">
                        <a href="#sobre">SOBRE</a>
                    </li>
                    <li className="item-menu">
                        <a href="#contatos">CONTATO</a>
                    </li>
                    <li className="menu-hab">
                        <a href="#teste" className="icon">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;