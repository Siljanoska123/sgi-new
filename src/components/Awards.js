import React from "react";

import '../css-components/awards.css'
import card1 from '../images/award1.jpg'
import card2 from '../images/award2.jpg'
import card3 from '../images/award3.jpg'


export const Awards = (props) => {


  return (

    <div id="awards" className='text-center'>
      <article class="card">
        <header class="card__thumb">
          <a href="#"><img src={card1} /></a>
        </header>
        <div class="card__body">
          <div class="card__category"><a href="#">card__category</a></div>
          <h2 class="card__title"><a href="#">{props.data ? props.data.title_card1 : 'Loading'}</a></h2>
          <div class="card__subtitle">more </div>
          <p class="card__description">
            {props.data
              ? props.data.Card.map((d, i) => (
                <li key={`${d}-${i}`}>{d}</li>
              ))
              : "loading"}</p>
        </div>
        <footer class="card__footer">
          <span class="icon ion-clock"></span> 10 mins ago
          <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
        </footer>
      </article>




      <article class="card">
        <header class="card__thumb">
          <a href="#"><img src={card2} /></a>
        </header>

        <div class="card__body">
          <div class="card__category"><a href="#">card__category</a></div>
          <h2 class="card__title"><a href="#">{props.data ? props.data.title_card2 : 'Loading'}</a></h2>
          <div class="card__subtitle">more</div>
          <p class="card__description">
            {props.data
              ? props.data.Card2.map((d, i) => (
                <li key={`${d}-${i}`}>{d}</li>
              ))
              : "loading"}
          </p>
        </div>
        {/* <footer class="card__footer">
    <span class="icon ion-clock"></span> 10 mins ago
    <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
  </footer> */}
      </article>

      <article class="card">
        <header class="card__thumb">
          <a href="#"><img src={card3} /></a>
        </header>

        <div class="card__body">
          <div class="card__category"><a href="#">card__category</a></div>
          <h2 class="card__title"><a href="#">{props.data ? props.data.title_card3 : 'Loading'}</a></h2>
          <div class="card__subtitle">more</div>
          <p class="card__description">
            {props.data
              ? props.data.Card3.map((d, i) => (
                <li key={`${d}-${i}`}>{d}</li>
              ))
              : "loading"}
          </p>
        </div>

      </article>





    </div>

  )
}
