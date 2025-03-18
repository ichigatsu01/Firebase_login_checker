import React, { useEffect, useState } from 'react'

const Message = ({user}) => {
  const [timeMsg, setTimeMsg] = useState("");
  useEffect(() => {
  let d = new Date();
  // d.setHours(11)
  let nowHour = parseInt(('0'+d.getHours()).slice(-2))
  console.log(nowHour, '時です');
  if (12 > nowHour && nowHour >= 5) {
      setTimeMsg("おはようございます");
  } else if (18 >= nowHour && nowHour >= 12) {
      setTimeMsg("こんにちわ");
  } else {
      setTimeMsg("こんばんわ");
    }
  }, [])
  return (
    <div>
      <p>{timeMsg}、{user.providerData[0].displayName}さん</p>
      <img src={user.providerData[0].photoURL} alt="" />
      
      
    </div>
  )
}

export default Message
