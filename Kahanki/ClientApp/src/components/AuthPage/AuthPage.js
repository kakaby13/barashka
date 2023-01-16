import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import { LoginMenu } from '../api-authorization/LoginMenu';
import './Auth.css'

export class AuthPage extends Component {
  static displayName = AuthPage.name;

  constructor(props) {
    super(props);
    this.state = { }
    //this.getChatList = this.getChatList.bind(this);
  }

  componentDidMount() {
  }

  render() {
    return (
        <div className='auth flex column white-card align-center'><LoginMenu /></div>
    );
  }
}
