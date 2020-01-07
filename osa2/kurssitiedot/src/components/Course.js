import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = ({ name }) => {
    return <h1>{name}</h1>
}

const Content = ({ parts }) => {
    const rows = () => parts.map(part =>
        <Part
            key={part.id}
            part={part}
        />
    )
    return (
        <ul>
            {rows()}
        </ul>
    )
}

const Part = ({ part }) => {
    return <>
        <li>
            {part.name} {part.exercises}
        </li>
    </>
}

const Total = ({ parts }) => {
    const total = parts.reduce((s, p) =>
        s + p.exercises, 0
    )
    return <><p>Number of exercises {total}</p></>
}

export default Course