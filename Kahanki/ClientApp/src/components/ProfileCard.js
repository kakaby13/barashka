import React, { Component } from 'react';
import './Profile.css';

export class ProfileCard extends Component {
  static displayName = ProfileCard.name;

  constructor(props) {
    super(props);
    this.state = { 
        currentCount: 0,
    
    };
    
    this.incrementCounter = this.incrementCounter.bind(this);
    

  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
        <>
        <div className="container flex">
            <div className="card flex">
                <div className="photo flex column space-between">
                    <div className="img">

                    </div>
                    <div className="text font-white">
                        <span className=""> Дима, 26 </span>
                        <span className=""> ЦЦР, developer </span>
                        <span> Минск </span>
                    </div>
                </div>
                <div className="info flex column space-between">
                    <div className="common align-center">
                        <h3>
                            Общая информация
                           
                        </h3>
                        <span>Образование: БГУ Работа: ЦЦР, developer </span>
                    </div>
                    <div className="common align-center">
                        <h3>Обо мне</h3>
                        <span
                            >Имя: Настя Возраст: 26 Пол: Женский Ориентация:
                            Геторо Образование: БГУ Работа: ЦЦР, developer
                            Город: Минск</span
                        >
                    </div>
                    <div className="common align-center">
                        <h3>Где меня найти:</h3>
                        <span
                            >Имя: Настя Возраст: 26 Пол: Женский Ориентация:
                            Геторо Образование: БГУ Работа: ЦЦР, developer
                            Город: Минск</span
                        >
                    </div>
                </div>
            </div>
            <div className="btns">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        </>
    );
  }
}
