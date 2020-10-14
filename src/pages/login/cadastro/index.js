import React from "react";

import "./style.css";

const Cadastro = () => {
  var fecharCadastro = () => {
    document.querySelector("footer").style.filter = "blur(0px)";
    document.getElementById("minhaInformacao").style.filter = "blur(0px)";
    document.getElementById("telaCadastro").style.display = "none";
  };
  return (
    <div id="telaCadastro" className=" animation">
      <p id="nomeCad">Cadastre-se</p>
      <form>
        <div onClick={fecharCadastro} id="botaoFechar">
          <div id="cadOne"></div>
          <div id="cadTwo"></div>
        </div>
        <input
          type="text"
          className="inputCadastro esquerda"
          placeholder="Nome"
        />
        <br />
        <input
          type="text"
          className="inputCadastro direita"
          placeholder="Sobrenome"
        />
        <br />
        <input
          type="email"
          className="inputCadastro emailSenha"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          className="inputCadastro emailSenha"
          placeholder="senha"
        />
        <br />
        <label id="labelGenero">Gênero</label>
        <br />
        <br />
        <div id="div_genero">
          <div className="div-masculino">
            <label className="gender" for="male">
              Masculino
            </label>
            <input type="radio" name="gender" id="male" />
          </div>
          <div className="div-feminino">
            <label className="gender" for="female">
              Feminino
            </label>
            <input type="radio" name="gender" id="female" />
          </div>
        </div>
        <button id="botaoDeCadastrar">Cadastrar</button>
      </form>
    </div>
  );
};
export default Cadastro;
