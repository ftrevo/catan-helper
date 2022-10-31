export const ResourceOdds = ({statistics}) => {
  const resources = Object.entries(statistics)
  .map(([resource, data]) => ({...data, resource}))
  .filter(({resource}) => resource !== 'total')
  .sort((a, b) => a.value - b.value)

  resources[0].extraClass = ' start'
  resources[resources.length - 1].extraClass = ' end'

  return (
    <div className='gameStatistics'>
      {
        resources.map(
          ({odds, resource, extraClass}) => (
            <div 
              key={resource} 
              className={`statisticsBar ${resource}${extraClass ?? ''}`} 
              style={{width: odds + '%'}}>
                {resource.charAt(0).toUpperCase() + resource.slice(1)} - {odds}%
              </div>
          )
        )
      }
    </div>
  )
}