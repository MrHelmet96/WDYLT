import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <div>
            <ul>
              <li><a href="">Inicio</a></li>
              <li><a href="">Acerca de</a></li>
              <li><a href="">Portfolio</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
            <form action="">
              <input type="search" placeholder='Buscar...'/>
            </form>
            <div className='socials'>
              <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
