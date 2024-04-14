import { useState, useEffect } from 'react';
import logoIcon from '../assets/se.png';
import closeButton from '../assets/closeButton.png';
import sendButtonImage from '../assets/sendButton.png';
import chatBotIcon from '../assets/Chatbot.png';
import botProfile from '../assets/botProfile.png';

console.log(chatBotIcon);

function formatTime(date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

function PopupChatWindow() {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [askedQuestions, setAskedQuestions] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
  
    const toggleForm = () => {
        setShowChat(!showChat);
    };

    const sendMessage = () => {
        const textarea = document.querySelector('textarea[name="msg"]');
        const newMessage = textarea.value;
        const currentTime = formatTime(new Date());
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: newMessage, time: currentTime }]);
        textarea.value = ''; // Clear the textarea
        simulateTyping();
    };

     const handleKeyDown = (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault(); // Prevent default Enter key behavior (new line)
                sendMessage(event.target.value); // Send the message
            }
        };

    const simulateTyping = () => {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                // Replace the following line with actual bot response
                setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: " " }]);
            }, 3000); // Simulate typing for 1 second
        };

      const handleContactAgent = () => {
              // Redirects to the Facebook Messenger chat
              window.open("https://m.me/threemvconstruction", "_blank");
          };  

        const handleButtonClick = (messageType) => {
            if (messageType === "Yes") {
                // If yes, show the initial set of questions again
                setMessages(prevMessages => [
                  ...prevMessages,
                  { sender: 'bot', text: "How can we help you?" },
                  // Add the initial set of question messages here...
                  // For example, you could re-use the welcome message:
                  { sender: 'bot', text: "What would you like to know more about?" }
                ]);
              } else if (messageType === "No") {
                // If no, acknowledge the message and end the conversation
                setMessages(prevMessages => [
                  ...prevMessages,
                  { sender: 'bot', text: "Great! Let me know if you need anything else." }
                ]);
              } else {

            let newMessage = "";
            switch (messageType) {
              case "one":
                newMessage = "Our services start at $1000. Please contact us for a detailed quote.";
                break;
              case "two":
                newMessage = "We are located at 163 Flamenco ST. Panghulo, Obando. Visit us anytime during our working hours.";
                break;
              case "three":
                newMessage = "We offer a range of services including construction, renovation, and design consulting.";
                break;
              case "four":
                newMessage =  "You can reach us at: Email: threemvconstruction@gmail.com Phone: +63 917 103 3281";
                break;
              default:
                // Handle other cases or set a default message
            }

        const responses = {
            "hello": "Hi there! How can I assist you today?",
            "price": "Our services start at $1000. Please contact us for more details.",
            "location": "We are located at 163 Flamenco ST. Panghulo, Obando. Feel free to visit us!",
            "services": "We offer construction, renovation, and design consulting services.",
            "thank you": "You're welcome! Do you have any other questions?"
        };

        const getResponse = (message) => {
          const words = message.toLowerCase().split(/\s+/); // Split on any whitespace
          for (let word of words) {
              if (Object.prototype.hasOwnProperty.call(responses, word)) {
                  return responses[word];
              }
          }
          return "Sorry, I didn't understand that. Can you rephrase?";
      };  

      const handleNewUserMessage = (newMessage) => {
        if (!newMessage.trim() === '') return; // Don't send empty messages
    
        const botResponse = getResponse(newMessage); // Get the bot's response
    
        const currentTime = formatTime(new Date());
        setMessages(prevMessages => [
            ...prevMessages,
            { sender: 'user', text: newMessage, time: currentTime },
            { sender: 'bot', text: botResponse, time: currentTime }
        ]);
    };
    

        if (newMessage) {
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: newMessage }]);
            setAskedQuestions(prevQuestions => [...prevQuestions, messageType]);
            // Continue the conversation by asking if they have more questions
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "Do you have any more questions?" }]);
          }
        }
        };

    useEffect(() => {
        if (showChat) {
            setTimeout(() => {
                setMessages([{ sender: 'bot', text: "Hello! Welcome to 3MV Construction! How can we help you?" }]);
            }, 1000);
        }
    }, [showChat]);

    return (
        <div className={`fixed bottom-16 right-2`}>
      <img src={chatBotIcon} alt="Chatbot Icon" className={`w-13 h-11 fixed bottom-4 right-4 cursor-pointer hover:scale-110 active:scale-75 transition-transform`} onClick={toggleForm} />
      <div className={`chat-popup transform transition-all duration-300 ease-in-out ${showChat ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} right-2 bg-white shadow-xl rounded-md overflow-hidden z-10`}
           style={{ width: '390px', height: '535px', bottom: 'calc(100px + 4rem * ${showChat ? 1 : 0})'}}>
          <div className="chat-header bg-blue-900 text-white p-3 rounded-t-md flex justify-between items-center">
              <div className="chat-header-content flex items-center">
                  <img src={logoIcon} alt="Logo" className="w-12 mr-2" />
                  <div>
                      <span className="block font-semibold">3MV CONSTRUCTION</span>
                  </div>
              </div>
              <img src={closeButton} alt="Close" className="w-8 h-8 cursor-pointer hover:scale-110" onClick={toggleForm} />
          </div>

          <div className="chat-messages p-4 flex-1 overflow-y-auto" style={{ borderTop: '1px solid #ccc', maxHeight: '400px' }}>
              <div className="message-container">
                  {messages.map((message, index) => (
                      <div key={index} className={`message-wrapper flex items-end ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.sender === 'bot' && (
                              <img src={botProfile} 
                              alt="Bot" 
                              className="w-7 h-8 rounded-full mr-2 mb-4" />
                            )}
                           <div className={`message p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black mb-4 text-sm mt-4'} max-w-xs`}>
                            {message.text}
                            </div>
                            <div className="message-time text-xs text-gray-500 absolute top-0 right-0 mt-20 mr-40">
                            {message.time}
                            </div>
                        </div>
                        
                        ))}
                          {isTyping && (
                            <div className="message-wrapper w-10 bg-gray-200 text-left font-bold text-black rounded px-2 py-1 text-center">
                                <div className="message">...</div>
                                </div>
                            )}    
                            </div>
                            {messages.length > 0 && messages[messages.length - 1].text === "Hello! Welcome to 3MV Construction! How can we help you?" && (
                                <div className="flex flex-wrap justify-around text-sm ml-20">
                                <button
                                    className="button bg-blue-800 hover:bg-blue-900 text-white py-1 shadow-xl px-2 rounded mb-4 mt-20"
                                    onClick={() => handleButtonClick("one")}
                                >
                                    How much does your services cost?
                                </button>
                                
                                <button
                                    className="button bg-blue-800 hover:bg-blue-900 text-white py-1 shadow-xl px-2 rounded mb-4 ml-10"
                                    onClick={() => handleButtonClick("two")}
                                >
                                    Where is your store located?
                                </button>

                                <button
                                    className="button bg-blue-800 hover:bg-blue-900 text-white py-1 shadow-xl px-2 rounded mb-4 ml-10"
                                    onClick={() => handleButtonClick("three")}
                                >
                                    What services are available?
                                </button>

                                <button
                                    className="button bg-blue-800 hover:bg-blue-900 text-white py-1 shadow-xl px-2 rounded mb-4 ml-8"
                                    onClick={() => handleButtonClick("four")}
                                >
                                    Where else can I contact you?
                                </button>

                               <button 
                               className="button bg-blue-800 hover:bg-blue-900 text-white py-1 shadow-xl px-2 rounded mb-4 ml-24" 
                               onClick={handleContactAgent}>
                                  Contact a live agent
                                </button> 

                              </div>
                            )}
                              {messages.length > 0 && messages[messages.length - 1].text === "Do you have any more questions?" && (
                  <div className="flex justify-around mt-2">
                    <button className="button bg-blue-800 hover:bg-blue-900 text-white w-16 text-sm py-1 px-2 rounded" onClick={() => handleButtonClick("Yes")}>Yes</button>
                    <button className="button bg-blue-800 hover:bg-blue-900 text-white w-16 text-sm py-1 px-2 rounded" onClick={() => handleButtonClick("No")}>No</button>

                  </div>
                 )}
          </div>
          <div className="absolute bottom-0 w-full bg-white" style={{ borderRadius: '0 0 8px 8px' }}>
              <div className="flex justify-between items-center" style={{ height: '60px', borderRadius: '4px', overflowY: 'scroll', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', lineHeight: '50px', paddingTop: '20px', textAlign: 'left', color: 'black' }}>
                    </div>
                </div>
            </div>
         </div>
    );
}

export default PopupChatWindow;
