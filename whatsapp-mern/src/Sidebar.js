import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
            <h1>I am a sidebar</h1>
            <div className="sidebar_header">
                <Avatar src='https://reader015.staticloud.net/reader015/html5/20180712/552908d9550346892e8b45f7/bg1.png'/>
               <div className="sidebar_headerRight">
                   <IconButton>
                       <DonutLargeIcon />
                   </IconButton>
                   <IconButton>
                       <ChatIcon />
                   </IconButton>
                   <IconButton>
                       <MoreVertIcon />
                   </IconButton>
               </div>
            </div>
            <div className='sidebar_search'>
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
          <div className="sidebar_chats">
              <SidebarChat />
              <SidebarChat />
              <SidebarChat />
          </div>
        </div>
    )
}
export default Sidebar