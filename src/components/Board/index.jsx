import styles from "./Board.module.scss";
import Message from "../Message";

const Board = (props) => {
  const { messages } = props;
  return (
    <main className={styles.board}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </main>
  );
};

export default Board;
