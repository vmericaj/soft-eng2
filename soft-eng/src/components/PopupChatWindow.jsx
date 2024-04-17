import { useState, useEffect } from 'react';
import logoIcon from '../assets/se.png';
import closeButton from '../assets/closeButton.png';
import chatBotIcon from '../assets/Chatbot.png';
import botProfile from '../assets/botProfile.png';

console.log(chatBotIcon);

function formatTime(date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

function PopupChatWindow() {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [initialMessages, setInitialMessages] = useState([]);
    const [askMore, setAskMore] = useState(false);
    
    const promptForMoreQuestions = () => {

    const currentTime = formatTime(new Date());
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: "Do you have any more questions?", time: currentTime }
      ]);
      setAskMore(true);
    };  
  
    const toggleForm = () => {
        setShowChat(!showChat);
    };

      const handleContactAgent = () => {
              // Redirects to the Facebook Messenger chat
              window.open("https://m.me/threemvconstruction", "_blank");
          };  

        const handleButtonClick = (messageType) => {

          if (messageType === "Yes") {
            // Reset to the initial set of questions
            setMessages([...initialMessages]);
            setAskMore(false);
            return; // Exit early since we don't need to process further
          } else if (messageType === "No") {
            // Add a concluding message and end the conversation
            setIsTyping(false);
            setMessages(prevMessages => [
              ...prevMessages,
              { sender: 'bot', text: "Thank you for chatting with us. Have a great day!" }
            ]);
            setAskMore(false);
          
          } else {
          let newMessage = "";
          // Define the question text based on the messageType
          let questionText = "";
          switch (messageType) {
            case "one":
              questionText = "How much do your services cost?";
              newMessage = "Please contact us for a detailed quote.";
              break;
            case "two":
              questionText = "Where is your store located?";
              newMessage = "We are located at 161 Flamenco ST. Panghulo, Obando. Visit us anytime during our working hours.";
              break;
            case "three":
              questionText = "What services are available?";
              newMessage = "We offer a range of services including construction, renovation, and design consulting.";
              break;
            case "four":
              questionText = "Where else can I contact you?";
              newMessage = "You can reach us at: Email: threemvconstruction@gmail.com Phone: +63 917 103 3281";
              break;
              
            default:
          }// Handle other cases or set a default message
           
        const currentTime = formatTime(new Date());
        
          // Send the question to the chat
          if (questionText) {
            setMessages(prevMessages => [
              ...prevMessages,
              { sender: 'user', text: questionText, time: currentTime },
            ]);
          }

        // Begin typing simulation.
    setIsTyping(true);
    setTimeout(() => {
      // After the timeout, stop typing simulation and show the bot's response.
      setIsTyping(false);
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: newMessage, time: currentTime }
      ]);

      // Now, set up another timeout to ask if there are more questions.
      setTimeout(promptForMoreQuestions, 1000); // Delay the "Do you have any more questions?" prompt
        }, 2000); // Delay the bot's response to simulate typing
      }};

        useEffect(() => {
          if (showChat) {
            const initialMsgs = [
              { sender: 'bot', text: "Hello! Welcome to 3MV Construction! How can we help you?" },
              // ... Add any other initial messages here
            ];
            setInitialMessages(initialMsgs);
      
            setTimeout(() => {
              setMessages(initialMsgs);
            }, 1000);
          }
        }, [showChat]);

    return (
      <div style={{ pointerEvents: 'none', position: 'fixed', bottom: 16, right: 2, zIndex: 20 }}>
      <img src={chatBotIcon} alt="Chatbot Icon" className="w-13 h-11 cursor-pointer hover:scale-110 active:scale-75 transition-transform" onClick={toggleForm} style={{ pointerEvents: 'auto' }} />
      <div className={`chat-popup transform transition-all duration-300 ease-in-out ${showChat ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} bg-white shadow-xl rounded-md overflow-hidden fixed bottom-4 right-4`}
           style={{ width: '390px', height: '535px', pointerEvents: showChat ? 'auto' : 'none' }}>
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
                            {
                            askMore && 
                            messages.length > 0 &&
                             messages[messages.length - 1].text === "Do you have any more questions?" && ( 
                              <div className="options flex justify-around mt-2">
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