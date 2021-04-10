import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './divisions.css'

function divisions () {
    return(
        <div className="wrapper row2">
        <section id="latest" className="hoc container clear"> 
          <div class="sectiontitle">
            <h6 class="heading">Some features of our site.</h6>
            <br />
            <p>You can go to laboratory section for your corona test. Can register for vaccination and consult doctor in case of any emergency.</p>
          </div>
          <ul class="nospace group">
            <li class="one_third first">
              <article>
                <figure><a href="#"><img src="https://images.theconversation.com/files/347086/original/file-20200713-18-nt7yxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" alt="" /></a>
                  
                </figure>
                <div class="excerpt">
                  <h3 class="heading">Laboratory</h3>
                  
                  <p>Machine Learning Models predicting probability of Covid 19. Check yours now. [<a href="#">&hellip;</a>]</p>
                  <footer><Link class="btn" to='/lab'>Go to Lab</Link></footer>
                </div>
              </article>
            </li>
            <li class="one_third">
              <article>
                <figure><a href="#"><img src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2021/03/03093821/coronavirus-vaccines-darknet-featured.jpg" alt="" /></a>
                  
                </figure>
                <div class="excerpt">
                  <h3 class="heading">Vaccination</h3>
                  <p>A platform for the citizens of India to Register for COVID-19 vaccination and schedule their vaccination slots at the nearest vaccination centers. [<a href="#">&hellip;</a>]</p>
                  <footer><a class="btn" href="https://www.cowin.gov.in/home" target="blank">Register Here</a></footer>
                </div>
              </article>
            </li>
            <li class="one_third">
              <article>
                <figure><a href="#"><img src="https://i.pinimg.com/originals/2b/19/ae/2b19ae15ff666efd06ec114ebe59988f.png" alt="" /></a>
                  
                </figure>
                <div class="excerpt">
                  <h3 class="heading">Consultant</h3>
                  <p>Realtime video consultant for regular checkups and medical advices related to Covid 19. [<a href="#">&hellip;</a>]</p>
                  <footer><Link class="btn" to='/consultant'>Doctor at doorstep</Link></footer>
                </div>
              </article>
            </li>
          </ul>
        </section>
      </div>
    )
}

export default divisions