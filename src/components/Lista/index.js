import React, { Component } from "react";
import "./styles.css";

class Lista extends Component {
  render() {
    const { items, loading, messagemErro } = this.props;

    if (!loading && !messagemErro) {
      return (
        <div id="div-loading">
          <h2 id="loading">Loading...</h2>
        </div>
      );
    } else if (messagemErro) {
      return (
        <div id="div-messagem-erro">
          <h2 id="messagem-erro"> {messagemErro}</h2>
        </div>
      );
    } else {
      return (
        <div className="container">
          {items.map((item, index) => (
            <div id="caixa" key={index}>
              <img
                className="img-friends"
                src={item.picture.large}
                alt={item.name.first}
              />
              <div id="div-dados">
                <p id="nome">Username: {item.name.first}</p>
                <br />
                <p id="idade">Idade: {item.dob.age}</p>
                <br />
                <p id="nacionalidade">Nacionalidade: {item.location.country}</p>
              </div>
              <br />
              <button id="button-add">Adicionar</button>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Lista;
