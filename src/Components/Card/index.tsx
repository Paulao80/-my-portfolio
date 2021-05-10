import 'Components/Card/style.css'

type Props = {
    figura: string;
    alt: string;
    titulo: string;
    texto: string;
}

const Card = ({ figura, alt, titulo, texto }: Props) => {

    return (
        <div className="card">
            <figure className="figuras">
                <img src={figura} alt={alt} />
            </figure>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
    );

}

export default Card;