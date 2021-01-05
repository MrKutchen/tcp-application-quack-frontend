import React, {useEffect, useState} from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SideBarOptions from "./SideBarOptions";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import {URL} from "../../Constants";

function Sidebar() {

    const Channel = () => {
        const [channel, setChannels] = useState([]);

        const fetchChannels = () => {
            axios.get(`${URL}/channels`).then(res => {
                setChannels(res.data);
            })
        }

        useEffect(() => {
            fetchChannels();
        }, []);

        return channel.map((channel, index) => {

            return (
                <div key={index}>
                    <SideBarOptions title={channel.channelName} id={channel.id}/>
                </div>
            )
        })
    };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Quack</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Peter Kutchen
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SideBarOptions Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOptions Icon={InboxIcon} title="Mentions & Reactions"/>
            <SideBarOptions Icon={DraftsIcon} title="Saved Items"/>
            <SideBarOptions Icon={BookmarkBorderIcon} title="Channel Browser"/>
            <SideBarOptions Icon={PeopleAltIcon} title="People & User Groups"/>
            <SideBarOptions Icon={AppsIcon} title="Apps"/>
            <SideBarOptions Icon={FileCopyIcon} title="FileBrowser"/>
            <SideBarOptions Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SideBarOptions Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SideBarOptions Icon={AddIcon} addChannelOption title="Add Channel"/>
            <Channel/>
        </div>
    );
}

export default Sidebar