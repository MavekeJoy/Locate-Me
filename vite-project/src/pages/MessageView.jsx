import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';

const MessageView = ({ messagesData = {}, onSendMessage = () => {} }) => {
  const { id } = useParams();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(messagesData[id] || []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      sender: 'me',
      text: input.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    onSendMessage(id, newMessage);
    setInput('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b bg-yellow-100">
        <FaArrowLeft className="text-xl cursor-pointer" />
        <img src="/avatar.jpg" alt="User" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-bold text-lg">Chat with {id}</h3>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-2 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] px-4 py-2 rounded-lg ${
              msg.sender === 'me'
                ? 'bg-yellow-300 self-end text-right ml-auto'
                : 'bg-gray-200 text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="p-4 border-t flex items-center gap-2 bg-white"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition flex items-center gap-2"
        >
          <FaPaperPlane />
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageView;