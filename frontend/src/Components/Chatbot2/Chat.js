import React from "react";
import { useState } from 'react';

export default function Chat() {

  const [button1, setShowComponent1] = useState(false);
  const handleButton1Click = () => {
    setShowComponent1(true);
  };

  const [button2, setShowComponent2] = useState(false);
  const handleButton2Click = () => {
    setShowComponent2(true);
  };

  const [button3, setShowComponent3] = useState(false);
  const handleButton3Click = () => {
    setShowComponent3(true);
  };

  const [button4, setShowComponent4] = useState(false);
  const handleButton4Click = () => {
    setShowComponent4(true);
  };

  return (
    <div>
      <h3 className="container mt-5">Hi I'm Finny</h3>
      <div className="d-flex flex-column align-items-center">
        <button className="btn btn-primary w-50 my-2" onClick={handleButton1Click}>Do you want me to recommend stocks based on your budget?</button>
        <button className="btn btn-primary w-50 my-2" onClick={handleButton2Click}>I can also compare two company's stocks!</button>
        <button className="btn btn-primary w-50 my-2" onClick={handleButton3Click}>Give me a company name and I'll predict their stock price for you!</button>
        <button className="btn btn-primary w-50 my-2" onClick={handleButton4Click}>You can also use me to see a company's historical data...</button>
        
        {button1 &&
          <form>
            <div className="mt-2">
              <input type="number" className="form-control" id="budget" placeholder='Enter your budget' />
            </div>
          </form>
          //put the output here
        }

          {button2 &&
          <form>
            <div className="mt-2 flex-column flex-md-row">
              <input type="text" className="form-control" id="nasdaq1" placeholder='Enter a NASDAQ Code' />
              <input type="text" className="form-control" id="nasdaq2" placeholder='Enter a NASDAQ Code' />
              <input type="number" className="form-control" id="days" placeholder='Enter number of days' />
            </div>
          </form>
          //put the output here
        }

          {button3 &&
          <form>
            <div className="mt-2 flex-column flex-md-row">
              <input type="text" className="form-control" id="nasdaq1" placeholder='Enter a NASDAQ Code' />
              <input type="number" className="form-control" id="days" placeholder='Enter number of days' />
            </div>
          </form>
          //put the output here
        }

          {button4 &&
          <form>
            <div className="mt-2 flex-column flex-md-row">
              <input type="text" className="form-control" id="nasdaq1" placeholder='Enter a NASDAQ Code' />
              <input type="date" className="form-control" id="date" placeholder='Enter number a date' />
            </div>
          </form>
          //put the output here
        }

      </div>
    </div>


  );
}
