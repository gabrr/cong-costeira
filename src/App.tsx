import React from 'react';
import cards from './data'
import styled from "styled-components";

function App() {
  return (
    <Div className="App">
      <header>
        Designaçōes Ministério de Campo
      </header>
      <main>
        <div className="cards">
          {cards.map(card => (
            <div className="card">
              <div className="row">
                <p className="title">
                  Dirigente
                </p>
                <p className="name">
                  {card.dirigente}
                </p>
              </div>
              <div className="row">
                <p className="title">
                  Auxiliar
                </p>
                <p className="name">
                  {card.auxiliar}
                </p>
              </div>
              <div className="date-display">
                {card.data}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Div>
  );
}

export default App;

const Div = styled.div`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  height: 100%;

  .cards {
    display: grid;
    margin-top: 30px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  .title {
    margin: 7px 0;
  }

  .name {
    font-weight: 300;
    margin: 7px 0;
  }

  .card {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 30px auto;
    padding: 15px 15px;
    border-radius: 5px;
    position: relative;
  }

  .selected {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }

  header {
    font-size: 20px;
    padding-top: 30px;
  }

  .date-display {
    position: absolute;
    bottom: -20px;
    right: 5%;
    background-color: #fff;
    color: #444;
    padding: 5px 10px;
    border-radius: 5px;
  }
` 
