import './styles.scss'
import arrowUp from '../../../../../Images/DocuSign/arrowUp.png'
import link from '../../../../../Images/DocuSign/link.png'

export default function Details() {
  return (
    <div className='mx-4'>
      <div className='d-flex justify-content-between mt-4'>
        <h6>Overview</h6>
        <img src={arrowUp} className='arrowUp-icon mt-1' alt='arrow up' />
      </div>
      <p className='overview-description mt-2'>
        it is easy to electronically sign, manage and distribute all your contracts
        and documents safely, securely, anywhere, anytime- paperlessly.
      </p>
      <div className='d-flex'>
        <img src={link} className='link-icon' alt='Link' />
        <p className='link-text mx-2'>https://docusignn.io</p>
      </div>
    </div>
  )
}