import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Image from './dot.png'
import MapContainer from './mapContainer.js'

const style = {
    height: '100px'
}

const steps = [
  {
    id: '1',
    message: 'Hello World',
    trigger: '2',
  },
  {
    id: '2',
    component:(
        <MapContainer style={style}/>
    ),
    end: true,
  }
];

class App extends Component {
  render() {
    return (
         <center>
          <ChatBot
            headerTitle="App"
            botAvatar= {Image}
             steps={steps}
           />
           </center>
   );
 }

}

export default App
