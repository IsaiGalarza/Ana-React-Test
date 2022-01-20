import './styles.scss'
import exchanges from '../../../Images/exchanges.png'
import games from '../../../Images/games.png'
import marketplace from '../../../Images/marketplace.png'
import defi from '../../../Images/defi.png'
import collectibles from '../../../Images/collectibles.png'
import utilities from '../../../Images/utilities.png'
import arrow from '../../../Images/arrow.png'

interface CategoriesProps {
  icon: number
  title: string
  backgroundColor: string
}
export default function Categories(props: CategoriesProps) {
  const iconArray: any[] = [
    exchanges, games, marketplace, defi, collectibles, utilities
  ]
  const arrayIndex: number = props.icon
  return (
    <div className='col-md-6 my-1 px-1' >
      <div className='categories-content' style={{ backgroundColor: props.backgroundColor }}>
        <img src={iconArray[arrayIndex]} className='category-icon' alt='icon' />
        <div className='d-flex justify-content-between'>
          <h6>{props.title}</h6>
          <img src={arrow} className='arrow-icon mt-1' alt='arrow' />
        </div>
      </div>
    </div>
  )
}