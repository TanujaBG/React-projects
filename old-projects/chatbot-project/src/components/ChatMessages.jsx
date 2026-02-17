import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage.jsx';
import '../styles/ChatMessages.css';

export function ChatMessages(props)
{
  const {chatMessages} = props;  
  const chatMessagesRef = useAutoScroll(chatMessages);
  
  return(
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((msg) => {
        return <ChatMessage message={msg.message} sender={msg.sender} key={msg.id} time={msg.time} />;
      })}
    </div>
  )

}

function useAutoScroll(dependencies)
{
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [dependencies]);

  return ref;
}