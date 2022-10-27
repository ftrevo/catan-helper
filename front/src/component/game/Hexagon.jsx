import Vertex from './Vertex'
import DiceNumber from './DiceNumber'
import './Hexagon.css'

const initials = [
  [0, 4, 8, 12, 7, 3],
  [7, 12, 17, 22, 16, 11],
  [16, 22, 28, 33, 27, 21],
  [28, 34, 39, 43, 38, 33],
  [39, 44, 48, 51, 47, 43],
]

const getVertex = (vertices, lineNumber, vertexPosition, hexagonNumber) => {
  return vertices[initials[lineNumber][vertexPosition] + hexagonNumber]
}

const getVertex5EdgeCases = (vertices, lineNumber, hexagonNumber, vertexOpts) => {
  if (hexagonNumber === 0) {
    return <Vertex key={5} number={5} vertex={getVertex(vertices, lineNumber, 5, hexagonNumber)} vertexOpts={vertexOpts}/>
  }
}

const getVertex4EdgeCases = (vertices, lineNumber, hexagonNumber, vertexOpts) => {
  if (lineNumber === 4 || (lineNumber >= 2 && hexagonNumber === 0)) {
    return <Vertex key={4} number={4} vertex={getVertex(vertices, lineNumber, 4, hexagonNumber)} vertexOpts={vertexOpts}/>
  }
}

const getVertex3EdgeCases = (vertices, lineNumber, hexagonNumber, vertexOpts) => {
  if (lineNumber === 4) {
    return <Vertex key={3} number={3} vertex={getVertex(vertices, lineNumber, 3, hexagonNumber)} vertexOpts={vertexOpts}/>
  }
}

const getVertex2EdgeCases = (vertices, lineNumber, hexagonNumber, vertexOpts) => {
  if (lineNumber + hexagonNumber === 6) {
    return <Vertex key={2} number={2} vertex={getVertex(vertices, lineNumber, 2, hexagonNumber)} vertexOpts={vertexOpts}/>
  }
}

function Hexagon({tile, hexagonNumber, vertices, lineNumber, vertexOpts}) {
  return (
      <div id={`div-hexagon-${hexagonNumber}`} className={`hexagon ${tile.resource}`}>
        <DiceNumber key={'dice-number'} number={tile.number} />
        <Vertex key={0} number={0} vertex={getVertex(vertices, lineNumber, 0, hexagonNumber)} vertexOpts={vertexOpts}/>
        <Vertex key={1} number={1} vertex={getVertex(vertices, lineNumber, 1, hexagonNumber)} vertexOpts={vertexOpts}/>
        {getVertex2EdgeCases(vertices, lineNumber, hexagonNumber, vertexOpts)}
        {getVertex3EdgeCases(vertices, lineNumber, hexagonNumber, vertexOpts)}
        {getVertex4EdgeCases(vertices, lineNumber, hexagonNumber, vertexOpts)}
        {getVertex5EdgeCases(vertices, lineNumber, hexagonNumber, vertexOpts)}
    </div>
  )
}

export default Hexagon