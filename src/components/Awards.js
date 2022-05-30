import React from "react";
import '../css-components/header.css'
import '../css-components/awards.css'


export const Awards = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
      <img src="img/awards-cover.jpg" className="video" />

        <div className='overlay'></div>
        
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>

                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
               
              </div>
            </div>
          </div>
        

      </div>

     
    </header>
  )
}
