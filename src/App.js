import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      { name: 'Raiden' },
      { name: 'Ty' },
      { name: 'Iris' },
    ]
  };

  switchUsernameHandler = (newName) => {
    this.setState({
      usernames: [
        { name: 'Ty + Bille' },
        { name: 'Iris + Raiden' },
        { name: newName }
      ]
    })
  };

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: [
        { name: event.target.value },
        { name: 'Ty + Bille + Tayo' },
        { name: 'Iris + Raiden = YES! lol' }
      ]
    })
  };

  render() {
    const buttonStyle = {
      backgroundColor: '#00d1b2',
      font: 'inherit',
      border: '2px solid #03aa91',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none'
    };

    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <button
          style={ buttonStyle }
          onClick={ () => this.switchUsernameHandler('Raiden + Iris!') }
          >
          Switch Usernames
        </button>
        <UserInput
          currentName={ this.state.usernames[0].name }
          changed={ this.usernameChangedHandler }
          />
        <UserOutput name={ this.state.usernames[0].name }>and I'm loving React</UserOutput>
        <UserOutput name={ this.state.usernames[1].name }/>
        <UserOutput name={ this.state.usernames[2].name }/>
      </div>
    );
  }
}

export default App;
