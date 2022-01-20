import { useNavigate } from 'react-router-dom'
import './styles.scss'
import HeaderBar from '../../Components/HeaderBar/HeaderBar'
import SearchBar from '../../Components/SearchBar/searchBar'
import DApp from './dApp/dApp'
import Categories from './Categories/Categories'
import mockData from '../../Assets/MockData.json'
import { DAppDataItem, CategoriesDataItem } from './types'
import arrow from '../../Images/arrow.png'

export default function ExperienceContainer() {
  const dAppData: DAppDataItem[] = mockData['RecentExperience']
  const categoriesData: CategoriesDataItem[] = mockData['Caategories']
  const navigate = useNavigate()
  function handleChange() {
    navigate('./DocuSign')
  }
  return (
    // Experience Container
    <>
      <HeaderBar />
      <SearchBar />
      {/* DApp Content */}
      <div className='my-2'>
        <h6 className='mb-3'>Recent Experience</h6>
      </div>
      {dAppData?.map((data: DAppDataItem, index: number) => (
        <DApp
          key={index}
          icon={data.icon}
          title={data.title}
          description={data.description}
          user={data.user}
          onChange={() => { handleChange() }}
        />
      ))}
      {/* Categories Content */}
      <div className='d-flex justify-content-between my-1'>
        <h6 className='my-2'>Popular Categories</h6>
        <div className='d-flex mt-2'>
          <p className='seeAll'>See All</p>
          <img src={arrow} className='arrow-icon mt-1' alt='arrow' />
        </div>
      </div>
      <div className='row'>
        {categoriesData?.map((data: CategoriesDataItem, index: number) => (
          <Categories
            key={index}
            icon={data.icon}
            title={data.title}
            backgroundColor={data.backgroundColor}
          />
        ))}
      </div>
      <div className='d-flex justify-content-between my-1'>
        <h6 className='my-2'>Trending Experiences </h6>
        <div className='d-flex mt-2'>
          <p className='seeAll'>See All</p>
          <img src={arrow} className='arrow-icon mt-1' alt='arrow' />
        </div>
      </div>
    </>
  )
}