import './styles.scss'
import joshdoe from '../../../../../../Images/DocuSign/joshdoe.png'
import CryptoKing from '../../../../../../Images/DocuSign/CryptoKing.png'

interface ActivitiesProps {
  icon: number
  description: string
  time: string
}

export default function ActivitiesList(props: ActivitiesProps) {
  const imgArray: any[] = [
    joshdoe, CryptoKing
  ]
  const arrayIndex: number = props.icon
  return (
    <div className='d-flex my-2'>
      <img src={imgArray[arrayIndex]} className='activities-icon' alt='icon' />
      <div className='d-flex flex-column'>
        <p className='activities-description'>{props.description}</p>
        <p className='activities-user'>{props.time}</p>
      </div>
    </div>
  )
}