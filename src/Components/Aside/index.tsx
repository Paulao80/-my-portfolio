import 'Components/Aside/style.css'
import { Link } from 'react-router-dom';

type Props = {
    state: string
}

const Aside = ({ state }: Props) => {

    return (
        <aside className={state} >
            <ul>
                <li>
                    <Link to="#portifolio">PORTIFÓLIO</Link>
                </li>
                <li>
                    <Link to="#sobre">SOBRE</Link>
                </li>
                <li>
                    <Link to="#contatos">CONTATO</Link>
                </li>
            </ul>
        </aside >
    );

}

export default Aside;