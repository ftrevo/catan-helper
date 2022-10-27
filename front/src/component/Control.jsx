import './Control.css'

function Control({
  showBuildings, 
  toggleBuildings, 
  showBlockedVertices, 
  toggleBlockedVertices,
  loading,
  load,
}) {
  return (
    <div key='control-board' id='control-board' className='controlBoard'>
      <button key='button-load' className='button' disabled={loading} onClick={load}>Fetch game data</button>
      <div className='grouper'>
        <span id='span-vertex'>
          <img src='assets/city_white.svg' className='controlCity'/>
        </span>
        <input key='building-toggle' className='input' type="checkbox" id="switch-building" checked={showBuildings} onChange={toggleBuildings} /><label className='label' htmlFor="switch-building"></label>
      </div>
      <div className='grouper'>
        <span className='controlVertex'>X</span>
        <input key='vertices-toggle' className='input' type="checkbox" id="switch-vertex" checked={showBlockedVertices} onChange={toggleBlockedVertices} /><label className='label' htmlFor="switch-vertex"></label>
      </div>
    </div>
  )
}

export default Control