import React from "react";
import Time from "../time/index";
import "./styles.css";

export default class FooterMiller extends React.Component {
  render() {
    return (
      <>
        <footer id="footerMiller">
          <section className="section-footer">
            <h3 className="title-footer-miller">Criador deste perfil</h3>
            <p id="paragraph-lucasMiller-creator-profile">
              &copy; By Lucas Miller.
            </p>
          </section>
          <section className="section-footer">
            <h3 className="title-footer-miller">Hoje</h3>
            <Time />
          </section>
        </footer>
      </>
    );
  }
}
