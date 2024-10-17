import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Landing_page.css';


function Main_sec() {
  const el = useRef(null); // Create a ref for the element

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['EXTracker'],
      typeSpeed: 100,
      loop: true,
      backDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div className='main_page'>
      <div className='m_right'>
        <h1>
          Track Your <br /> Expenses Easily <br /> With <br />
          <span id='m_name' ref={el}>EXTracker</span>
        </h1>
        <div className="para">
            <p>
            Easily log your expenses, visualize spending patterns with interactive graphs, and receive personalized suggestions to manage your finances better. Take control of your money and reach your financial goals with ExpenseTrackr today!
            </p>
        </div>
      </div>
      <div className='m_left'>
        
      </div>
    </div>
  );
}

export default Main_sec;
