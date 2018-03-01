import React from 'react';

export default class NumberGuesser extends React.Component {
  onSubmit(event){
    event.preventDefault();

    this.input.value = ''
  }
    render(){
    return (
      <form>
        <input
        type='number'
        name='numberImput'
        className='numberImput'
        placeholder='guess here'
        min='1'
        max='100'
        ref={input=>(this.input = input)}
        required>
        </input>
        <button
        type='submit'
        name='submit'
        className='submitButton'>Make your guesser
        </button>
      </form>
    );
  }
}
