import React, { Component } from "react";
import "./style.css";

import Header from "../../../components/Header/index";

import capa from "../../../assets/image/perfilRafael/capa-perfil-rafael.png";
import fotoDePerfil from "../../../assets/image/perfilRafael/foto_perfil_rafael.jpg";

import iconGitHub from "../../../assets/image/icons/github.svg";
import iconLinkedin from "../../../assets/image/icons/linkedin.svg";
import iconCurriculo from "../../../assets/image/icons/curriculo.svg";

import projetoCalc from "../../../assets/image/perfilRafael/projetos/projeto-calculadora.png";
import projetoCurri from "../../../assets/image/perfilRafael/projetos/projeto-curriculo.png";
import projetoPaginas from "../../../assets/image/perfilRafael/projetos/projeto-com-paginas-html.png";

import seta from "../../../assets/image/icons/seta-esquerda.svg";

export default class PerfilRafael extends Component {
  state = {
    target: "_blank"
  };
  mostrarSobreMim() {
    document.getElementById("sobre-mim-rafael").style.display = "block";
    document.getElementById("meus-projetos-rafael").style.display = "none";
  }

  mostrarProjetos() {
    document.getElementById("sobre-mim-rafael").style.display = "none";
    document.getElementById("meus-projetos-rafael").style.display = "block";
  }
  voltar = (event) => {
    this.props.history.push("/sobre_nos");
  };

  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = "FriendsBook | Perfil - Rafael";
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

        <section id="section_perfil_rafael">
          <img
            src={fotoDePerfil}
            alt="foto de perfil rafael"
            id="foto-de-perfil-rafael"
          />
          <img src={capa} alt="capa do perfil" id="capa-perfil-rafael" />
          <aside id="lado-informacoees-perfil-rafael">
            <p id="nome-rafael">Rafael Eliú</p>

            <p
              className="opcoes-aside-rafael primeiro-item"
              onClick={this.mostrarSobreMim}
            >
              Sobre Mim
            </p>
            <hr />

            <p className="opcoes-aside-rafael" onClick={this.mostrarProjetos}>
              Meus Projetos
            </p>
            <hr />

            <a
              href="https://github.com/Rafael72-hue"
              target={this.state.target}
            >
              <img
                src={iconGitHub}
                alt="Meu GitHub"
                className="size-icon icon_github"
                title="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-eliú"
              target={this.state.target}
            >
              <img
                src={iconLinkedin}
                alt="Meu Linkedin"
                className="size-icon"
                title="Linkedin"
              />
            </a>
            <a
              href="https://curriculo-projeto.000webhostapp.com/"
              target={this.state.target}
            >
              <img
                src={iconCurriculo}
                alt="meu curriculo"
                className="size-icon icon_curriculo"
                title="Meu Curriculo"
              />
            </a>
          </aside>

          <div id="sobre-mim-rafael">
            <h1 id="titulo-sobre-mim-rafael">sobre mim</h1>
            <p id="texto-sobre-rafael">
              Tenho 18 anos,moro em Parnamirim RN, meu primeiro contato com
              códigos foi no projeto Start em Recife - PE e desde então estão
              amando criar sites e pesquisar mais sobre as coisas que podem ser
              feitas com os códigos, sou uma pessoa que gosta de trabalhar em
              equipe, sempre quero mostrar minhas ideias para os meus colegas de
              equipe, sou super tranquilo mas quando me conhece bem me torno uma
              pessoa bem animada, meu gosto musical é bem diversificado e estou
              sempre em busca de aprender mais sobre essa area que me apaixonei
              a segunda vista, porque a primeira pra mim era tudo doido.
            </p>
          </div>

          <div id="meus-projetos-rafael">
            <p id="texto-projetos-rafael">
              Alguns projetos que fiz, são apenas ilustrações, os projetos estão
              no github
            </p>
            <img
              src={projetoCalc}
              alt="calculadora"
              className="size-image-rafael"
              title="Calculadora"
            />
            <img
              src={projetoCurri}
              alt="projeto curriculo"
              className="size-image-rafael"
              title="Curriculo"
            />
            <img
              src={projetoPaginas}
              alt="varias paginas"
              className="size-image-rafael"
              title="Primeiro projeto com mais de uma pagina"
            />
          </div>
        </section>
      </div>
    );
  }
}
