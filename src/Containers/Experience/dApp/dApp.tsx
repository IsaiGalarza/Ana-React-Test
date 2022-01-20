import './styles.scss'
import DeFi_Swap from '../../../Images/DeFi_Swap.png'
import Docu_sign from '../../../Images/Docu_sign.png'
import arrow from '../../../Images/arrow.png'

interface DAppProps {
  icon: number
  title: string
  description: string
  user: string
  onChange: any
}


export default function dApp(props: DAppProps) {
  function handleChange() {
    props.onChange()
  }
  const imgArray: any[] = [
    DeFi_Swap, Docu_sign
  ]
  const arrayIndex: number = props.icon
  return (
    // DApp Component
    <div className='d-flex justify-content-between dApp-content my-1' onClick={() => { handleChange() }}>
      <div className='d-flex'>
        <img src={imgArray[arrayIndex]} className='dApp-icon' alt='icon' />
        <div className='d-flex flex-column'>
          <h6>{props.title}</h6>
          <p className='dApp-description'>{props.description}</p>
          <p className='dApp-user'>{props.user}</p>
        </div>
      </div>
      <div className='d-flex align-items-center'>
        <img src={arrow} className='arrow-icon' alt='arrow' />
      </div>
    </div>
  )
}