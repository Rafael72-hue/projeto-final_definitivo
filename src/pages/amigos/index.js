import React, { Component } from "react";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import Lista from "../../components/Lista/index";

import "./home.css";

import Api from "../../services/api";

class Home extends Component {
  state = {
    friends: "",
    loading: false,
    items: [],
    itemsTotal: [],
    pessoasFiltradas: [],
    indexInicial: 0,
    indexFinal: 10,
    totalPage: 0,
    pageNext: 0,
    pagePrev: 0,
    messagemErro: ""
  };

  componentDidMount() {
    let title = document.querySelector("title");
    title.innerText = "Friendsbook | Buscar Amigos";
    this.carregarAmigos();
  }

  async carregarAmigos() {
    let messagemErro = "";
    let response = await Api.get("/?results=5000").catch(function (error) {
      messagemErro =
        "Uau, calma coleguinha. Sistema fora do ar, tenta mais tarde! ;)";
    });

    if (response && response.data && response.data.results) {
      this.setState({
        itemsTotal: response.data.results,
        loading: true,
        pessoasFiltradas: [],
        totalPage: response.data.results / 10,
        pageNext: 2,
        pagePrev: 1,
        messagemErro: ""
      });

      let { itemsTotal, indexInicial, indexFinal } = this.state;
      this.setState({
        items: itemsTotal.slice(indexInicial, indexFinal)
      });
      this.setState({
        indexInicial: indexFinal + 1,
        indexFinal: indexFinal + 10
      });
    } else {
      this.setState({
        items: [],
        loading: false,
        messagemErro: messagemErro
      });
    }
  }

  searchFriends = (event) => {
    this.setState({ friends: event.target.value });
    if (!event.target.value) {
      this.setState({
        pessoasFiltradas: []
      });
    }
  };

  buttonEntrar = (event) => {
    event.preventDefault();

    const { friends } = this.state;

    if (friends === "") {
      document.getElementById("popUp_error").style.display = "block";
      document.querySelector("#div-geral").style.filter = "blur(3px)";
      this.setState({
        pessoasFiltradas: []
      });
    } else {
      let itemsFiltrados = this.state.itemsTotal.filter(
        (pessoa) =>
          pessoa.name.first.toLowerCase().indexOf(friends.toLowerCase()) > -1
      );
      this.setState({
        pessoasFiltradas: itemsFiltrados
      });
    }
  };
  fechar_popUp() {
    document.getElementById("popUp_error").style.display = "none";
    document.querySelector("#div-geral").style.filter = "blur(0px)";
  }
  pagePrev = (event) => {
    let { itemsTotal, indexInicial, indexFinal, pagePrev } = this.state;

    this.setState({
      items: itemsTotal.slice(indexInicial, indexFinal)
    });

    this.setState({
      pageNext: pagePrev,
      pagePrev: pagePrev - 1,
      indexInicial: indexFinal + 1,
      indexFinal: indexFinal + 10
    });
  };
  pageNext = (event) => {
    let { itemsTotal, indexInicial, indexFinal, pageNext } = this.state;

    this.setState({
      items: itemsTotal.slice(indexInicial, indexFinal)
    });

    this.setState({
      pageNext: pageNext + 1,
      pagePrev: pageNext,
      indexInicial: indexFinal + 1,
      indexFinal: indexFinal + 10
    });
  };

  render() {
    const {
      friends,
      items,
      loading,
      pessoasFiltradas,
      messagemErro
    } = this.state;

    return (
      <div>
        <Header />
        <div id="div-geral">
          <div id="pesquisa">
            <label>Pesquisar amigos</label>
            <input
              type="search"
              autoComplete="off"
              onChange={this.searchFriends}
              value={friends}
              placeholder="Pesquisar"
              id="inputPesquisar"
            />
            <button id="search" onClick={this.buttonEntrar}>
              Buscar
            </button>
          </div>
          <div id="conteudo">
            <h2 id="tituloConteudo">Lista de amigos</h2>
            {friends && (
              <Lista
                items={pessoasFiltradas}
                loading={loading}
                messagemErro={messagemErro}
              />
            )}
            {!friends && (
              <Lista
                items={items}
                loading={loading}
                messagemErro={messagemErro}
              />
            )}
          </div>
          <button
            id="searchPagePrev"
            disabled={this.state.pagePrev <= 1}
            onClick={this.pagePrev}
          >
            <div id="seta-esquerda"></div>
          </button>
          <button
            id="searchPageNext"
            disabled={this.state.pageNext > 5}
            onClick={this.pageNext}
          >
            <div id="seta-direita"></div>
          </button>
          <Footer />
        </div>
        <div id="popUp_error">
          <h1 id="h1_popUp">ERRO</h1>
          <p id="texto_popUp">
            Digite o nome do usuário que você procura para que possamos
            encontra-lo(a) para você.
          </p>
          <button id="btn_popUp" onClick={this.fechar_popUp}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
