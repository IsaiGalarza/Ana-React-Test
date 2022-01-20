import { useState } from 'react'
import './styles.scss'
import HeaderBar from '../../../../Components/HeaderBar/HeaderBar'
import Docu_sign from '../../../../Images/Docu_sign.png'
import share from '../../../../Images/DocuSign/share.png'
import btnIcon from '../../../../Images/DocuSign/send.png'
import users from '../../../../Images/DocuSign/users.png'
import Details from './Details/Details'
import Activities from './Activities/Activities'

export default function DocuSign() {
  const [activeTab, setActiveTab] = useState("details");
  return (
    <>
      <HeaderBar />
      <div className='colorBar'>
        <img src={Docu_sign} className='docuSign' alt='Docu Sign' />
      </div>
      <div className='d-flex justify-content-end'>
        <div className='d-flex mt-3 mx-3'>
          <img src={share} className='share-icon' alt='Share' />
          <p className='share-text'>Share</p>
        </div>
      </div>
      <div className='mt-3 mx-3'>
        <h6>Docu Sign</h6>
        <p className='docusign-description'>sign smart contracts seamlessly</p>
        <p className='docusign-utilities'>Utilities</p>
        <div className='d-flex mb-3'>
          <button className='btn btn-dark open-btn d-flex justify-content-between'>
            Open
            <img src={btnIcon} alt='Open' />
          </button>
          <div className='d-flex align-items-center mx-3'>
            <img src={users} className='users-icon' alt='users' />
            <p className='docusign-description mt-2'>24,000+ users</p>
          </div>
        </div>
      </div>
      {/* Tab section */}
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col-md-6 text-center tab-item'
            onClick={() => { setActiveTab("details") }}
            style={activeTab === "details" ? { borderBottom: '2px solid #000' } : { borderBottom: "2px solid #fff" }}
          >
            <h6 className='tab-title'>Details</h6>
          </div>
          <div
            className='col-md-6 text-center tab-item'
            onClick={() => { setActiveTab("activities") }}
            style={activeTab === "activities" ? { borderBottom: '2px solid #000' } : { borderBottom: "2px solid #fff" }}
          >
            <h6 className='tab-title'>Activities</h6>
          </div>
        </div>
      </div>
      {activeTab === "activities" ? <Activities /> : <Details />}
    </>
  )
}