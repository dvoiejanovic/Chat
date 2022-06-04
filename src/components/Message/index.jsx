import styles from "./Message.module.scss";

const Message = (props) => {
  const { time, text } = props.message;
  return (
    <div className={styles.message}>
      <div className={styles.time}>{time}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Message;
