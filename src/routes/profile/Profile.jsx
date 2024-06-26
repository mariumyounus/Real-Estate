import React from 'react'
import './Profile.scss'
import List from '../../components/list/List'
import Chat from '../../components/Chat/Chat'
const Profile = () => {
  return (
    <div className='profilepage'>
    <div className='details'>
    
        <div className='wrapper'>
            <div className='title'>
                <h1>User Information</h1>
                <button>Update Profile</button>
            </div>
            <div className='info'>
              <span>Avatar:<img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></span>
              <span>USername:<b>Marium</b></span>
              <span>Email:<b>Marium@gmail.com</b></span>
            </div>
            <div className='title'>
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
            <List />
            <div className='title'>
                <h1>Saved List </h1>
                
            </div>
            <List/>
        </div>
        </div>
        <div className='chatcontainer'>
          <div className='wrapper'>
            <Chat/>
          </div>
        </div>
     
    </div>
    
  )
}

export default Profile
