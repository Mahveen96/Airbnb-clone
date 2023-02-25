import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const App = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />
  })
  return (
    <div>
      <div className="container">
        <Navbar />
        <Hero />
        <section className="card-container">{cards}</section>
      </div>
    </div>
  )
}

export default App
