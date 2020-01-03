import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)
const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const selectRandomAnecdote = () => {
      let number =  Math.floor(Math.random() * anecdotes.length)
      while (number === selected){
        number =  Math.floor(Math.random() * anecdotes.length)
      }
      setSelected(number)
    }
    const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
    const updateVotes = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }
    const indexOfMostVoted = votes.indexOf(Math.max(...votes))


    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <Button handleClick={() => updateVotes()}
                text='vote' />    
            <Button handleClick={() => selectRandomAnecdote()}
                text='next anecdote' />
            <h1>Anecdote with most votes</h1>    
            <p>{anecdotes[indexOfMostVoted]}</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)