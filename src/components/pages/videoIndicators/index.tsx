import React, { useState, useEffect, memo } from 'react';
import styled from "styled-components";
import Card from '../../organisms/card';
import { AddButton } from '../../atoms/addButton';
import { AddCard } from '../../organisms/addCard';
import { api } from '../../../api';
import { AppointmentsType } from '../../../types/appoitments'
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from '../../../redux'
import { State } from '../../../redux/reducers/_types';
import data2 from '../../../data';
import Card2 from '../../organisms/card2';
import { Loader } from '../../atoms/loader';


const VideoIndicators = () => {
  const [showCard, setshowCard] = useState(false)
  const [loading, setloading] = useState(true)
  const [clicked, setclicked] = useState(false)

  const appointments = useSelector((state: State) => state.appointments)
  const user = useSelector((state: any) => state.user)

  const dispatch = useDispatch()

  const handleShowCard = () => {
    setshowCard(!showCard);
    setclicked(!clicked)
  }

  console.log('loaded home')

  useEffect(() => {
    setloading(false)
  }, [])

  const isItTheCurrentUser = (obj: any) => {
    console.log(user, 'user')
    
    if( new RegExp(`${user}`, 'gi').test(obj.Indicador) || new RegExp(`${user}`,  'gi').test(obj.Video)) {
      return 'selected'
    }
    return ''
  }

  return (
    <Provider store={store}>
      <Div className="App">
        <main>
          {loading ? <Loader/> : (
              <div className="cards">
                {data2.map((appointment: any, index) => (
                    <Card2 
                        selected={isItTheCurrentUser(appointment)}
                        key={index} 
                        {...appointment} 
                    />
                ))}
              </div>
          )}
        </main>
        <AddCard {...{showCard, handleShowCard, setclicked, clicked}} />
        <AddButton {...{handleShowCard, clicked}} />
      </Div>
    </Provider>
  );
}

export default memo(VideoIndicators)

const Div = styled.div`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  padding-bottom: 100px;

  .cards {
    display: grid;
    margin-top: 65px;
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
    background-color: rgb(1 11 31 / 50%) !important;
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
