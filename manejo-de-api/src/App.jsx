import { useState } from 'react'
import './App.css'
import { Render } from './components/render.jsx'
import { useSearch } from './hooks/useSearch.js'

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Players')
  const { players, getPlayer, loading } = useSearch({ search, category })
  

  const handleClick = () => {
    if (category === 'Players') {
      setCategory('Teams')
      return
    }
    if (category === 'Teams') {
      setCategory('Events')
      return
    }
    if (category === 'Events') {
      setCategory('Players')
      return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPlayer({search, category})
    
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    
  }

  return (
    <>
      <header>
        <h1>Manejo de API</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...'/>
          <button type='submit'>Buscar</button>
          <button onClick={() => handleClick()}>by{category}</button>
        </form>
      </header>

      <main>
        {loading? <p>Realiza una busqueda</p> : <Render playersTeamsEvents={players} />}
      </main>

      
      
      
      
    </>
  )
}

export default App
