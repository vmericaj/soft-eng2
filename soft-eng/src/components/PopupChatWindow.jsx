import React, { useState, useEffect } from 'react';
import logoIcon from '../assets/se.png';
import closeButton from '../assets/closeButton.png';
import sendButtonImage from '../assets/sendButton.png'; // Ensure this is the correct path
import chatBotIcon from '../assets/Chatbot.png';

function PopupChatWindow() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleForm = () => {
    setShowChat(!showChat);
  };

  const sendMessage = () => {
    console.log("Message sent!");
  };

  const handleButtonClick = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
    if (message.startsWith("This is a message for")) {
      // If a button message is clicked, add follow-up message and buttons
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, "Do you have any more questions?"]);
      }, 1000);
    } else if (message === "Yes") {
      // Handle "Yes" button click
      setMessages(prevMessages => [...prevMessages, "How can we help you?"]);
    } else if (message === "No") {
      // Handle "No" button click
      setMessages(prevMessages => [...prevMessages, "Great! Let me know if you need anything."]);
    }
  };

  useEffect(() => {
    if (showChat) {
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, "Welcome to 3MV Construction!"]);
      }, 1000); // Display "Welcome to 3MV Construction!" message 1 second after opening the chat box
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, "How can we help you?"]);
      }, 2000); // Display "How can we help you?" message 1 second after the first message
    }
  }, [showChat]);

  return (
    <div className={`fixed bottom-16 right-2`}>
      <img src={chatBotIcon} alt="Chatbot Icon" className={`w-12 h-12 fixed bottom-4 right-4 cursor-pointer`} onClick={toggleForm} />
      <div className={`chat-popup transform transition-all duration-300 ease-in-out ${showChat ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} right-2 bg-white shadow-xl rounded-md overflow-hidden z-10`}
           style={{ width: '390px', height: '535px', bottom: 'calc(100px + 4rem * ${showChat ? 1 : 0})'}}>
        <div className="chat-header bg-blue-700 text-white p-4 rounded-t-md flex justify-between items-center" style={{height: '50px'}}>
          <div className="chat-header-content flex items-center">
            <img src={logoIcon} alt="Logo" className="w-12 mr-2" />
            <div>
              <span className="block font-semibold">3MV CONSTRUCTION</span>
              <span className="text-xs pb = ">Chatbot Support</span>
            </div>
          </div>
          <img src={closeButton} alt="Close" className="w-8 h-8 cursor-pointer" onClick={toggleForm} />
        </div>
        <div className="chat-messages p-4 flex-1 overflow-y-auto" style={{ borderTop: '1px solid #ccc' }}>
          {/* Container for messages */}
          <div className="message-container">
            {/* Individual messages */}
            {messages.map((message, index) => (
              <div key={index} className="message-wrapper bg-gray-200 rounded p-2 mb-2">
                <div className="message">{message}</div>
                {/* Buttons */}
                {index === messages.length - 1 && index !== 0 && message === "How can we help you?" && ( // Display buttons only for the last message and not the initial greeting message
                  <div className="flex justify-around mt-2">
                    <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleButtonClick("This is a message for one")}>Button 1</button>
                    <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleButtonClick("This is a message for two")}>Button 2</button>
                    <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleButtonClick("This is a message for three")}>Button 3</button>
                    <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleButtonClick("This is a message for four")}>Button 4</button>
                  </div>
                )}
                {message === "Do you have any more questions?" && ( // Display "Yes" and "No" buttons for the follow-up question
                  <div className="flex justify-around mt-2">
                    <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleButtonClick("Yes")}>Yes</button>
                    <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleButtonClick("No")}>No</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-white" style={{ borderTop: '1px solid #ccc', padding: '5px', borderRadius: '0 0 8px 8px' }}>
          <div className="flex justify-between items-center" style={{ height: '40px' }}>
            <textarea placeholder="Type a message..." name="msg" required className="flex-1 p-2 border-0 rounded-none resize-none outline-none"
                      style={{ height: '30px', borderRadius: '4px', overflowY: 'scroll', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', lineHeight: 'normal', paddingTop: '5px', textAlign: 'left' }}></textarea>
            <img src={sendButtonImage} alt="Send" className="cursor-pointer" onClick={sendMessage} style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupChatWindow;