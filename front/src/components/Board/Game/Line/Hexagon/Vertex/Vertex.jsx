const getSvgImage = (color, building, number) => {
  return <span id={`span-vertex-${number}`}>
    <img key={`${color}-${building}-${number}`} id={`${color}-${building}`} src={`assets/${building}_${color}.svg`} alt={`${color} ${building}`} className={`vertex vertex${number}`}/>
  </span>
}

const getVertexCssColor = (value) => {
  if(value >= 13) return 'best'  
  if(value >= 10) return 'good' 
  if (value >= 7) return 'medium' 
  return 'bad'  
}

export const Vertex = ({number, vertex, vertexOpts}) => {
  if(vertexOpts.showBuildings && vertex.owner){
    return getSvgImage(vertex.owner, vertex.building, number)
  }

  if(vertexOpts.showBlockedVertices || !vertex.buildingNeighbor){
    return (
      <span id={`span-vertex-${number}`} className={`vertex vertex${number} ${vertex.owner ?? getVertexCssColor(vertex.value)}`}>
        {vertex.value}
      </span>
    )
  }
}
