import Message from '../Message';

function Messages({ messages, user }) {
  return (
    <ul>
      {messages.map(message => (
        <Message key={message.id} message={message} user={user} />
      ))}
    </ul>
  );
}

export default Messages;
