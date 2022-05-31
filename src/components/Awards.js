import React from "react";
import image from '../images/awcover.jpg'
import '../css-components/awards.css'
import card1 from '../images/aaaa.jpg'
import card2 from '../images/award2.jpg'
import card3 from '../images/award3.jpg'

export const Awards = (props) => {
  return (
    <div>
      <header id="header">
        <div className='awardCover'>
          <img src={image} className="awardImage" />


          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 awardCover-text'>
                <h1>

                  {props.data ? props.data.title : 'Loading'}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              {" "}
              <div className="card">
                <div className="image">
                  <img src={card2} className="img-award" alt="" />{" "}
                </div>
                <div className="card-details">
                  <div class="card-text">
                    <h3 className="card-topic">
                      SGI Customer Excellence Award
                    </h3>
                    <div className="card-opis">
                      <ul >
                        {props.data
                          ? props.data.Card.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-xs-12 col-md-4">
              {" "}
              <div className="card">
                <div className="image">
                  <img src={card1} className="img-award" alt="" />{" "}
                </div>
                <div className="card-details">
                  <div class="card-text">
                    <h3 className="card-topic">
                      SGI Reputation and Brand Management Award
                    </h3>
                    <div className="card-opis">
                      <ul >
                        {props.data
                          ? props.data.Card2.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-xs-12 col-md-4">
              {" "}
              <div className="card">
                <div className="image">
                  <img src={card1} className="img-award" alt="" />{" "}
                </div>
                <div className="card-details">
                  <div class="card-text">
                    <h3 className="card-topic">
                      SGI Reputation and Brand Management Award
                    </h3>
                    <div className="card-opis">
                      <ul >
                        {props.data
                          ? props.data.Card2.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>



    </div>
  )
}
