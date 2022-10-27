import './Game.css'
import Line from './Line'

function Game({tiles, vertices, vertexOpts}) {
  return (
    <div key="game" id="game" className="game">
      <Line key="line0" tiles={tiles.slice(0, 3)} vertices={vertices} lineNumber="0" vertexOpts={vertexOpts} />
      <Line key="line1" tiles={tiles.slice(3, 7)} vertices={vertices} lineNumber="1" vertexOpts={vertexOpts} />
      <Line key="line2" tiles={tiles.slice(7, 12)} vertices={vertices} lineNumber="2" vertexOpts={vertexOpts} />
      <Line key="line3" tiles={tiles.slice(12, 16)} vertices={vertices} lineNumber="3" vertexOpts={vertexOpts} />
      <Line key="line4" tiles={tiles.slice(16, 19)} vertices={vertices} lineNumber="4" vertexOpts={vertexOpts} />
    </div>
  )
}

export default Game