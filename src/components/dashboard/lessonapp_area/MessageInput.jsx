import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as MessageInputIcon } from "../../../assets/icons/microphone.svg";
import { ReactComponent as MessageSendIcon } from "../../../assets/icons/paper-plane.svg";
import NormalButton from "../../common/lessonapp_commons/NormalButton";
import "./MessageInput.css";
import { LessonContext } from "./LessonArea";

const commendStyles = ["Plannned", "Start", "Continue", "Test"];
const commendMethod = ["/plan", "/start", "/continue", "/test"];

const MessageInput = ({ activetab }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("/plan");
  const { userMessage, setUserMessage, messageHistory, setMessageHistory } =
    useContext(LessonContext);

  const handleChangeMethod = (idx) => {
    setSelectedButton(idx);
    setSelectedMethod(commendMethod[idx]);
  };

  const handleSendMessage = async () => {
    if (activetab != "topbar-tab1") {
      // const res = await fetch(`/api/personal_ai/chat/doc`, {
      //   method: 'POST',
      //   headers: {
      //   'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`,
      //     'X-CSRFToken': csrfToken
      //   },
      //   body: JSON.stringify(data)
      // })
    }
  }

  // const handleSendMessage = async () => {
  //   if (activetab != "topbar-tab1") {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open("POST", "/api/query/", true);
  //     xhr.setRequestHeader("Content-Type", "application/json");
  //     // Get the user_id from cookies
  //     const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*=\s*([^;]*).*$)|^.*$/, "$1");

  //     // Set the user_id as a cookie header
  //     xhr.setRequestHeader("Cookie", `user_id=${user_id}`);

  //     xhr.onprogress = () => {
  //       const rawResult = xhr.responseText;
  //       let temp = "";
  //       // split the raw response by '}{' to handle multiple JSON objects in one string
  //       const jsonStrs = rawResult.split('}{').map((str, index, arr) => {
  //           if (index !== 0) str = '{' + str;
  //           if (index !== arr.length - 1) str = str + '}';
  //           return str;
  //       });
  //       // iterate over each JSON string, parse it, and extract the content
  //       jsonStrs.forEach(jsonStr => {
  //           try {
  //               const data = JSON.parse(jsonStr);
  //               const content = data?.choices[0]?.delta?.content || "";
  //               temp = temp + content;
  //           } catch (e) {
  //               console.error(e);
  //           }
  //       });

  //       setMessageHistory((prevMessageHistory) => {
  //         const updatedMessageHistory = [...prevMessageHistory];

  //         // Check if the last message was from the Bot
  //         if (
  //           updatedMessageHistory.length > 0 &&
  //           updatedMessageHistory[updatedMessageHistory.length - 1].user ===
  //             "Bot"
  //         ) {
  //           // Update the last Bot message
  //           updatedMessageHistory[updatedMessageHistory.length - 1].text =
  //           temp;
  //         } else {
  //           // If the last message was not from the Bot, add a new Bot message
  //           updatedMessageHistory.push({ user: "Bot", text: temp });
  //         }

  //         return updatedMessageHistory;
  //       });
  //     };

  //     const body = JSON.stringify({
  //       messages: [
  //         ...messageHistory.filter((item, idx) => idx < 2).map((item) => ({
  //           role: item.user === 'User' ? 'user' : 'assistant',
  //           content: item.text
  //         })),
  //         { role: "user", content: `${selectedMethod} ${userMessage}` },
  //       ],
  //     });
  //     xhr.send(body);

  //     setMessageHistory([
  //       ...messageHistory,
  //       { user: "User", text: userMessage },
  //     ]);

  //     setUserMessage("");
  //   }
  // };

  return (
    <div className="submit-container">
      {activetab != "topbar-tab1" && (
        <div className="commendstyle-container">
          <h1>Lesson App</h1>
          <div className="commendstyle-btns">
            {commendStyles.map((commend, index) => (
              <NormalButton
                key={index}
                label={commend}
                isSelected={selectedButton == index}
                onClick={() => handleChangeMethod(index)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="messageinput-container">
        <MessageInputIcon className="messageinput-icon" />
        <input
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="message-input"
          placeholder="You can ask me anything! I am here to help"
        />
        <span className="messagesend-icon" onClick={handleSendMessage}>
          <MessageSendIcon />
        </span>
      </div>
    </div>
  );
};

export default MessageInput;
