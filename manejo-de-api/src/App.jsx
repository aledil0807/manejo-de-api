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
  <div className="app-container">
    <header className="app-header">
      <h1 className="app-title">Manejo de API</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          onChange={handleChange}
          value={search}
          name="query"
          placeholder="Lionel Messi, Inter de miami, Barcelona vs Real Madrid..."
        />
        <button className="search-btn" type="submit">Buscar</button>
        <button className="category-btn" type="button" onClick={handleClick}>
          by {category}
        </button>
      </form>
    </header>

    <main className="app-main">
      {loading
        ? <p className="search-message">Realiza una búsqueda</p>
        : <Render playersTeamsEvents={players} category={category} />
      }
    </main>
  </div>
)
}

export default App
