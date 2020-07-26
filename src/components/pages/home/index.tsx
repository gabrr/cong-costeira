import React, { useState, useEffect, memo } from 'react';
import styled from "styled-components";
import Card from '../../organisms/card';
import { AddButton } from '../../atoms/addButton';
import { AddCard } from '../../organisms/addCard';
import { api } from '../../../api';
import { AppointmentsType } from '../../../types/appoitments'
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from '../../../redux'
import { State } from '../../../redux/reducers/types';
import { addAppointment } from '../../../redux/actions/appointments';

const Home = () => {
  const [showCard, setshowCard] = useState(false)
  const [loading, setloading] = useState(true)

  const appointments = useSelector((state: State) => state.appointments)
  const dispatch = useDispatch()

  const handleShowCard = () => {
    setshowCard(!showCard);
  }

  console.log('home loaded')

  useEffect(() => {
    api.get('appointments/')
    .then(({ data }) => {
      dispatch(addAppointment([...data]))
      setloading(false)
    })
  }, [dispatch])

  return (
    <Provider store={store}>
      <Div className="App">
        <header>
          Designaçōes<br/> Ministério de Campo
        </header>
        <main>
          {
            loading ? <h1>Loading...</h1> : (
              <div className="cards">
                {appointments.map((appt: AppointmentsType) => (
                  <Card key={appt._id} {...appt}/>            
                ))}
              </div>
            )
          }
        </main>
        <AddCard {...{showCard, handleShowCard}} />
        <AddButton {...{handleShowCard}} />
      </Div>
    </Provider>
  );
}

export default memo(Home)

const Div = styled.div`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  padding-bottom: 100px;

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
    max-width: 320px;
    display: grid;
    grid-template-columns: 1fr;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 30px auto;
    padding: 15px 25px;
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

  @media (min-width: 760px) {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1020px) {
    .cards {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
` 
