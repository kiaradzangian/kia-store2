import React from 'react';
import './images.css';
import logo from './images/10.webp';
import ligo from './images/11.webp';
export default function imags() {
    return (
        <div>
            <h1 className="company">the company</h1>

            <a>
                {' '}
                <p className="love">we love sell</p>
            </a>
            <h5 className="texw">
                We have created a fictional band website. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                <br></br>
                <br></br> <hr></hr>
                <br></br>
                <br></br>
                <a>
                    {' '}
                    <h2>high level phone</h2>
                </a>
            </h5>
            <div className="cards">
                <div class="card">
                    <img width={170} src={logo} alt="Logo" />
                    <div class="container">
                        <h4>
                            <b>iphone 13 promax</b>
                        </h4>
                        <p>phone 13 pro max ram 8 space 512 gigabayt</p>
                        <button class="btn-53">
                            <div class="original">see item</div>
                            <div class="letters">
                                <span>o</span>
                                <span>p</span>
                                <span>e</span>
                                <span>n</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img width={170} src={ligo} alt="Logo" />
                    <div class="container">
                        <h4>
                            <b>iphone 13 promax</b>
                        </h4>
                        <p>phone 13 pro max ram 8 space 512 gigabayt</p>
                        <button class="btn-53">
                            <div class="original">see item</div>
                            <div class="letters">
                                <span>o</span>
                                <span>p</span>
                                <span>e</span>
                                <span>n</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <br></br>
        </div>
    );
}
