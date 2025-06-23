// ChatDialog.jsx
export default function ChatDialog({ onClose }) {
  return (
    <div className="chat__dialog">
      <div className="chat__header">
       <div className="chat__header-left"><img src="img/chat/chat_user.png"/>
        <p><span>Chatting with</span> Support</p>
        </div> 
        <button className="closeBtn" onClick={onClose}>
            <img src="/img/chat/chat_close.png" alt="Close Chat" />
        </button>
      </div>
      <div className="chat__body">
        <div className="message other"> <img src="img/chat/chat_user.png"/> Hello, how can I help you?</div>
        <div className="message user"> <img src="img/chat/chat_user.png"/> I have a question about your services</div>
      </div>
      <div className="chat__input">
        <input type="text" placeholder="Write a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}
