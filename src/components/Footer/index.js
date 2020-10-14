import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer-geral">
        <p>
          Projeto criado com o objetivo de aprendizado. Quer saber quem nós
          somos? <Link to="/sobre_nos">Clique Aqui!</Link>{" "}
        </p>
      </footer>
    );
  }
}
