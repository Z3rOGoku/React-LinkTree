import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Components/Card';
import './index.css'
import Profile from './Components/Profile';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <div className="main">
        <Profile />
        <Card title="Instagram" img="./instagram.png" link="https://www.instagram.com/ig_z3ro/"/>
        <Card title="Youtube" img="./Youtube.png" link="https://www.youtube.com/@Z3rOGaming" />
        <Card title="Valorant" img="./Valorant.png"  />
        <Card title="Github" img="./github.png" link="https://github.com/Z3rOGoku" />
        <Card title="Discord" img="./discord_logo.png" link="https://discord.gg/e2dNsT9quX" />
        <Card title="Portfolio" img="./coding.png" link="https://z3rogoku.github.io/MyPortfolio/" />

      </div>

    </>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

