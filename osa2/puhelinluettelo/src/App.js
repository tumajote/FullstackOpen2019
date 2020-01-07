import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Person from './components/Person'
import Notification from './components/Notification'
import Error from './components/Error'
import numberService from './services/numbers'


const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

  const nullNotification = () => setNotification(null)
  const nullError = () => setError(null)
  
  useEffect(() => {
    numberService
      .getAll()
      .then(numbers => setPersons(numbers))
  },
    [])

  const rows = () => personsToShow.map(person =>
    <Person
      key={person.name}
      person={person}
      deletePerson={() => deletePerson(person.id)}
    />
  )

  const personsToShow = persons.filter(person => new RegExp(search, "i").test(person.name))

  const addNumber = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName && person.number === newNumber)) {
      alert(newName + ' is already added to the phonebook')
    } else if (persons.some(person => person.name === newName)) {
      const person = persons.find(p => p.name === newName)
      const id = person.id
      if (window.confirm(`${person.name} is already added to the phonebook, replace the old number with new one?`)) {
        const newPersonNumber = { ...person, number: newNumber }
        numberService
          .update(person.id, newPersonNumber)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setNotification(`Changed number for ${person.name}`)
            setTimeout(nullNotification,5000)
          }).catch(error => {
            setError(`Information for ${person.name} was not found on the server`)
            setTimeout(nullError,5000)
            setPersons(persons.filter(person => person.id !== id))
          }
          )
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      numberService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${personObject.name}`)
          setTimeout(nullNotification,5000)
        })

    }
  }

  const deletePerson = id => {
    const person = persons.find(p => p.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      numberService
        .remove(id)
        .then(response => {
          console.log(response)
          setPersons(persons.filter(person => person.id !== id))
          setNotification(`Deleted ${person.name}`)
          setTimeout(nullNotification,5000)
        }).catch(error => {
          setError(`Information for ${person.name} was not found on the server`)
          setTimeout(nullError,5000)
          setPersons(persons.filter(person => person.id !== id))
        }
        )
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Error message={error}/>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm addNumber={addNumber} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons rows={rows()} />
    </div>
  )

}

export default App