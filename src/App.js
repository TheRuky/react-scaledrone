import Messages from './components/Messages';
import {useEffect, useState} from 'react';
import {config} from './config';
import {randomColor, randomName} from './services/user.service';
import Form from './components/Form';



function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    if(drone || user.id) {
      return;
    }

    const d = new window.Scaledrone(config.SCALEDRONE_CHANNEL_ID, {
      data: user,
    });

    setDrone(d);
  }, [user, drone]);

  useEffect(() => {
    if(!drone) {
      return;
    }

    drone.on('open', error => {
      if(error) {
        return console.error(error);
      }

      const member = { ...user };
      member.id = drone.clientId;

      setUser(member);
    });

    const room = drone.subscribe(config.SCALEDRONE_ROOM_NAME);

    room.on('message', message => {
      setMessages(messages => [...messages, message]);
    });
  }, [drone, user]);

  function sendMessage(e) {
    e.preventDefault();

    if(!message || !drone) {
      return;
    }

    drone.publish({
      room: config.SCALEDRONE_ROOM_NAME,
      message,
    });

    setMessage('');
  }

  return (
    <div className={'bg-gray-100'}>
      <div className={'max-w-3xl mx-auto bg-white shadow-lg rounded-lg'}>
        <div className={'h-screen relative flex flex-col'}>
          <div className={'flex flex-col w-full flex-1 overflow-y-auto'}>
            <div className={'w-full mt-auto p-4'}>
              <p className={'text-xs text-gray-300 text-center'}>Your message history starts here.</p>
              <Messages messages={messages} user={user}/>
            </div>
          </div>
          <Form message={message} disabled={!user.id} onChange={(e) => setMessage(e.target.value)} onSend={(e) => sendMessage(e)} />
        </div>
      </div>
    </div>
  );
}

export default App;
