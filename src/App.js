import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Image from './dot.png'
import MapContainer from './mapContainer.js'

const divStyle = {
  height: '250px',
  width: '100%',
  position: 'relative'
}

const borderStyle={
  height: '700px'
}


const steps = [
  {
    id: '0',
    message: "Greetings :)! I am Hope, a chatbot for Women's Shelter Services. How can I assist you?",
    trigger: '1',
  },
  {
    id: '1',
    options: [
      { value: '1', label: 'Crisis Counselling?', trigger: 'info' },
      { value: '2', label: 'Legal Services?', trigger: 'legalinfo' },
      { value: '4', label:  'Help Me Find a Place!', trigger: 'location' },
      { value: '6', label:  "I'm ok now!", trigger: 'finish' }
      // { value: '6', label:  'Medical Services?', trigger: 'info' }
    ]
  },
  {
    id: 'location',
    message: 'Alright, can you tell us the nearest city?',
    trigger:'user_location'
  },
  {
    id: 'user_location',
    user: true,
    trigger:'map1'

  },
  {
    id: 'map1',
    message: 'Here are all of the nearby shelters within 10000m of {previousValue}',
    trigger:'map'
  },
  {
    id: 'map',
    component:(
      <div style={divStyle} >
        <MapContainer/>
      </div>
    ),
    end: true,
  },
  {
    id:'info',
    message:'Please call 311 to get assistance and/or check this website for more info ',
    trigger: 'help-link'

  },
  {
    id:'help-link',
    component:(<a href="https://www.toronto.ca/311/knowledgebase/kb/docs/articles/311-toronto/information-and-business-development/crisis-lines-suicide-depression-telephone-support-lines-non-crisis-mental-health-services.html">
  Click Me!</a>),
  trigger:'prompt'

  },
  {
    id:'legalinfo',
    message:'In need of an immediate lawyer please contact our partner at LegalAid',
    trigger:'legallink'
  },
  {
    id:'legallink',
    component:(<a href="https://www.legalaid.on.ca/en/getting/type_domesticviolence.asp">
  Click Me!</a>),
    trigger:'legalinfo2'
  },{
    id:'legalinfo2',
    message:'Additionally, the Assaulted Women’s Helpline is available 24 hours a day, 7 days a week at 1-866-863-0511',
    trigger:'prompt'
  },
  {
    id:'prompt',
    message:'is there anything else we can help you with?',
    trigger: '1',
  },
  {
    id: 'finish',
    message: 'Take care and have a great day!',
    end: true
  }
];

class App extends Component {
  render() {
    return (
         <center>
          <ChatBot
            headerTitle="HopeBot"
            botAvatar= {Image}
             steps={steps}
             style= {borderStyle}
             footerStyle={{position:'absolute', bottom: '0', width: '100%'}}
           />
           </center>
   );
 }

}

export default App
