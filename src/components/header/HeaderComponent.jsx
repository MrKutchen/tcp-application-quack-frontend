import React, {Component} from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__left">
                    <Avatar
                        className="header__avatar"
                        alt='Peter Kutchen'
                        src=''
                    />
                    <AccessTimeIcon/>
                </div>
                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder="Search QUACK"/>

                </div>
                <div className="header__right">
                    <HelpOutlineIcon/>
                </div>
            </div>
        )
    }
}

export default HeaderComponent