import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    const newTodo = [...todo];
    newTodo.push(messageInput);
    setTodo(newTodo);
  };

  const deleteTodo = (todoIndex) => {
    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);
    setTodo(newTodo);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => {
              return setMessageInput(e.target.value);
            }}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button" onClick={addTodo}>
          Submit
        </button>
      </div>
      <div class="board">
        {todo.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => deleteTodo(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
