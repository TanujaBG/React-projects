import RobotImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import '../styles/ChatMessage.css';
import dayjs from 'dayjs';

export function ChatMessage(props)
{
  const {message, sender, time} = props;
  console.log(UserProfileImage);

  return (
      <div className={sender === "robot" ? "robot-message" : "user-message"} >
        {sender === "robot" && 
          (<img src={RobotImage} className="chat-message-profile"/>)}
        <div className="message-text">
          {message}
          
          {time && (
            <div className='chat-message-time'>
              {dayjs(time).format('h:mma')}
            </div>
          )}

        </div>
        {sender === "user" && (
          <img src={UserProfileImage} className="chat-message-profile"/>)}
      </div>
    );     
}