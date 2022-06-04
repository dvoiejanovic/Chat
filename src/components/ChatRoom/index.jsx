import { useEffect, useState } from "react";

import styles from "./Chatroom.module.scss";
import TextArea from "../TextArea";
import Sidebar from "../Sidebar";
import Board from "../Board";
import { formatToHoursAndMinutes } from "../../utils/time";

const ChatRoom = (props) => {
  const {roomName, userName, avatarId} = props;
  const observableRoomName = `observable-${roomName}`
  const drone = new Scaledrone(import.meta.env.VITE_CHANNEL_ID, {
    data: {
      name: userName,
      avatarId
    }
  });
  const room = drone.subscribe(observableRoomName);

  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    room.on('open', error => {
      if (error) {
        console.log(error);
      }
    });

    room.on('message', message => {
      setMessages([...messages, {
        text: message.data,
        id: message.id,
        time: formatToHoursAndMinutes(message.timestamp)
      }]);
    });

    room.on('member_join', (member) => {
      setMembers([...members, {
        name: member.clientData.name,
        avatarId: member.clientData.avatarId
      }])
    })

    room.on('member_leave', (deserter) => {
      setMembers(members.filter((member) => member.id !== deserter.id))
    })

    return function cleanup() {
      room.on('close', event => {
        console.log('Connection closed:', event);
      })
      drone.close();
    }
  }, [messages, setMessages]);

  return (
    <div className={styles.chatroom}>
      <Board messages={messages} />
      <TextArea drone={drone} roomName={observableRoomName} />
      <Sidebar />
    </div>
  );
};

export default ChatRoom;
