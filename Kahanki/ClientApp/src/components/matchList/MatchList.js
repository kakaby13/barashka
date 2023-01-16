import React, { Component } from "react";
import "./MatchList.css";
import authService from "./../api-authorization/AuthorizeService";

export class MatchList extends Component {
    static displayName = MatchList.name;

    constructor(props) {
        super(props);
        this.state = { matchs: [] };
        this.getMatchList = this.getMatchList.bind(this);
    }

    componentDidMount() {
        this.getMatchList();
    }

    async getMatchList() {
        const [user] = await Promise.all([authService.getUser()]);
        this.setState({
            userId: user && user.id,
        });
        const response = await fetch(
            "chat/getallchatsbyuserid",
            this.state.userId
        );
        const data = await response.json();
        this.setState({ chats: data, loading: false });
        data.forEach((chat) => {
            var userId = chat.users.map((user) => user.Id != userId);
            var userInfo = this.getUserInfo(userId);
            this.state.chats.push({
                userFullName: userInfo.NormalizedUserName,
                lastMessage: chat.messages.sort((r) => r.SendDate)[chat.lenght],
            });
        });
    }

    async getUserInfo(userId) {
        const response = await fetch("user/read", userId);
        const data = await response.json();
        return data;
    }

    componentDidMount() {
        this.incrementMatchList();
    }

    incrementMatchList() {
        this.setState({
            matchs: [
                { name: "петя", age: 22 },
                { name: "петя2", age: 25 },
                { name: "петя3", age: 26 },
            ],
        });
    }

    render() {
        return (
            <div className="matchs flex space-between align-center">
                {this.state.matchs.map((match) => (
                    <div className="card">
                        <span>{`${match.name},${match.age} `}</span>
                    </div>
                ))}
            </div>
        );
    }
}
