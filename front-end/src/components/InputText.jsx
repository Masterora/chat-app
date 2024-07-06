import { useState } from "react";
import PropTypes from "prop-types";
import "../style.css";

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      addMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="inputtext_container">
      <textarea
        name="message"
        id="message"
        rows="6"
        placeholder="Input Message ..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

InputText.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default InputText;
