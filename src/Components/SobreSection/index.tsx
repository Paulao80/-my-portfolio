import Card from 'Components/Card';
import 'Components/SobreSection/style.css';
import figura1 from 'assets/images/figura1.jpg';
import figura2 from 'assets/images/figura2.jpg';
import figura3 from 'assets/images/figura3.png';

const SobreSection = () => {

    return (
        <section id="sobre">
            <div className="cards">
                <Card
                    figura={figura1}
                    alt="Figura 1"
                    titulo="Deixe a programação comigo e foque no seu negócio"
                    texto="Entendo que a gerência de um negócio é sempre acompanhada de muitas responsabilidades. É por
                    isso que vou te ajudar a expandir o alcance da sua marca sem gerar mais preocupações. Quero
                    que seu negócio seja um sucesso!"
                />
                <Card
                    figura={figura2}
                    alt="Figura 2"
                    titulo="Seja visto e encontrado por várias pessoas"
                    texto='Segundo dados da Google, cerca de 70% das pessoas pesquisam na internet antes de tomar a decisão
                    de fechar um negócio. Com um Site sua marca estará na "página da frente" das pesquisas. Você vai
                    converter mais clientes para o seu negócio!'
                />
                <Card
                    figura={figura3}
                    alt="Figura 3"
                    titulo="Uma experiência melhor para o seu cliente"
                    texto="Seja no computador ou no celular, um site bem construindo permite que seus clientes encontrem sua
                    marca e veja detalhadamente o que você está oferecendo. Mostraremos o seu melhor em qualquer
                    lugar!"
                />
            </div>
        </section>
    );

}

export default SobreSection;