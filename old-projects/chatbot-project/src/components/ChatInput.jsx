import dayjs from 'dayjs';
import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import LoadingImage from '../assets/loading-spinner.gif';
import '../styles/ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event)
  {
    setInputText(event.target.value);
  }

    async function sendMessage() 
    {

      if (isLoading || inputText === '') {
      return;
    }
    setIsLoading(true);

    setInputText('');

    const newChatMessages = [
        ...chatMessages, // creates a copy of existing messages
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];

    setChatMessages([
      ...newChatMessages,
      // This creates a temporary Loading... message.
      // Because we don't save this message in newChatMessages,
      // it will be remove later, when we add the response.
      {
        message: <img src={LoadingImage} className="loading-spinner"/>,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

      

      //Get bot response
      //const response = Chatbot.getResponse(inputText);
      const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
        ...newChatMessages, // creates a copy of existing messages
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    setIsLoading(false);    
  }

  

  function clear()
  {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        name="chatInputText" 
        placeholder="Send a message to chatbot" 
        size="30"
        onChange={saveInputText}
        className="chat-input"
        value={inputText}>
      </input>
      <button onClick={sendMessage} className="send-button">Send</button>
      
      <button onClick={clear} className="send-button">Clear</button>
    </div>
  );
}
