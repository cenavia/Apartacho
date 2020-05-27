import React from "react";
import '../assets/styles/components/MailConfirmation.scss';
import mailConfirmation from "../assets/static/MailConfirmationIcon.png";

const MailConfirmation = () => {
  return (
    <div className="MailConfirmation">
      <h2>Verifique su correo para confirmar su cuenta</h2>
      <img src={mailConfirmation} alt="mail confirmation logo"></img>
    </div>
  );
};

export default MailConfirmation;
