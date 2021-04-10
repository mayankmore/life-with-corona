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
                  
                  <p>Vestibulum consequat praesent bibendum vehicula mi sed fermentum erat sit amet imperdiet dictum enim lectus [<a href="#">&hellip;</a>]</p>
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
                  <p>Vel elit integer in orci vitae lacus ultricies mattis suspendisse congue sapien vel massa posuere lacinia [<a href="#">&hellip;</a>]</p>
                  <footer><Link class="btn" to='/vaccination'>Register Here</Link></footer>
                </div>
              </article>
            </li>
            <li class="one_third">
              <article>
                <figure><a href="#"><img src="https://i.pinimg.com/originals/2b/19/ae/2b19ae15ff666efd06ec114ebe59988f.png" alt="" /></a>
                  
                </figure>
                <div class="excerpt">
                  <h3 class="heading">Consultant</h3>
                  <p>Fringilla tincidunt proin velit aliquam erat volutpat etiam elementum eros ut ante fusce a lacus ac neque [<a href="#">&hellip;</a>]</p>
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