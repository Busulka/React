import React, {useEffect, useState} from "react";
import {MessageList} from "./components/MessageList";




import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import './App.css';


function App (){
    const createMessage = (author, inputMessage, key) => ({
        author,
        inputMessage,
        key,
    })
    const [inputMessage, setInputMessage] = useState('');

    const onChange = (event) => {
        setInputMessage(event.target.value);
    }

    const [messages, setMessages] = useState([]);

    const addMessage = (...items) => {
        setMessages((messages)=>{
            return [
                ...messages,
                ...items,
            ]
        })
    }
    useEffect(() =>{

            if (messages.length !== 0) {
                {
                    if (messages[messages.length - 1].author === "User") {


                        setTimeout(() => {

                            addMessage(createMessage("Bot", inputMessage+" to you too", Date.now()+1))

                        }, 2000);



                    }
                }
            }
        },[messages]
    )
    return (
        <div className = "chat">
            <MessageList  messages={messages}/>

            <form className="inputBox" noValidate autoComplete="off">

                <TextField className="input" id="filled-basic" label="Write your message here" variant="outlined" color="secondary" value={inputMessage} onChange={onChange} type="text"/>
                <Button type="button" variant="contained" color="primary" className= "sendMsg" onClick={() =>{
                    addMessage(createMessage("User", inputMessage, Date.now()
                    ));
                }}>Send</Button>

            </form>
        </div>
    )
}
export default App;
