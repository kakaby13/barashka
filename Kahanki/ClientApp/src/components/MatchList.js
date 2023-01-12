import React, { Component } from 'react';
import './MatchList.css'

export class MatchList extends Component {
  static displayName = MatchList.name;

  constructor(props) {
    super(props);
    this.state = { matchs : []}
    this.incrementMatchList = this.incrementMatchList.bind(this);

  }

  componentDidMount() {
    this.incrementMatchList();
  }


  incrementMatchList() {
    this.setState({
      matchs: [{name: 'петя', age: 22},{name: 'петя2', age: 25},{name: 'петя3', age: 26}]
    });
  }

  render() {
    return (
      <div className='flex space-between'>
        {this.state.matchs.map(match => (<div className='matchCard'>
                    {`${match.name},${match.age} `}
                </div>)
                
        )}
      </div>
    );
  }
}
