import React from "react";

import grupo from "../../../assets/image/group-filled-persons.svg";
import "./style.css";
import logoLogin from "../../../assets/image/logo-login.png";

const Info = () => {
  function logar() {
    document.getElementById("minhaInformacao").style.filter = "blur(3px)";
    document.querySelector("footer").style.filter = "blur(3px)";
    document.getElementById("meuLogin").style.display = "block";
  }

  function cadastro() {
    document.getElementById("minhaInformacao").style.filter = "blur(3px)";
    document.querySelector("footer").style.filter = "blur(3px)";
    document.getElementById("telaCadastro").style.display = "block";
  }

  return (
    <div id="minhaInformacao">
      <img src={logoLogin} id="logo" alt="Logo" />
      <p id="texto">
        Conecte-se com amigos e com o mundo ao seu redor no FriendsBook.
      </p>
      <img src={grupo} alt="grupo de pessoas" id="grupoPessoas" />
      <button id="botaoParaLogin" onClick={logar}>
        Logar
      </button>
      <div id="barra"></div>
      <button id="botaoCadastrar" onClick={cadastro}>
        Cadastre-se
      </button>
    </div>
  );
};
export default Info;
