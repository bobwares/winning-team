// import React, { useEffect, useState } from "react"
//
// import Amplify,{API} from 'aws-amplify'
// import config from './aws-exports'
// import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
//
// Amplify.configure(config)
//
// function AppOld() {
//
//   const [greeting, setGreeting] = useState('loading')
//
//   useEffect(() =>{
//       fetchGreeting()
//   }, [])
//
//   async function fetchGreeting() {
//       const greetingData = await API.get('team', '/profile')
//       console.log({greetingData})
//       setGreeting(greetingData.message)
//   }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//           <header className="App-header"> Hello </header>
//       </header>
//       <h2> {greeting}</h2>
//       <AmplifySignOut/>
//     </div>
//   );
// }
//
// export default withAuthenticator(AppOld);
