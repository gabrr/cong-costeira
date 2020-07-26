import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './redux'
import Home from './components/pages/home';
import WhoAreU from './components/organisms/whoAreU';
import { setUser } from './redux/actions/user';

function App() {
  const isThereUser = () => {
    const userGot = window.localStorage.getItem('myName') || false;
    console.log(userGot, 'userGot')
    return userGot ? store.dispatch(setUser(userGot)) : false
  } 

  useEffect(() => {
      isThereUser()
  }, [])

  return (
    <Provider store={store}>
      <Home/>
      {!isThereUser() && <WhoAreU/>}
    </Provider>
  );
}

export default App;

