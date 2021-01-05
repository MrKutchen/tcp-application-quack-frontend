import React from 'react';
import "./SidebarOptions.css"
import { useHistory } from "react-router-dom";

function SideBarOptions({Icon, title, id, addChannelOption}) {

    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            if (id) {
                history.push(`/channels/${id}`);
            } else {
                history.push(title);
            }
        }
    };

    const addChannel = () => {

    }


    return (
        <div className="sidebarOption"
             onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? (<h3>{title}</h3>
            ) : (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                </h3>
            )}
        </div>
    );
}

export default SideBarOptions;