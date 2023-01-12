import React, { Component } from 'react';
import './ChatList.css'

export class ChatList extends Component {
  static displayName = ChatList.name;

  constructor(props) {
    super(props);
    this.state = { chats : []}
    this.SetChatList = this.SetChatList.bind(this);

  }

  componentDidMount() {
    this.SetChatList();
  }


SetChatList() {
    this.setState({
      chats: [{
          sender: "sender",
          chatId: 1
      },
      {
        sender: "sender1",
        chatId: 2
    },
    {
        sender: "sender2",
        chatId: 3
    },
    ]
    });
  }

  render() {
    return (
      <div className='flex column space-between'>
        {this.state.chats.map(chat => (
            <div className='chat' key={chat.chatId}>
                <div className='photo'></div>
                <span>{chat.sender}</span>
                </div>
        ))}
      </div>
    );
  }
}
