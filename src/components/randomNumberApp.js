import React from 'react';

import RandomButton from './randomButton';
import NumberGuesser from './numberGuesser'

export default class RandomNumberApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show : 'button'
        }
    }

    setEditing() {
        this.setState({
            show : 'guesser'
        });
    }

    numberGenerator() {
      const randomNumber = () => Math.floor((Math.random() * 100) + 1);
      console.log(randomNumber());
      this.setEditing();
    }

    render() {

        // Show the button to start with
      if(this.state.show === 'button'){
        return <RandomButton onClick={e=> this.numberGenerator()}/>;
      }
      else if(this.state.show === 'guesser'){
      return <NumberGuesser />;
      }
    }
}
