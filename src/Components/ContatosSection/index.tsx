import Bloco from 'Components/Bloco';
import 'Components/ContatosSection/style.css';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Redes from 'Components/Redes';

const ContatosSection = () => {
    return (
        <section id="contatos">
            <div className="blocos">
                <Bloco titulo="Redes Sociais">
                    <ul className="Redes-list">

                        <Redes
                            rede="Facebook"
                            link="https://www.facebook.com/paulovinicius.costanogueira"
                            icon={faFacebookF}
                        />

                        <Redes
                            rede="Instagram"
                            link="https://www.instagram.com/paulao8989/"
                            icon={faInstagram}
                        />

                        <Redes
                            rede="Twitter"
                            link="https://twitter.com/Paulao80"
                            icon={faTwitter}
                        />

                        <Redes
                            rede="Youtube"
                            link="https://www.youtube.com/channel/UCTV42H0dsfMrWbeR9lGzPUA"
                            icon={faYoutube}
                        />

                        <Redes
                            rede="Github"
                            link="https://github.com/Paulao80"
                            icon={faGithub}
                        />

                    </ul>
                </Bloco>
                <Bloco titulo="Contatos">
                    <ul className="Redes-list">

                        <Redes
                            rede="Whatsapp"
                            descricao="(69) 99264-2095"
                            link="https://api.whatsapp.com/send?phone=5569992642095"
                            icon={faWhatsapp}
                        />

                        <Redes
                            rede="Telefone"
                            descricao="(69) 99264-2095"
                            link="tel:+55-69-99264-2095"
                            icon={faMobileAlt}
                        />

                        <Redes
                            rede="Email"
                            descricao="pauloviniciusjipa@gmail.com"
                            link="mailto:pauloviniciusjipa@gmail.com"
                            icon={faEnvelope}
                        />

                    </ul>
                </Bloco>
            </div>
        </section>
    );
}

export default ContatosSection;