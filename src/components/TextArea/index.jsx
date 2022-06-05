import { useState } from 'react';
import styles from './TextArea.module.scss';

const TextArea = (props) => {
  const {drone, roomName} = props;
  const [text, setText] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && text) {
      drone.publish({
        room: roomName,
        message: text
      })

      setText('');
    }

  }

  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  return <div className={styles.textarea}>
    <input
      type="text"
      value={text}
      className={styles.input}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
     />
  </div>;
};

export default TextArea;
