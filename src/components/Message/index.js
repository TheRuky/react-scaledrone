import {useState} from 'react';

function Message({ message, user }) {
  const [own] = useState(user.id === message.clientId);
  const [hours] = useState(new Date(message.timestamp * 1000).getHours());
  const [minutes] = useState(new Date(message.timestamp * 1000).getMinutes());

  return (
    <li className={`flex w-full mt-3 ${own ? 'justify-end' : ''}`}>
      <div className={`flex flex-col ${own ? 'items-end' : ''}`}>
        <p className={`text-xs leading-6 text-gray-400 ${own ? 'text-right' : ''}`}>{message.member.clientData.username}</p>
        <div>
          <div className={`inline-flex items-center text-sm leading-6 text-white rounded-lg px-2 py-1`} style={{ backgroundColor: message.member.clientData.color }}>
            {message.data}
          </div>
          <p className={`text-xs leading-5 text-gray-400 ${own ? 'text-right' : ''}`}>{`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`}</p>
        </div>
      </div>
    </li>
  );
}

export default Message;
