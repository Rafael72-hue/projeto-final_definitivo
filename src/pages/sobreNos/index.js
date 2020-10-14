import React, { Component } from "react";
import Header from "../../components/Header/index";
import "./style.css";
import perfilRafael from "../../assets/image/perfilRafael/foto_perfil_rafael.jpg";
import perfilCamilla from "../../assets/image/foto_perfil_camilla.jpeg";
import ProfileLucasMiller from "../../assets/image/profileLucasMiller/myProfile.jpg";
import perfilLiliane from "../../assets/image/Liliane.jpg";
import html from "../../assets/image/icons/html5.svg";
import css from "../../assets/image/icons/css3.svg";
import javaScript from "../../assets/image/icons/javascript.png";
import react from "../../assets/image/icons/react.png";
import apiRest from "../../assets/image/icons/api.svg";
import capa from "../../assets/image/fundo-aside-tecnologias.jpg";
import { Link } from "react-router-dom";

export default class SobreNos extends Component {
  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = " Friendsbook - Sobre Nós";
  }
  render() {
    return (
      <div>
        <Header />
        <div id="section_sobre_nos">
          <h1 id="titulo-perfis">Conheça um pouco sobre nós</h1>
          <div id="flex_layout">
            <div className="item_perfil">
              <img
                src={perfilCamilla}
                alt="perfil Camilla"
                className="image-profile"
              />

              <button className="botao_sobre_nos">
                <Link to="/perfil_camilla">Ver Perfil</Link>
              </button>
            </div>

            <div className="item_perfil">
              <img
                src={ProfileLucasMiller}
                alt="Perfil de Lucas Miller"
                className="image-profile"
              />

              <button className="botao_sobre_nos">
                <Link to="/profilelucasmiller">Ver Perfil</Link>
              </button>
            </div>

            <div className="item_perfil itens_de_baixo">
              <img
                src={perfilRafael}
                alt="perfil rafael"
                className="image-profile"
                title="Rafael Eliú"
              />

              <button className="botao_sobre_nos">
                <Link to="/perfil_rafael">Ver Perfil</Link>
              </button>
            </div>
            <div className="item_perfil itens_de_baixo">
              <img
                src={perfilLiliane}
                alt="perfil liliane"
                className="image-profile"
                title="Liliane"
              />

              <button className="botao_sobre_nos">
                <Link to="/perfil_liliane">Ver Perfil</Link>
              </button>
            </div>
          </div>
        </div>
        <h1 id="titulo_tecnologias_usadas">Tecnologias usadas neste projeto</h1>
        <div id="div_tecnologias_usadas">
          <div id="aside_esquerdo_tecnologias">
            <img src={capa} alt="capa" id="img_capa_tecnologias" />
          </div>
          <div id="aside_direito_tecnologias">
            <div className="div_icones">
              <p>HTML 5</p>
              <img
                src={html}
                alt=" icone html "
                className="icones_tecnologias_usadas"
              />
            </div>
            <hr className="linha_tecnologias" />
            <div className="div_icones">
              <p> CSS 3</p>
              <img
                src={css}
                alt=" icone css "
                className="icones_tecnologias_usadas"
              />
            </div>
            <hr className="linha_tecnologias" />
            <div className="div_icones">
              <p>JAVASCRIPT</p>
              <img
                src={javaScript}
                alt=" icone javascript "
                className="icones_tecnologias_usadas"
              />
            </div>
            <hr className="linha_tecnologias" />
            <div className="div_icones">
              <p>REACT</p>
              <img
                src={react}
                alt=" icone javascript "
                className="icones_tecnologias_usadas"
              />
            </div>
            <hr className="linha_tecnologias" />
            <div className="div_icones">
              <p>API REST</p>
              <img
                src={apiRest}
                alt=" icone javascript "
                className="icones_tecnologias_usadas"
              />
            </div>
          </div>
        </div>
        <footer id="footer_sobre_nos">
          &copy; Projeto criado por: Liliane, Rafael, Camilla, Lucas
        </footer>
      </div>
    );
  }
}
