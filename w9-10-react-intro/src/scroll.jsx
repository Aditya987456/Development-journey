import React, { useEffect, useRef, useState } from 'react';

function ScrollOnMount() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);




  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };





  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);



  /*

Without a key, React struggles to efficiently update lists, causing potential re-renders for items that haven’t changed.

Using index as a key is fine for static or minimally changing lists. For dynamic lists (e.g., reordering), use unique identifiers like msg.id.

The problem is not about "not using index"—it's about not providing a proper key at all.
  
  */




  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ marginBottom:50,padding:10, height: "600px", overflowY: "scroll", border: "1px solid black" , borderRadius:5,}}
      >

        {messages.map((msg, index) => (

          <div 
            style={{borderRadius:10, border:"1px solid black" ,padding:5,margin:3 , backgroundColor:'cornflowerblue' }}
          key={index}>{msg}</div>

        ))}

      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}




export default ScrollOnMount;
