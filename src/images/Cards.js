import React from 'react';
import air from './30.webp';
import './Cards.css';
import pad from './31.webp';
import dad from './32.webp';
import play from './41.png';
import box from './44.png';
import nin from './45.jpg';
import gab from './46.avif';
import pawer from './47.png';
import ch from './48.jpg';
import ho from './54.jpg';
import he from './53.jpg';
export default function Cards() {
    return (
        <div>
            <h2>Devaic and hedphones</h2>
            <br></br>
            <div className="ca">
                <div class="container">
                    <img width={400} src={air} alt="Logo" />
                    <div class="overlay">
                        <div class="text">
                            {' '}
                            <button class="btn-53">
                                <div class="original">see item</div>
                                <div class="letters">
                                    <span>o</span>
                                    <span>p</span>
                                    <span>e</span>
                                    <span>n</span>
                                </div>
                            </button>
                            Perfecxa Alternating Pressure<br></br> Pump and
                            Mattress is<br></br> designed to provide relief{' '}
                            <br></br>from bed points which gives<br></br>much
                            relaxation. The adjustable<br></br> pressure knob
                        </div>
                    </div>
                </div>

                <div class="container">
                    <img src={dad} alt="Logo" />
                    <div class="overlay">
                        <div class="text">
                            {' '}
                            <div class="text">
                                {' '}
                                <button class="btn-53">
                                    <div class="original">see item</div>
                                    <div class="letters">
                                        <span>o</span>
                                        <span>p</span>
                                        <span>e</span>
                                        <span>n</span>
                                    </div>
                                </button>
                                Perfecxa Alternating Pressure<br></br> Pump and
                                Mattress is<br></br> designed to provide relief{' '}
                                <br></br>from bed points which gives<br></br>
                                much relaxation. The adjustable<br></br>{' '}
                                pressure knob
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <img src={pad} alt="Logo" />
                    <div class="overlay">
                        <div class="text">
                            {' '}
                            <div class="text">
                                {' '}
                                <button class="btn-53">
                                    <div class="original">see item</div>
                                    <div class="letters">
                                        <span>o</span>
                                        <span>p</span>
                                        <span>e</span>
                                        <span>n</span>
                                    </div>
                                </button>
                                Perfecxa Alternating Pressure<br></br> Pump and
                                Mattress is<br></br> designed to provide relief{' '}
                                <br></br>from bed points which gives<br></br>
                                much relaxation. The adjustable<br></br>{' '}
                                pressure knob
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <br></br>
            <br></br>
            <h2>Game konsols</h2>
            <br></br>
            <div className="l">
                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            <img width={90} src={play} alt="Logo" />
                            <br></br>
                        </div>
                        <div class="content">
                            <p class="heading">play station</p>
                            <p>
                                Website © 2024 Sony Interactive Entertainment.
                                All content, game titles, trade names and/or
                                trade dress, trademarks, artwork and associated
                                imagery
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            <img width={130} src={box} alt="Logo" />
                        </div>
                        <div class="content">
                            <p class="heading">x-box series</p>
                            <p>
                                Games featuring the Optimized for Xbox Series
                                X|S icon will showcase unparalleled load-times,
                                heightened visuals, and steadier framerates at
                                up to 120FPS.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            <img width={130} src={nin} alt="Logo" />{' '}
                        </div>
                        <div class="content">
                            <p class="heading">Nintendo series</p>
                            <p>
                                after initial term at the then-current price
                                unless canceled. Not available in all countries.
                                Internet access required for online features.
                                Terms apply. nintendo.com/switch-online
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <h2>accessoriess</h2>
            <br></br>
            <div className="l">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p>
                                All kinds of cables and chargers with the best
                                price and guarantee of the best companies with
                                excellent quality cables and chargers with the
                                best
                            </p>
                        </div>
                        <div class="flip-card-back">
                            <img src={ch} alt="Logo" />
                            <button className="bts"> see chargers...</button>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p>
                                All kinds of power banks with of small and large
                                markets and all kinds of charging cables for
                                charging with valid guarantees.
                            </p>
                        </div>
                        <div class="flip-card-back">
                            <img src={pawer} alt="Logo" />

                            <button className="bts"> see power ponk...</button>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p>
                                All kinds of power banks with valid guarantees
                                with the best price and quality of small and
                                large markets and all kinds of charging cables
                                for charging with valid guarantees.
                            </p>
                        </div>
                        <div class="flip-card-back">
                            <img src={ho} alt="Logo" />

                            <button className="bts"> see power ponk...</button>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p>
                                {' '}
                                and quality of small and large markets and all
                                kinds of charging cables for charging with valid
                                guarantees.
                            </p>
                        </div>
                        <div class="flip-card-back">
                            <img src={he} alt="Logo" />

                            <button className="bts"> see power ponk...</button>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p>
                                All kinds of mobile phone frames at the best
                                price and with the best quality available in the
                                marketAnd all kinds of frames and glasses
                                available in the market with the best{' '}
                            </p>
                        </div>
                        <div class="flip-card-back">
                            <img src={gab} alt="Logo" />
                            <button className="bts"> see covers...</button>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="containerse">
                <div className="r">
                    <div class="bgblue">
                        <div class="carde">
                            <h2>Contact us</h2>

                            <p className="y">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Autem molestiae explicabo
                                placeat atque praesentium, dolorum corporis amet
                                non, aliquid quasi voluptate delectus nulla
                                exercitationem eius eum, ducimus architecto
                                dolores suscipit!We have created a fictional
                                band website. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.
                            </p>

                            <hr></hr>
                            <div className="c">
                                <br></br>
                                <div className="pp">
                                    {' '}
                                    <form class="form">
                                        <p class="title">sing in </p>
                                        <p class="message">
                                            Signup now and get full access to
                                            our app.{' '}
                                        </p>
                                        <div class="flex">
                                            <label>
                                                <input
                                                    class="input"
                                                    type="text"
                                                    placeholder=""
                                                    required=""
                                                />
                                                <span>Firstname</span>
                                            </label>

                                            <label>
                                                <input
                                                    class="input"
                                                    type="text"
                                                    placeholder=""
                                                    required=""
                                                />
                                                <span>Lastname</span>
                                            </label>
                                        </div>

                                        <label>
                                            <input
                                                class="input"
                                                type="email"
                                                placeholder=""
                                                required=""
                                            />
                                            <span>Email</span>
                                        </label>
                                        <label>
                                            <input
                                                class="input"
                                                type="password"
                                                placeholder=""
                                                required=""
                                            />
                                            <span>Password</span>
                                        </label>

                                        <label>
                                            <input
                                                class="input"
                                                type="password"
                                                placeholder=""
                                                required=""
                                            />
                                            <span>Confirm password</span>
                                        </label>
                                        <button class="submit">Submit</button>

                                        <p class="signin">
                                            Already have an acount ?{' '}
                                            <a href="#">Signin</a>{' '}
                                        </p>
                                        <div class="info">
                                            <div class="info__icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    viewBox="0 0 24 24"
                                                    height="24"
                                                    fill="none"
                                                >
                                                    <path
                                                        fill="#393a37"
                                                        d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div class="info__title">
                                                You are not sining yet
                                            </div>
                                            <div class="info__close">
                                                <svg
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    width="20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                                                        fill="#393a37"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="cardl">
                                        <div class="cardl-image">
                                            <h1>kia store</h1>
                                        </div>
                                        <div class="category">
                                            {' '}
                                            Contact us with company{' '}
                                        </div>
                                        <div class="heading">
                                            {' '}
                                            dolores suscipit!We have created a
                                            fictional band website. Lorem ipsum
                                            website. Lorem ipsum website. Lorem
                                            ipsum website. Lorem ipsum fictional
                                            band website. Lorem ipsum website.
                                            <div class="author">
                                                {' '}
                                                <span class="name">
                                                    call with me : 09941159327
                                                    <br></br>
                                                </span>
                                                my email: kiarad.zang@gmail.com
                                            </div>
                                        </div>

                                        <br></br>
                                        <div class="cardx">
                                            <h2 class="cardx-title">
                                                kia store;
                                            </h2>
                                            <p class="small-desc">
                                                come to kia store center...
                                                dolores suscipit!We have created
                                                a fictional band website....
                                            </p>
                                            <div class="go-corner">
                                                <div class="go-arrow">→</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
