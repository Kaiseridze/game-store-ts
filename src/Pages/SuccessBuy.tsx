import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import "../index.scss";
const SuccessBuy = () => {
  return (
    <div className="success">
      <h1>Спасибо за покупку! 😃</h1>
      <Link to="/">
        <Button className="primary">Вернуться</Button>
      </Link>
    </div>
  );
};

export default SuccessBuy;
