import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../style.css";

const ChatLists = ({ chats }) => {
  const endOfMessages = useRef();
  const user = localStorage.getItem("user");

  function SenderChat({ message, username, avatar }) {
    return (
      <div className="chat_sender">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong> <br />
          {message}
        </p>
      </div>
    );
  }

  SenderChat.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };

  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className="chat_receiver">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong> <br />
          {message}
        </p>
      </div>
    );
  }

  ReceiverChat.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    if (endOfMessages.current) {
      endOfMessages.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="chats_list">
      {chats.map((chat, index) =>
        chat.username === user ? (
          <SenderChat
            key={index}
            message={chat.message}
            username={chat.username}
            avatar={chat.avatar}
          />
        ) : (
          <ReceiverChat
            key={index}
            message={chat.message}
            username={chat.username}
            avatar={chat.avatar}
          />
        )
      )}
      <div ref={endOfMessages}></div>
    </div>
  );
};

ChatLists.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatLists;
