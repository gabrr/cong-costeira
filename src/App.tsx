import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import store from './redux'
import Home from './components/pages/home';
import WhoAreU from './components/organisms/whoAreU';
import { setUser } from './redux/actions/user';
import VideoIndicators from './components/pages/videoIndicators';
import styled from 'styled-components';

function App() {
  const [page, setpage] = useState(0)

  const isThereUser = () => {
    const userGot = window.localStorage.getItem('myName') || false;
    console.log(userGot, 'userGot')
    return userGot ? store.dispatch(setUser(userGot)) : false
  } 

  useEffect(() => {
      isThereUser()
  }, [])

  const handleTabs = (event: any) => {
    const pageSelector: any = document.querySelector('#pageSelector')?.children
    const id = parseInt(event.target.id)
    for (let element of pageSelector) {
      element.classList.remove('selected')
    }
    setpage(id)
    pageSelector[id].classList.add('selected')
  }

  return (
    <Provider store={store}>
      <Div id="pageSelector">
        <div className="pagesOption selected" id="0" onClick={handleTabs}>Serviço de Campo</div>
        <div className="pagesOption" id="1" onClick={handleTabs}>Indicador e Video</div>
      </Div>
      {page === 0 ? <Home/> : <VideoIndicators/>}
      {!isThereUser() && <WhoAreU/>}
    </Provider>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 38px;
  width: 95vw;
  max-width: 400px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  background-color: #141e37;
  font-size: 80%;
  border-radius: 7px;

  div {
    padding: 12px;
    cursor: pointer;
    align-self: center;
    color: #FFF;
    font-weight: 600;
    width: 50%;
    text-align: center;
  }

  .selected {
    background-color: #46a96c;
    border-radius: 7px;
  }

`

