import React from 'react';
import './mid.css';

import logoa from './images/12.webp';
import logob from './images/13.webp';

export default function Mid() {
  return (
    <div>
      <article>
        <div>
          <h1 className='center'>mid range phone</h1>
          <hr></hr>
          <br></br>
          <br></br>

          <div className='flex justify-between'>
            {' '}
            <div class='w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
              <img src={logoa} alt='Logo' />
              <div class='p-4'>
                <h2 class='text-xl  font-semibold'>a15 ram4 128 gigabayt</h2>
                <p class='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet
                  tellus ornare tincidunt.
                </p>
                <div class='flex justify-between items-center mt-4'>
                  <button class='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400'>
                    see item
                  </button>
                </div>
              </div>
            </div>
            <div class='w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
              <img src={logob} alt='Logo' />
              <div class='p-4'>
                <h2 class='text-xl  font-semibold'>s21 fe ram 8 256 gigabayt</h2>
                <p class='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet
                  tellus ornare tincidunt.
                </p>
                <div class='flex justify-between items-center mt-4'>
                  <button class='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400'>
                    see item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
      </article>
    </div>
  );
}
