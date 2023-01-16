import React, { Component } from 'react';
import authService from '../api-authorization/AuthorizeService';
import './UserSetting.css'

export class UserSetting extends Component {
    static displayName = UserSetting.name;

    constructor(props) {
        super(props);
        this.state = {  
            userId: "",
            sex: 0,
            lookFor: 0    
        }
        this.getUserSetting = this.getUserSetting.bind(this);
        this.handleSubmit = this.handleSubmit(this)
    }

    componentDidMount() {
        this.getUserSetting();
    }

    async getUserSetting() {

        const user = await authService.getUser();


        const response = await fetch(`userSettings/getSettingsByUserId?userid=${user.sub}`);
        if(response.ok && response.status != "204"){
            const data = await response.json();
            this.setState({ settings: data, loading: false });
        }
    }

    async handleSubmit(event) {
        const user = await authService.getUser();
        
        alert(user.sub)

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                userId: user.sub,
                lookFor: this.state.lookFor,
                sex: this.state.sex
            })
        };

        const response = await fetch('userSettings/create', requestOptions );
        if(response.ok && response.status != "204"){
            const data = await response.json();
            this.setState({ chats: data, loading: false });
        }
    }

    updateSettings() {
        
    }

    render() {
        return (
            <div className='flex column space-between'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Пол:
                        <select id='sex' value={this.state.sex} onChange={e => this.setState({ sex: e.target.value })} name="sex">
                            <option value="1">Мужской</option>
                            <option value="2">Женский</option>
                            <option value="3">Другое</option>
                        </select>
                    </label>

                    <label>
                        Кого ищу:
                        <select id='lookFor' value={this.state.lookFor} onChange={e => this.setState({ sex: e.target.lookFor })} name="lookFor">
                            <option value="2">Женщин</option>
                            <option value="1">Мужчин</option>
                            <option value="3">Всех</option>
                        </select>
                    </label>


                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
