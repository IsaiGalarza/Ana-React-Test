import './styles.scss'
import mockData from '../.././../../../Assets/MockData.json'
import ActivitiesList from './ActivitiesList/ActivitiesList'
import { ActivitiesDataItem } from './types'

export default function Activities() {
  const activitiesData: ActivitiesDataItem[] = mockData['Activities']
  return (
    <div className='m-4'>
      <div className='d-flex justify-content-center'>
        <div className='result'>
          <p className='resul-text text-center align-center'>12 activity found </p>
        </div>
      </div>
      <div>
        {activitiesData?.map((data: ActivitiesDataItem, index: number) => (
          <ActivitiesList
            key={index}
            icon={data.icon}
            description={data.description}
            time={data.time}
          />
        ))}
      </div>
    </div>
  )
}