import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Image from './dot.png'
import MapContainer from './mapContainer.js'

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


const divStyle = {
  height: '250px',
  width: '100%'
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
      <div style={divStyle} >
        <MapContainer/>
      </div>
    ),
    end: true,
  }
];

class App extends Component {

  render() {
    return (
         < ThemeProvider theme = {theme}>
         <center>
          <ChatBot
            headerTitle="App"
            botAvatar= {Image}
             steps={steps}
           />

           </center>

        </ThemeProvider>
   );
 }

}

export default App
