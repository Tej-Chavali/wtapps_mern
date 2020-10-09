import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages,setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, [])
  //once----When u want to attach any kind of listener we dont want to attach several times.
  useEffect(() => {
    const pusher = new Pusher('c789bc9f2dd548f57f9d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages])

console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages = {messages}/>
      </div>
     </div>
  );
}

export default App;

// stQmNHkqlXhwZiQG  ---MongoDBpswd