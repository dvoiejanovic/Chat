import { useEffect, useState } from "react";

import styles from "./Chatroom.module.scss";
import TextArea from "../TextArea";
import Sidebar from "../Sidebar";
import Board from "../Board";
import { formatToHoursAndMinutes } from "../../utils/time";
import { avatars } from "../../constants/avatars";
import { useSelector } from "react-redux";

const ChatRoom = (props) => {
  const {roomName, userName, avatarId} = props;

  const user = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([{
    id: 1,
    avatarSrc: avatars.find((avatar) => avatar.id === user.avatarId)?.source,
    name: user.name
  }]);

  const observableRoomName = `observable-stari-${roomName}`
  const drone = new Scaledrone(import.meta.env.VITE_CHANNEL_ID, {
    data: {
      name: userName,
      avatarId
    }
  });
  const room = drone.subscribe(observableRoomName);

  // const mapMembers = (member) => {
  //   return {
  //     name: member.clientData.name,
  //     id: member.id,
  //     avatarSrc: avatars.find((avatar) => avatar.id === member.clientData.avatarId)?.source
  //   }
  // }

  useEffect(() => {
    room.on('open', error => {
      if (error) {
        console.log(error);
      }
    });

    room.on('message', message => {
      setMessages(previousMessages => [...previousMessages, {
        text: message.data,
        id: message.id,
        time: formatToHoursAndMinutes(message.timestamp)
      }]);
    });

    // room.on('members', (members) => {
    //   setMembers(previousMembers => [...previousMembers, ...members.map((member) => mapMembers(member))]);
    // });

    // room.on('observable_member_join', (member) => {
    //   setMembers(previousMembers => [...previousMembers, mapMembers(member)])
    // })

    // room.on('member_leave', (deserter) => {
    //   setMembers(previousMembers => [...previousMembers.filter((member) => member.id !== deserter.id)])
    // })

    return function cleanup() {
      room.on('close', event => {
        console.log('Connection closed:', event);
      })
      drone.close();
    }
  }, [])

  return (
    <div className={styles.chatroom}>
      <Board messages={messages} />
      <TextArea drone={drone} roomName={observableRoomName} />
      <Sidebar members={members} roomName={roomName} />
    </div>
  );
};

export default ChatRoom;
