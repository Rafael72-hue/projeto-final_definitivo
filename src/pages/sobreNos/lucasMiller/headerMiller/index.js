import React from "react";
import Profile from "../profile/index";
import "./styles.css";
import img from "./img/codes.jpg";
import calculator from "./img/calculadora.svg";
import icon from "../../../../assets/image/icons/curriculo.svg";
import listaCompras from "./img/lista-compras.svg";

export default class HeaderMiller extends React.Component {
  state = {
    blank: "_blank"
  };

  render() {
    const { blank } = this.state;

    return (
      <>
        <header id="header-home">
          <section id="section-img-capa-profile">
            <img src={img} alt="Foto da capa" id="img-capa" />
          </section>
          <section id="section-myProfile">
            <Profile />
            <h1 className="title-lucasMiller">Lucas Miller</h1>
            <h3 className="title-lucasMiller">Front-end Developer</h3>
          </section>
          <section id="section-nav">
            <h3 id="title-projects">Alguns projetos</h3>
            <section id="section-projects">
              <a
                target={blank}
                className="links-projects"
                href="https://curriculofigmalucasmiller.000webhostapp.com/"
              >
                <img
                  src={icon}
                  title="Meu curriculo"
                  alt="Meu curriculo"
                  className="img-projects"
                />
              </a>
              <a
                href="https://mensagem-secreta-rocketseat.000webhostapp.com/index.html"
                className="links-projects"
                target={blank}
              >
                <img
                  title="Mensagem secreta(Rocketseat)"
                  src={listaCompras}
                  className="img-projects"
                  alt="Mensagem secreta"
                />
              </a>
              <a
                href="https://calculadora-html-css-javascript.000webhostapp.com/"
                className="links-projects"
                target={blank}
              >
                <img
                  title="Calculadora com HTML5, CSS3 e JavaScript"
                  className="img-projects"
                  src={calculator}
                  alt="Calculadora com HTML5, CSS3 e JavaScript"
                />
              </a>
            </section>
          </section>
        </header>
      </>
    );
  }
}
