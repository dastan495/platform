import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <section>
      <div className="main-title">
        <h1>образовательный портал кну</h1>
      </div>

      <div className="main-box">
        <img src="" alt="" />
        <Link to="/registr">портал</Link>
      </div>
      <div className="main-box">
        <img src="" alt="" />
        <h2>поиско студентов</h2>
      </div>
      <div className="main-box">
        <img src="" alt="" />
        <Link to="/table">рассписание занятий</Link>
      </div>
      <div className="main-box">
        <img src="" alt="" />
        <h2>тестированик</h2>
      </div>
      <div className="main-box">
        <img src="" alt="" />
        <h2>анкеитирование</h2>
      </div>
      <div className="main-box">
        <img src="" alt="" />
        <h2>программы авн</h2>
      </div>
    </section>
  );
};

export default Main;
