import React from "react";
import "./styles.css";

export default class Time extends React.Component {
  state = {
    messager: ""
  };

  componentDidMount() {
    this.setDateHour();
  }

  setDateHour = () => {
    let days_of_the_week = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-fera",
      "Sexta-feira",
      "Sábado"
    ];

    let months_year = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Desembro"
    ];

    let today = new Date();
    let hours = today.getHours();

    if (hours >= 0 && hours < 5) {
      this.setState({
        messager: `${days_of_the_week[today.getDay()]}, ${today.getDate()} de ${
          months_year[today.getMonth()]
        } de ${today.getFullYear()}. Boa Madrugada!`
      });
    } else if (hours >= 5 && hours < 12) {
      this.setState({
        messager: `${days_of_the_week[today.getDay()]}, ${today.getDate()} de ${
          months_year[today.getMonth()]
        } de ${today.getFullYear()}. Bom dia!`
      });
    } else if (hours >= 12 && hours < 18) {
      this.setState({
        messager: `${days_of_the_week[today.getDay()]}, ${today.getDate()} de ${
          months_year[today.getMonth()]
        } de ${today.getFullYear()}. Boa tarde!`
      });
    } else {
      this.setState({
        messager: `${days_of_the_week[today.getDay()]}, ${today.getDate()} de ${
          months_year[today.getMonth()]
        } de ${today.getFullYear()}. Boa noite!`
      });
    }
  };

  render() {
    const { messager } = this.state;

    return (
      <>
        <section id="section-time-showScreen">
          {messager && <p id="messager">{messager}</p>}
        </section>
      </>
    );
  }
}
