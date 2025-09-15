import {useState, useCallback, useRef} from 'react'
import { searchInput } from '../services/search'

export function useSearch() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const previousSearch = useRef({search: '', category: ''});
  

  const getPlayer = useCallback(async ({ search, category }) => {
    if (search === previousSearch.current.search && category === previousSearch.current.category) return;
    
    setLoading(true);
    setError(null);
    previousSearch.current = {search, category};
    

    try {
      const newPlayer = await searchInput({ search, category });
      setPlayers(newPlayer || []);
    } catch (e) {
      setError(e.message);
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { players, getPlayer, loading, error };
}