const getSvgImage = (color, building, index) => {
  return <img key={`${color}${building}${index}`} id={`${color}${building}`} src={`assets/${building}_${color}.svg`} alt={`${color} ${building}`} className="buildingImg"/>
}

export const PlayerData = ({players}) => {
  return (
    Object.entries(players).map(([color, data]) => {
    return (<div key={`player-${color}`} id={`player-${color}`} className="playerData">
        {Array.from({length: data.buildings.settlement}).map((_item, index) => getSvgImage(color, 'settlement', index))}
        {Array.from({length: data.buildings.city}).map((_item, index) => {return getSvgImage(color, 'city', index)})}
        <div key={`resources-${color}`} id={`resources-${color}`} className="data">
         <table>
          <tbody>
            <tr>
              <td width="200px">
                <table>
                  <tbody>
                    <tr>
                      <td>Total Production</td>
                      </tr>
                    <tr>
                      <td>{data.resources.production}</td>
                    </tr>
                    <tr>
                      <td>All dice numbers</td>
                      </tr>
                    <tr>
                      <td>{data.numbers.join(', ')}</td>
                    </tr>
                    <tr>
                      <td>Total buildings</td>
                      </tr>
                    <tr>
                      <td>{data.buildings.settlement + data.buildings.city}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3} className="resourceHeader">Resources</td>
                    </tr>
                    <tr>
                      <td width="100px">Production</td>
                      <td width="100px">Numbers</td>
                      <td width="100px">Tiles</td>
                    </tr>
                    <tr className='brick'>
                      <td className='td'>{data.resources.brick?.production || 0}</td>
                      <td className='td'>{data.resources.brick?.numbers.join(', ')}</td>
                      <td className='td'>{data.resources.brick?.tiles || 0}</td>
                    </tr>
                    <tr className='grain'>
                      <td className='td'>{data.resources.grain?.production || 0}</td>
                      <td className='td'>{data.resources.grain?.numbers.join(', ')}</td>
                      <td className='td'>{data.resources.grain?.tiles || 0}</td>
                    </tr>
                    <tr className='lumber'>
                      <td className='td'>{data.resources.lumber?.production || 0}</td>
                      <td className='td'>{data.resources.lumber?.numbers.join(', ')}</td>
                      <td className='td'>{data.resources.lumber?.tiles || 0}</td>
                    </tr>
                    <tr className='ore'>
                      <td className='td'>{data.resources.ore?.production || 0}</td>
                      <td className='td'>{data.resources.ore?.numbers.join(', ')}</td>
                      <td className='td'>{data.resources.ore?.tiles || 0}</td>
                    </tr>
                    <tr className='wool'>
                      <td className='td'>{data.resources.wool?.production || 0}</td>
                      <td className='td'>{data.resources.wool?.numbers.join(', ')}</td>
                      <td className='td'>{data.resources.wool?.tiles || 0}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
         </table>
        </div>
    </div>)
    })
  )
}