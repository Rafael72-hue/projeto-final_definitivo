import React from "react";
import Header from "../../../components/Header/index";
import seta from "../../../assets/image/icons/seta-esquerda.svg";
import Liliane from "../../../assets/image/Liliane.jpg";
import "./perfil.css";

export default class PerfilLiliane extends React.Component {
  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = " Perfil - Liliane";
  }
  voltar = (event) => {
    this.props.history.push("/sobre_nos");
  };
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
        <section className="container-perfil">
          <div className="card-container">
            <div className="upper-container">
              <div className="image-container">
                <img
                  id="img-perfil"
                  align="left"
                  src={Liliane}
                  alt="Perfil Liliane"
                />
              </div>
              <div className="title-container">
                <h1>Liliane Silva de Arruda</h1>
                <span>Front-ent Developer jr.</span>
              </div>
            </div>
            <div className="lower-container">
              <div className="personal-container">
                <p>
                  Olá, meu nome é Liliane, estou aprendendo a desenvolver
                  aplicações <br />
                  web usando as tecnologias Html, CSS, Javascript e React.{" "}
                  <br />
                  <br />
                  Um pouco sobre mim... Considero-me uma pessoa determinada,
                  <br />
                  comprometida, e muito dedicada a aprender.
                </p>
                <h3>Contato </h3>
                <p>
                  <strong>Tefefone: </strong> (81) 99908-8863 / (81) 98501-2322
                  <br />
                  <strong>E-mail: </strong> liiliiarruda@gmail.com
                  <br />
                  <a
                    href="https://www.linkedin.com/in/liliane-silva-2458581ab/"
                    target="_blank"
                  >
                    <strong>Linked-in: </strong>{" "}
                    https://www.linkedin.com/in/liliane-silva-2458581ab/
                  </a>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
