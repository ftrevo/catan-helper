import { Hexagon } from './Hexagon'

export const Line = ({lineNumber, tiles, vertices, vertexOpts}) => {
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
            vertexOpts={vertexOpts}
          />
        ))
      }
    </div>
  )
}