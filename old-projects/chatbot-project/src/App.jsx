import { useEffect, useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput.jsx';
import { ChatMessages } from './components/ChatMessages.jsx';
import { Chatbot } from 'supersimpledev';

function App() {
  //const array = React.useState([

        const localMessages = JSON.parse(localStorage.getItem('messages')) || [];
        const [chatMessages, setChatMessages] = useState(localMessages);

        //const [chatMessages, setChatMessages] = array; // current chat messages and function to update them
        //const chatMessages = array[0]; // current chat messages
        //const setChatMessages = array[1]; // function to update chat messages

        useEffect(() => {
          Chatbot.addResponses({
            'goodbye': 'Goodbye. Have a great day!',
            'give me a unique id': function() {
              return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
            }
          });
        }, []); 

        useEffect(() => {
          localStorage.setItem('messages', JSON.stringify(chatMessages));
        }, [chatMessages]);

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.


        return (
          <div className="app-container"> 
            { chatMessages.length === 0 &&
            <p className="welcome-message">Welcome to the chatbot app! send a message below.</p> }         
            <ChatMessages chatMessages={chatMessages} />   
            <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
          </div>
        );
}

export default App
