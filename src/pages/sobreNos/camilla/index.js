import React, { Component } from "react";
import "./style.css";

import Header from "../../../components/Header/index";

import fotoDePerfilCamilla from "../../../assets/image/foto_perfil_camilla.jpeg";

import iconGitHub from "../../../assets/image/icons/github.svg";
import iconLinkedin from "../../../assets/image/icons/linkedin.svg";
import iconCurriculo from "../../../assets/image/icons/curriculo.svg";

import seta from "../../../assets/image/icons/seta-esquerda.svg";

export default class PerfilCamilla extends Component {
  state = {
    target: "_blank"
  };
  voltar = (event) => {
    this.props.history.push("/sobre_nos");
  };
  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = "FriendsBook | Perfil - Camilla";
  }
  render() {
    return (
      <div>
        <Header />
        <img
          onClick={this.voltar}
          id="btn_voltar"
          src={seta}
          alt="Voltar"
          title="Voltar"
        />
        <article id="caixa_perfil_camilla">
          <section id="section_perfil_camilla">
            <img
              src={fotoDePerfilCamilla}
              alt="foto de perfil camilla"
              id="foto-de-perfil-camilla"
            />
            <p id="nome-camilla">Camilla Tainá</p>
            <a
              href="https://github.com/camillataina"
              target={this.state.target}
            >
              <img
                src={iconGitHub}
                alt="Meu GitHub"
                id="size-iconA"
                title="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/camilla-taina-9788251ab/"
              target={this.state.target}
            >
              <img
                src={iconLinkedin}
                alt="Meu Linkedin"
                id="size-iconB"
                title="Linkedin"
              />
            </a>
            <a
              href="https://curriculo-camilla.000webhostapp.com/"
              target={this.state.target}
            >
              <img
                src={iconCurriculo}
                alt="meu curriculo"
                id="size-iconC"
                title="Meu Curriculo"
              />
            </a>
          </section>
          <section id="section-perfil">
            <h1 id="titulo-sobre-mim-camilla">Sobre Mim</h1>
            <p id="texto-sobre-camilla">
              Tenho 20 anos, moro em Olinda - PE, uma das minhas paixões são
              tocar guitarra e violão e nesse ano descobrir mais uma paixão que
              cresceu dentro de mim, que foi a area da tecnologia. Esse foi o
              meu primeiro contato com a área e posso dizer que isso é o que eu
              quero pra minha vida, o Programa Start é só o começo da minha
              carreira como desenvolvedora e o próximo passo é ingressar numa
              faculdade na área de Sistemas para Internet.
            </p>
            <h1 id="titulo-sobre-projetos">Meus Projetos</h1>
            <a
              href="https://bora-js.glitch.me/"
              target={this.state.target}
              id="projeto1"
            >
              Atividade em JavaScript
            </a>
            <a
              href="https://curriculo-pj.glitch.me/"
              target={this.state.target}
              id="projeto2"
            >
              Curriculo
            </a>
          </section>
        </article>
      </div>
    );
  }
}
