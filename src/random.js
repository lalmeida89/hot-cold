import React from 'react';

export default class Random extends React.Component {
  render(){
    const randomNumber = () => Math.floor((Math.random() * 100) + 1);
    console.log(randomNumber());
    return(
      <div>
        <button onClick={randomNumber}>generate</button>
      </div>
    )
  }
}
