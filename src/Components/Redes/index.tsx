import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'Components/Redes/style.css';

type Props = {
    rede: string;
    descricao?: string
    link: string;
    icon: IconDefinition
}

const Redes = ({ rede, descricao, link, icon }: Props) => {

    let classe = `Redes ${rede}`;

    return (

        <li className={classe}>
            <a href={link}>
                <FontAwesomeIcon icon={icon} />
            </a>
            <span>{descricao || rede}</span>
        </li >
    );
}

export default Redes;