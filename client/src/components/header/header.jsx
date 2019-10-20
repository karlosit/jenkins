import React, { Component } from "react";
import './header.scss';
//import header_logo from '../../assets/img/fatboar_logo.png';
//import { Route, Switch, BrowserRouter as Router, Redirect, browserHistory } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-fixed-top only-desk">
                <ul>
                    <li className="li-header">Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
            </nav>
        )
    }
}
export default Header;
