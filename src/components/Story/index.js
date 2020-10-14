import React, { Component } from "react";
import "./story.css";
import Like from "../../../src/assets/image/icons/like.svg";
import Coracao from "../../../src/assets/image/icons/coração.svg";
export default class Story extends Component {
  state = {
    stories: []
  };

  componentDidMount() {
    this.setState({
      stories: [
        {
          author: "Paulo Lima",
          text: "Hoje estou muito feliz!!!! Acertei na mega-sena uhuuuuu!!!",
          date: "10/10/2020"
        },
        {
          author: "Anitta",
          text: "Música nova pessoalllll",
          date: "23/09/2020"
        }
      ]
    });
  }

  render() {
    const { stories } = this.state;
    return (
      <div id="feeds">
        {stories.map((story, index) => (
          <div key={index} id="feed-news">
            <h4 id="feed-titulo">
              {story.author} - {story.date}
            </h4>
            <span id="feed-texto">{story.text}</span><br/>
            <img src={Like} alt="icon-like" id="icon-like" />
            <img src={Coracao} alt="icon-coracao" id="icon-coracao" />
          </div>
        ))}
      </div>
    );
  }
}
