import React from "react";
import profileLucasMiller from "../../../../assets/image/profileLucasMiller/myProfile.jpg";
import "./styles.css";

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <img
          id="img-picture-miller"
          src={profileLucasMiller}
          alt="Meu perfil"
        />
      </>
    );
  }
}
