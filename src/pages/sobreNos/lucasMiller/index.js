import React from "react";
import seta from "../../../assets/image/icons/seta-esquerda.svg";
import Header from "../../../components/Header/index";
import "./styles.css";
import Paragraphs from "../lucasMiller/paragraph/index";
import HeaderMiller from "./headerMiller/index";
import FooterMiller from "./footerMiller/index";

export default class ProfileLucasMiller extends React.Component {
  back = () => {
    this.props.history.push("/sobre_nos");
  };

  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = "FriendsBook | Perfil - Lucas Miller";
  }
  render() {
    return (
      <>
        <Header />
        <HeaderMiller />
        <img onClick={this.back} src={seta} alt="Voltar" id="button-back" />
        <main id="main-miller">
          <Paragraphs />
        </main>
        <FooterMiller />
      </>
    );
  }
}
