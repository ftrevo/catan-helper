import Hexagon from './Hexagon'

function Line({lineNumber, tiles, vertices}) {
  return (
    <div id={`div-line-${lineNumber}`} className="tile-row">
      {
        tiles.map((tile, tileIndex) => (
          < Hexagon
            key={`hexagon-${tileIndex}`}
            lineNumber={parseInt(lineNumber)}
            tile={tile} 
            hexagonNumber={tileIndex}
            vertices={vertices}
          />
        ))
      }
    </div>
  )
}

export default Line