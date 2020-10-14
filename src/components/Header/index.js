import React, { Component } from "react";
import "./styles.css";
import home from "../../assets/image/casa.svg";
import perfil from "../../assets/image/adicionar-amigo.svg";
import btnexit from "../../assets/image/icons/sair.svg";
import logoHeader from "../../assets/image/logo-header.png";
import chat from "../../assets/image/icons/bolha-falar.svg";

import { Link } from "react-router-dom";
import maisOpcoes from "../../assets/image/icons/seta-para-baixo.svg";
import fecharOpcoes from "../../assets/image/icons/cancelar.svg";

class Header extends Component {
  clicar = () => {
    document.getElementById("div__opcoes").style.display = "block";
    document.querySelector("#mostrar").style.display = "none";
    document.querySelector("#fechar").style.display = "block";
    document.querySelector(".switch--shadow + label").style.display = "block";
  };
  fechar = () => {
    document.getElementById("div__opcoes").style.display = "none";
    document.querySelector("#mostrar").style.display = "block";
    document.querySelector("#fechar").style.display = "none";
    document.querySelector(".switch--shadow + label").style.display = "none";
  };

  goHome(event) {
    window.location.replace("/home");
  }

  goListaAmigos() {
    window.location.replace("/buscar_amigos");
  }

  sair() {
    window.location.replace("/login");
  }
  render() {
    return (
      <header>
        <div>
          <img
            src={maisOpcoes}
            alt="mais opcões"
            onClick={this.clicar}
            id="mostrar"
            title="Opções"
          />

          <img
            src={fecharOpcoes}
            alt="fechar opções"
            onClick={this.fechar}
            id="fechar"
            title="Opções"
          />

          <div id="div__opcoes">
            <label id="lbl_dark_mode">Dark Mode</label>

            <label id="lblexit" for="btnexit">
              Sair
            </label>
            <img
              id="btnexit"
              src={btnexit}
              alt="botão para sair"
              className="buttonChoose"
              onClick={this.sair}
            />
          </div>
        </div>

        <Link to="/buscar_amigos">
          <img
            src={perfil}
            alt="icone-perfil"
            id="icone-perfil"
            title="Buscar Amigos"
          />
        </Link>

        <Link to="/home">
          <img
            src={home}
            alt="icone-home"
            id="icone-home"
            title="Pagina Inicial"
          />
        </Link>
        <Link to="/chat">
          <img src={chat} alt="ir para o chat" id="icone-chat" />
        </Link>
        <img src={logoHeader} alt="logo do header" id="logo_header" />
      </header>
    );
  }
}

export default Header;
