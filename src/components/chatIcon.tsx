// in src/components/chatIcon.tsx
import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';


const ChatIconComponent = () => {
    // Add your chat functionality here
    const handleChatClick = () => {
      // Handle chat click action
      alert("The chat is not ready yet😓")
      console.log('Chat icon clicked!');
    };
  
    return (
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000, // Ensure it's above other content
          cursor: 'pointer',
          
        }}
        onClick={handleChatClick}
      >
        <ChatIcon style={{ fontSize: 32, color: 'blue' }} />
      </div>
    
    );
  };


export default ChatIconComponent;