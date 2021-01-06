import React, {Component} from 'react';
import './SidebarComponent.css';
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
import ChannelDataService from "../../api/ChannelDataService";

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        }
        this.refreshChannels = this.refreshChannels.bind(this)
    }

    componentDidMount() {
        this.refreshChannels();
    }

    refreshChannels() {
        ChannelDataService.retrieveAllChannels()
            .then(
                response => {
                    this.setState({channels: response.data})
                }
            )
    }

    render() {
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
                {this.state.channels.map(channel => (
                    <SideBarOptions title = {channel.channelName} />
                    ))}
            </div>
        );
    }
}

export default SidebarComponent