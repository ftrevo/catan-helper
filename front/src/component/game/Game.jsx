import './Game.css'
import Line from './Line'

function Game({tiles, vertices}) {
  return (
    <div key="game" id="game" className="game">
      <Line key="line0" tiles={tiles.slice(0, 3)} vertices={vertices} lineNumber="0" />
      <Line key="line1" tiles={tiles.slice(3, 7)} vertices={vertices} lineNumber="1" />
      <Line key="line2" tiles={tiles.slice(7, 12)} vertices={vertices} lineNumber="2" />
      <Line key="line3" tiles={tiles.slice(12, 16)} vertices={vertices} lineNumber="3" />
      <Line key="line4" tiles={tiles.slice(16, 19)} vertices={vertices} lineNumber="4" />
    </div>
  )
}

export default Game