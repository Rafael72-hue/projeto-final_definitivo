import React from "react";
import Aside from "../aside/index";
import "./styles.css";

export default class Paragraphs extends React.Component {
  render() {
    return (
      <>
        <main id="main-paragraph">
          <section id="section-aboutme">
            <h3 id="title-aboutme">Sobre mim</h3>
            <p className="paragraph-aboutme">
              Meu nome é Lucas Miller, tenho 21 anos, moro em Jaboatão dos
              Guararapes, toco clarinete na banda e na orquestra na Assembleia
              de Deus matriz, em Jaboatão. Gosto muito de música, tecnologia,
              gosto de ser organizado, aprender coisas novas, gosto de
              conhecimento.
            </p>
            <h3 className="h3-aboutme">Tecnologias</h3>
            <p className="paragraph-aboutme">
              HTML5, CSS3 e o básico de JavaScript, React.js e API rest, mas
              estou correndo atrás para aprender o máximo e a maior quantidade
              de tecnologias possíveis. Eu dou o melhor de mim. Já estudei
              Python, pela internet com o Gustavo Guanabara, e Java, no curso do
              IFPE.
            </p>
            <h3 className="h3-aboutme">Curso</h3>
            <p className="paragraph-aboutme">
              Estou estudando informatica para internet, no IFPE, campus
              Jaboatão; terceiro período. Lá no curso do IFPE, eu vi a base de
              Java orientado a objetos.
            </p>
            <h3 className="h3-aboutme">Hobby</h3>
            <p className="paragraph-aboutme" id="paragraph-aboutme-only">
              Toco clarinete na banda e na orquestra da igreja assembleia de
              Deus em Jaboatão dos Guararapes desde os 12 anos de idade.
            </p>
          </section>
        </main>
        <Aside />
      </>
    );
  }
}
