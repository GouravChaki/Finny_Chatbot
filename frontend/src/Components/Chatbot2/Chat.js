import React from "react";
import './Chat.css'
import { useState } from 'react';

export default function Chat() {

  const [button1, setShowComponent1] = useState(false);
  const handleButton1Click = () => {
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
  };

  const [button2, setShowComponent2] = useState(false);
  const handleButton2Click = () => {
    setShowComponent1(false);
    setShowComponent2(true);
    setShowComponent3(false);
    setShowComponent4(false);
  };

  const [button3, setShowComponent3] = useState(false);
  const handleButton3Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(true);
    setShowComponent4(false);
  };

  const [button4, setShowComponent4] = useState(false);
  const handleButton4Click = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
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

        {button1 && (button2 != true && button3 != true && button4 != true) &&

          <div className="container w-50">
            <div className="d-flex flex-column flex-md-row justify-content-end w-70 mt-2">
              <form>
                <input type="number" className="form-control mt-2" id="budget" placeholder='Enter your budget' />
              </form>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-start w-100 mt-2">
              <p className="output-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>


          //put the output here
        }

        {button2 && (button1 != true && button3 != true && button4 != true) &&
          <div className="container w-50">
            <div className="d-flex flex-column flex-md-row justify-content-end w-70 mt-2">
              <form>
                <input type="text" className="form-control mt-2" id="nasdaq1" placeholder='Enter a NASDAQ Code' />
                <input type="text" className="form-control mt-2" id="nasdaq2" placeholder='Enter a NASDAQ Code' />
                <input type="number" className="form-control mt-2" id="days" placeholder='Enter number of days' />

              </form>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-start w-100 mt-2">
              <p className="output-text">The Output</p>
            </div>
          </div>

        }

        {button3 && (button1 != true && button2 != true && button4 != true) &&
          <div className="container w-50">
            <div className="d-flex flex-column flex-md-row justify-content-end w-70 mt-2">
              <form>

                <input type="text" className="form-control mt-2" id="nasdaq1" placeholder='Enter a NASDAQ Code' />
                <input type="number" className="form-control mt-2" id="days" placeholder='Enter number of days' />

              </form>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-start w-100 mt-2">
              <p className="output-text">The Output</p>
            </div>
          </div>


          //put the output here
        }

        {button4 && (button1 != true && button2 != true && button3 != true) &&
          <div className="container w-50">
            <div className="d-flex flex-column flex-md-row justify-content-end w-100 mt-2">
              <form>
                <input type="text" className="form-control mt-2" id="nasdaq1" placeholder='Enter a NASDAQ Code' />
                <input type="date" className="form-control mt-2" id="date" placeholder='Enter number a date' />          </form>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-start w-100 mt-2">
              <p className="output-text">The Output</p>
            </div>
          </div>
        }

      </div>
    </div>


  );
}
