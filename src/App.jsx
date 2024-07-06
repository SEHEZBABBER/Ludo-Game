import './App.css'
import RollDice from './RollDice.jsx'
import Board from "./Board.jsx"
function App() {

  return (
    <div className="page">
      <Board />
      <RollDice col = "red"/>
    </div>
  )
}

export default App