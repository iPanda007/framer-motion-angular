import React from 'react'
import { Electic, TickMark } from './Electic'
import './UiElement/index.css'
const FormInplement = () => {
  return (
    <div>
         <form>
             <div className='contact-left'>
                        <h1>Contact</h1>
                        <p className="description"> let's stay in touch. <br /> For more infromation <br /> sign up </p>
             </div>
             {/* right side */}
             <div class="contact-right">
                    <div className="input-container">
                          <p className='placeholder'>Your Name</p>
                          <input type="text" name="name" autoComplete='off' class="input-name input" />
                          <Electic/>
                    </div>
                    <div className="input-container">
                          <p className='placeholder'>Your Email</p>
                          <input type="email" name="email" autoComplete='off' class="input-email input" />
                          <Electic/>
                    </div>
                    <div className="input-container">
                          <p className='placeholder'>Phone Number</p>
                          <input type="password" name="tel" autoComplete='off' class="input-number input" />
                          <Electic/>
                    </div>
                    <div className="promo-container">
                        <div className='checkbox-container'>
                             <span className='checkmark'></span>
                             <div className="checkbox-fill"></div>
                             <input type="checkbox" />
                             <TickMark/>
                        </div>
                        <label className='checkbox-label'>Send me promotions and offers.</label>
                    </div>  
                    <button>Join</button>   
             </div>
         </form>
    </div>
  )
}

export default FormInplement
