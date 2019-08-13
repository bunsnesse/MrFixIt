// import React, {Component} from 'react';

import React from 'react';

import { render } from "react-dom";
import { Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'
 
// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
  // you can also just use 'scale'
  
}
 
const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)
 

// class Root extends Component {
//   render () {
//     return (
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App/>
//       </AlertProvider>
//     )
//   }
// }





render(<Root />, document.getElementById("root"));