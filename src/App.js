import React, { useEffect } from "react"
import './App.css';
import Amplify,{API} from 'aws-amplify'
import config from './aws-exports'
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";

Amplify.configure(config)

function App() {
  useEffect(() =>{
      API.get('team','/profile/')

  }, [])
  return (
    <div className="App">
      <header className="App-header">
          <header className="App-header"> Hello <AmplifySignOut/></header>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
