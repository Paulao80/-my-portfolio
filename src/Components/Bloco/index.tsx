import 'Components/Bloco/style.css';

interface BlocoProps {
    titulo: string;
    descricao?: string;
    footer?: string;
}

const Bloco: React.FC<BlocoProps> = (props) => {
    return (
        <div className="bloco">
            <div className="bloco-title">
                {props.titulo}
            </div>
            <div className="bloco-body">
                {props.descricao}

                {props.children}
            </div>
            <div className="bloco-footer">
                {props.footer}
            </div>
        </div>
    );
}

export default Bloco