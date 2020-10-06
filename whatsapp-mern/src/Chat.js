import React from 'react';
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';

function Chat(){
    return(
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>  
            <div className="chat_body">
                <p className='chat_message'>
                    <span className='chat_name'>Kamakshi</span>
                    This is message
                    <span className='chat_timestamp'>{new Date().toUTCString()}</span>
                    </p>

                    <p className='chat_message chat_reciever'>
                    <span className='chat_name'>Kamakshi</span>
                    This is message
                    <span className='chat_timestamp'>{new Date().toUTCString()}</span>
                    </p>

                    <p className='chat_message'>
                    <span className='chat_name'>Kamakshi</span>
                    This is message
                    <span className='chat_timestamp'>{new Date().toUTCString()}</span>
                    </p>
            </div>    
            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder="Type a message" />
                    <button type="Submit">Send Message</button>
                    <Mic />
                </form>
            </div>      
        </div>
    )
}
export default Chat