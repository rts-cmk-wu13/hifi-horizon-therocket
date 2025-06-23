import { useState } from "react";
import ChatDialog from "./ChatDialog";

export default function Chat() {
    console.log("Chat component loaded");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="chat__bubble" onClick={() => setIsOpen(!isOpen)}>
        <img src="/img/chat/chat_bubble.svg" alt="Chat Bubble"/>
      </button>
      {isOpen && <ChatDialog onClose={() => setIsOpen(false)} />}
    </>
  );
}
