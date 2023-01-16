import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import './ChatList.css'

export class ChatList extends Component {
  static displayName = ChatList.name;

  constructor(props) {
    super(props);
    this.state = { chats: [], userId: null }
    this.getChatList = this.getChatList.bind(this);
  }

  componentDidMount() {
    this.getChatList();
  }

  async getChatList() {
    const [user] = await Promise.all([authService.getUser()])
    this.setState({
        userId: user && user.id
    });
    const response = await fetch('chat/getallchatsbyuserid', this.state.userId);
    const data = await response.json();
    this.setState({ chats: data, loading: false });
    data.forEach(chat => {
      var userId = chat.users.map(user => user.Id != userId)
      var userInfo = this.getUserInfo(userId)
      this.state.chats.push({
        userFullName : userInfo.NormalizedUserName,
        lastMessage : chat.messages.sort(r => r.SendDate)[chat.lenght]
      })
    });
  }

  async getUserInfo(userId){
    const response = await fetch('user/read', userId);
    const data = await response.json();
    return data
  }

  render() {
    return (
      <div className='chats flex column space-between align-center'>
        {this.state.chats.map(chat => (
          <div className='flex chat' key={chat.chatId}>
            <div className='photo'></div>
            <span>{chat.sender}</span>
          </div>
        ))}
      </div>
    );
  }
}
