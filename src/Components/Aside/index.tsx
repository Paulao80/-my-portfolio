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
                    <a href="/#sobre">SOBRE</a>
                </li>
                <li>
                    <a href="/#contatos">CONTATO</a>
                </li>
            </ul>
        </aside >
    );

}

export default Aside;