import React from 'react';
import './Header.css';
import logo from './images/1.webp';
import a from './images/16.png';
import b from './images/23.png';
import c from './images/18.png';
import d from './images/19.png';
import e from './images/20.png';
import f from './images/21.png';
import g from './images/22.png';
import h from './images/26.png';
import i from './images/24.png';
import j from './images/25.png';

export default function Header() {
  return (
    <div>
      <nav class='navbar'>
        <div class='logo'>
          <h5>kia store</h5>
        </div>

        <ul class='nav-links'>
          <div class='menu'>
            <li>
              <a href='/'>accessories</a>
            </li>
            <div>
              <li>
                <a href='/'>Game console</a>
              </li>
            </div>

            <li class='services'>
              <a href='/'>phones</a>

              <ul class='dropdown'>
                <div className='apple'>
                  <li>
                    <a href='/'>apple</a>
                  </li>

                  <li>
                    <a href='/'>iphone 13</a>
                  </li>
                  <li>
                    <a href='/'>iphone 12</a>
                  </li>
                </div>

                <div className='apple'>
                  <li>
                    <a href='/'>Xiaomi</a>
                  </li>
                  <li>
                    <a href='/'>Xiaomi serise c</a>
                  </li>
                  <li>
                    <a href='/'>Xiaomi serise not</a>
                  </li>
                </div>
                <div className='apple'>
                  <li>
                    <a href='/'>Huawei</a>
                  </li>
                  <li>
                    <a href='/'>Huawei serise s</a>
                  </li>
                  <li>
                    <a href='/'>Huawei serise c</a>
                  </li>
                </div>
                <div className='apple'>
                  <li>
                    <a href='/'>Samsung </a>
                  </li>
                  <li>
                    <a href='/'>Samsung serise a</a>
                  </li>
                  <li>
                    <a href='/'>Samsung serise not</a>
                  </li>
                </div>

                <div className='apple'>
                  <li>
                    <a href='/'>one pluse</a>
                  </li>
                  <li>
                    <a href='/'>one pluse serise c</a>
                  </li>
                  <li>
                    <a href='/'>one pluse serise pro</a>
                  </li>
                </div>
              </ul>
            </li>

            <li>
              <a href='/'>headphone and device</a>
            </li>
            <li>
              <a href='/'>Contact us</a>
            </li>
          </div>
        </ul>
      </nav>

      <br></br>
      <img width={1346} src={logo} alt='Logo' />
      <br></br>
      <br></br>
      <div className='aks'>
        <div>
          {' '}
          <img width={55} src={a} alt='Logo' />
          <h4>kia jet</h4>
        </div>

        <div>
          <img width={55} src={b} alt='Logo' />
          <h4>kia kala</h4>
        </div>

        <div>
          <img width={55} src={c} alt='Logo' />
          <h4>kia mehr</h4>
        </div>

        <div>
          {' '}
          <img width={55} src={d} alt='Logo' />
          <h4>kif poll</h4>
        </div>

        <div>
          <img width={55} src={f} alt='Logo' />
          <h4>mobil no</h4>
        </div>

        <div>
          <img width={55} src={g} alt='Logo' />
          <h4> prezent</h4>
        </div>

        <div>
          <img width={55} src={e} alt='Logo' />
          <h4>kia lebas</h4>
        </div>

        <div>
          <img width={55} src={h} alt='Logo' />
          <h4>kia kala</h4>
        </div>

        <div>
          <img width={55} src={i} alt='Logo' />
          <h4>kia star</h4>
        </div>

        <div>
          <img width={55} src={j} alt='Logo' />
          <h4>kia house</h4>
        </div>
      </div>
      <br></br>
    </div>
  );
}
