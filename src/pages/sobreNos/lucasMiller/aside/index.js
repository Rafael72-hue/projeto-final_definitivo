import React from "react";
import github from "../../../../assets/image/icons/github.svg";
import linkedin from "../../../../assets/image/icons/linkedin.svg";
import "./styles.css";

export default class Aside extends React.Component {
  state = {
    blank: "_blank"
  };

  render() {
    const { blank } = this.state;

    return (
      <>
        <aside id="aside-miller">
          <section className="section-asideMiller">
            <a href="https://github.com/LucasMiller98" target={blank}>
              <img
                title="GitHub"
                src={github}
                alt="GitHub"
                id="img-footer-github"
                className="img-aside"
              />
            </a>
          </section>
          <section className="section-asideMiller">
            <a
              href="https://www.linkedin.com/in/lucas-miller-076564175/"
              target={blank}
            >
              <img
                title="LinkedIn"
                src={linkedin}
                alt="LinkedIn"
                id="img-footer-linkedin"
                className="img-aside"
              />
            </a>
          </section>
        </aside>
      </>
    );
  }
}
