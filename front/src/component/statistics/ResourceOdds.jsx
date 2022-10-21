import './ResourceOdds.css'

function ResourceOdds({statistics}) {
  return (
    <div className='gameStatistics'>
      <div key={'brick'} className='statisticsBar brick start' style={{width: statistics.brick.odds + '%'}}>Brick - {statistics.brick.odds}%</div>
      <div key={'grain'} className='statisticsBar grain' style={{width: statistics.grain.odds + '%'}}>Grain - {statistics.grain.odds}%</div>
      <div key={'lumber'} className='statisticsBar lumber' style={{width: statistics.lumber.odds + '%'}}>Lumber - {statistics.lumber.odds}%</div>
      <div key={'ore'} className='statisticsBar ore' style={{width: statistics.ore.odds + '%'}}>Ore - {statistics.ore.odds}%</div>
      <div key={'wool'} className='statisticsBar wool end' style={{width: statistics.wool.odds + '%'}}>Wool - {statistics.wool.odds}%</div>
    </div>
  )
}

export default ResourceOdds
