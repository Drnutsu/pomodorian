import React, { Component } from 'react';
import './semantic.css';
import { Card, Icon, Progress } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Card
        centered
        raised
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }}
      >
        <Card.Content>
          <Card.Header>
            Your Pomodorian
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Work on something
            </span>
          </Card.Meta>
          <Card.Description>
            <Progress percent={60} active color="orange">
              Will ended in 30 mins
            </Progress>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            2 Friends are waiting for you
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default App;
