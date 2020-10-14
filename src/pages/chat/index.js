import React, { Component } from "react";
import "./style.css";
import chatFoto from "../../assets/image/foto-paulo-lima.jpg";
import chamada_de_video from "../../assets/image/chat/video-chamada.svg";
import chamada_de_voz from "../../assets/image/chat/ligar.svg";
import enviar from "../../assets/image/chat/seta-direita.svg";
import gravarVoz from "../../assets/image/chat/microfone.svg";
import galeria from "../../assets/image/chat/galeria.svg";
import home from "../../assets/image/casa.svg";
import mostrarMais from "../../assets/image/icons/seta-esquerda.svg";

export default class Chat extends Component {
  texto = () => {
    var mensagem = document.createElement("p", "className=mensagem");
    mensagem.innerHTML = document.getElementById("input_digitar").value;
    document.querySelector("#res").appendChild(mensagem);
    document.getElementById("input_digitar").value = "";
  };
  voltarHome = (event) => {
    this.props.history.push("/home");
  };
  mostrarAside = () => {
    document.getElementById("aside_chat").style.display = "block";
  };
  fecharAside = () => {
    document.getElementById("aside_chat").style.display = "none";
  };

  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = " Friendsbook - Chat";
  }
  render() {
    return (
      <div id="div_chat">
        <aside id="aside_chat">
          <img
            src={home}
            alt="voltar para home"
            id="icone_home_chat"
            onClick={this.voltarHome}
          />
          <h1 id="titulo_chat">Chat</h1>
          <hr />
          <div className="div_usuario_chat" onClick={this.fecharAside}>
            <img src={chatFoto} alt="foto usuario 1" className="chat_usuario" />
            <p>Paulo Lima</p>
          </div>
        </aside>
        <section id="section_chat">
          <header id="header_chat">
            <img
              src={mostrarMais}
              alt="mostrar opções"
              id="botao_voltar"
              onClick={this.mostrarAside}
            />
            <img src={chatFoto} alt="foto do chat" id="foto_chat" />
            <p id="nome_usuario_chat">Paulo Lima</p>
            <div id="div_icones_chat">
              <img
                src={chamada_de_video}
                alt="chamada de vídeo"
                className="icones_chat"
                title="Chamada de Vídeo"
              />
              <img
                src={chamada_de_voz}
                alt="chamada de voz"
                className="icones_chat"
                title="Chamada de Voz"
              />
              <div id="mais_opcoes_chat" title="Mais Opções">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
              </div>
            </div>
          </header>
          <section id="conversa_com_paulo_lima"></section>
          <section id="res">
            <p id="primeira_mensagem_paulo">
              Olá cara, faz tempo que a gente não se encontra, vamos marcar um
              dia pra sair?
            </p>
            <p id="resposta_com_paulo">Vamos sim cara!</p>
            <p id="segunda-mensagem-paulo">
              Eu ganhei na mega sena, estou muito feliz uhuuu!
            </p>
            <p id="segunda-resposta">
              Parabéns cara, aceito uma parte do dinheiro kkkk.
            </p>
          </section>
          <footer id="parte-de-baixo-chat">
            <img src={galeria} alt="abrir galeria" id="botao_galeria" />
            <input
              type="text"
              placeholder="Digite uma mensagem"
              id="input_digitar"
            />

            <img
              src={enviar}
              alt="botão enviar"
              id="botao_enviar"
              onClick={this.texto}
            />
            <img src={gravarVoz} alt="gravar voz" id="botao_gravar" />
          </footer>
        </section>
      </div>
    );
  }
}
