import React ,{useState} from 'react'
import './Chat.scss'
const Chat = () => {
    const[chat,setChat]=useState(true)
    function handleClick() {
    setChat(null)
  }

  return (
    <div className='chat'>
     <div className='messages'>
     <h1>Messages</h1>
     <div className='message'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Marium</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     <div className='message'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Marium</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     <div className='message'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Marium</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     <div className='message'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Marium</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     <div className='message'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Marium</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     <div className='message'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Marium</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     <div className='message'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <span>Marium</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     </div>
     </div>
    { chat && <div className='chatbox'>
      <div className='top'>
        <div className='user'>
            <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            Marium
        </div>
        <div className='close' onClick={handleClick}>X</div>
      </div>
      <div className='center'>
        <div className='chatMessage'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <span>1 hour ago</span>
        </div>
        <div className='chatMessage own'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <span>1 hour ago</span>
        </div>
        <div className='chatMessage '>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <span>1 hour ago</span>
        </div>
        <div className='chatMessage own'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <span>1 hour ago</span>
        </div>
        <div className='chatMessage'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <span>1 hour ago</span>
        </div>
        <div className='chatMessage own'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <span>1 hour ago</span>
        </div>
      </div>
      <div className='bottom'>
        <textarea></textarea>
        <button>Send</button>
      </div>
     </div>}
    </div>
  )
}

export default Chat
