import React from 'react';

import './App.css';
import Chat from './Chat';
import UserList from './UserList';
import Login from './Login';
import chatkitLogo from './chatkit-logo.svg';

const instanceLocator = 'v1:us1:9c41db8c-23c3-4710-926f-80b30808e5c6';
const tokenProvider = new TokenProvider({
  url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9c41db8c-23c3-4710-926f-80b30808e5c6/token',
});

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const otherUserId = urlParams.get('otherUserId');

  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
            <UserList userId={userId} />
            <Chat />
          </div>
        </>
      ) : (
        <Login />
      )}
      <div className="App__backdrop">
        <img
          className="App__backdrop__logo"
          src={chatkitLogo}
          alt="Chatkit logo"
        />
      </div>
    </div>
  );
}

export default App;
