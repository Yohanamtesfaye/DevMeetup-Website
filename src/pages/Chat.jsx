import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPaperPlane, FaUser } from 'react-icons/fa';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Abebe',
      message: 'Hey everyone! Excited for DevMeetup V3! 🎉',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      user: 'Sara',
      message: 'Me too! The speaker lineup looks amazing this year.',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      user: 'Dawit',
      message: 'Anyone interested in discussing the latest AI developments?',
      timestamp: '10:35 AM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      user: 'You',
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-4">
        <div className="container mx-auto flex items-center">
          <Link to="/v3" className="text-white hover:text-white/80">
            <FaArrowLeft className="text-xl" />
          </Link>
          <h1 className="text-xl font-semibold ml-4">Community Chat</h1>
        </div>
      </div>

      {/* Chat Container */}
      <div className="container mx-auto max-w-4xl px-4 py-6">
        <div className="bg-white rounded-lg  ">
          {/* Messages */}
          <div className="h-[600px] overflow-y-auto p-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start mb-4 ${
                  msg.user === 'You' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 ${msg.user === 'You' ? 'ml-3' : 'mr-3'}`}>
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <FaUser className="text-indigo-600" />
                  </div>
                </div>
                <div
                  className={`flex flex-col ${
                    msg.user === 'You' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-gray-900">{msg.user}</span>
                    <span className="text-sm text-gray-500 ml-2">{msg.timestamp}</span>
                  </div>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-md ${
                      msg.user === 'You'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
