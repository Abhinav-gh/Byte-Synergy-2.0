import React from 'react'

const ChatNow=()=>{
    console.log("Chat Now");
}
export default function Chatbot() {
  return (
    <div>
        <div>
            <br/>
            <p>Plan for Chatbot</p>
            <l>
                <li>Chatbot will be able to answer the basic questions of the user.</li>
                <li> The answers generated might not be accurate</li>
                <li> Terms and conditions applied</li>
                <br/>
            </l>
            <button onClick={ChatNow}> Chat Now </button>
        </div>
        <br/>
        <div>
            <p>Plan for Live-agent-chatting</p>
            <l>
                <li> You will be able to chat with a live agent</li>
                <li> You are required to pay for it first</li>
                <li> Terms and conditions applied</li>
                <br/>
            </l>
            <button onClick={ChatNow}> Chat Now </button>
        </div>
    </div>
  )
}
