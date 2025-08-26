
import './App.css'
import Moviecard from './Moviecard' 

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
        <Moviecard movie={{ title: "Tim's Film", release_date: "2024" }} />
      ) : (
        <Moviecard movie={{ title: "Joes Film", release_date: "2020" }} />
      )}
    </>
  )
}

export default App
