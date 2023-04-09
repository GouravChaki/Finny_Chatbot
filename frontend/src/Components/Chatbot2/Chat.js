import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useState, useContext } from "react";
import Context from "../Context_api/Context";
import picture from "./wallpaperbetter.jpg";
export default function Chat() {
  const a = useContext(Context);
  const [state,setState]=useState('')
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

  const change1 = async () => {
    var message=''
    let obj = {
      price: document.getElementById("budget").value,
    };
    console.log(obj);
    const response=await a.change1(obj);
    console.log(response)
    message='Index:'+' '
    response.c_names.Index.map((items)=>{
    message=message+ ' '+items
    console.log(message)
    })
    console.log(message)
    message+='\nLast Sale:'+' '
    response.c_names.Last_Sale.map((items)=>{
      console.log(message)
      message=message+ ' '+items
      console.log(message)
      })
      message+='\nName:'+' '
      response.c_names.Name.map((items)=>{
        message=message+ ' '+items
        console.log(message)
        })
        message+='\nSymbol:'+' '
        response.c_names.Symbol.map((items)=>{
          message=message+ ' '+items
          console.log(message)
          })
          message+='\nPrice_5 Days:'+' '
          response.c_names.price_5days.map((items)=>{
            message=message+ ' '+items
            console.log(message)
            })
            message+='\nPrice_7 Days:'+' '
            response.c_names.price_7days.map((items)=>{
              message=message+ ' '+items
              console.log(message)
              })
              message+='\nPrice_10 Days:'+' '
              response.c_names.price_10days.map((items)=>{
                message=message+ ' '+items
                console.log(message)
                })
                setState(message)
                console.log(message)
        
  };
  const change2 = () => {
    let obj = {
      nasdaq: {
        c_1: document.getElementById("nasdaq1").value,
        c_2: document.getElementById("nasdaq2").value,
      },
      days_after: document.getElementById("days").value,
    };
    a.change2(obj);
  };
  const change3 = () => {
    let obj = {
      nasdaq: document.getElementById("nasdaq31").value,
      p_days_after: document.getElementById("3days").value,
    };
    console.log(obj);
    a.change3(obj);
  };
  const change4 = () => {
    let obj = {
      nasdaq: document.getElementById("nasdaq_4").value,
      time_duration: document.getElementById("date").value,
    };
    console.log(obj);
    a.change4(obj);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${picture})`,
          height: "100vh",
          width: "210vh",
        }}
      >
        {!(a.token) &&
          <div
          className={`alert sticky-top alert-danger alert-dismissible fade show `}
          role="alert"
          style={{ width: "100%", zIndex: 1 }}
        >
          <strong>You have to Login First</strong>
        </div>}
        <h1 className="mx-5" style={{ color: "#FFFFF7" }}>
          Finny Here
        </h1>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-primary w-50 my-2"
            onClick={handleButton1Click}
          >
            Do you want me to recommend stocks based on your budget?
          </button>
          <button
            className="btn btn-primary w-50 my-2"
            onClick={handleButton2Click}
          >
            I can also compare two company's stocks!
          </button>
          <button
            className="btn btn-primary w-50 my-2"
            onClick={handleButton3Click}
          >
            Give me a company name and I'll predict their stock price for you!
          </button>
          <button
            className="btn btn-primary w-50 my-2"
            onClick={handleButton4Click}
          >
            You can also use me to see a company's historical data...
          </button>
          {/* FEATURE-1 */}

          {button1 && button2 != true && button3 != true && button4 != true && (
            <div className="container w-50 d-flex">
              <div className="w-100 mt-3" style={{ marginRight: "3%" }}>
                <p className="output-text" 
                style={{ whiteSpace: 'pre-wrap' }}
                >
                  {<Typewriter
                    onInit={(typewriter) => {
                      typewriter

                        .typeString("Finny is working.......")
                        .pauseFor(1000)
                        .deleteAll()
                        .start()
                        .typeString("Wohooo here's my prediction !!!")
                    }}
                  />}
                  {state}
                </p>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-end w-70 mt-2">
                <div>
                  <input
                    type="number"
                    className="form-control mt-2"
                    id="budget"
                    placeholder="Enter Price"
                  />
                </div>
                <div>
                  <button type="button" className="btn btn-primary mt-2 mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-send"
                      viewBox="0 0 16 16"
                      onClick={change1}
                    >
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* FEATURE-2 */}
          {button2 && button1 != true && button3 != true && button4 != true && (
            <div className="container w-50 d-flex">
              <div className="mt-3" style={{ marginRight: "3%", width: "70%" }}>
                <p className="output-text">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter

                      .typeString("Finny is working.......")
                      .pauseFor(1000)
                      .deleteAll()
                      .start()
                      .typeString("Wohooo here's my prediction !!!")
                    }}
                  />
                </p>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-end w-70 mt-2">
                <div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="nasdaq1"
                    placeholder="Enter a NASDAQ Code"
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="nasdaq2"
                    placeholder="Enter a NASDAQ Code"
                  />
                  <div className="d-flex">
                    <input
                      type="number"
                      className="form-control mt-2"
                      id="days"
                      placeholder="No. of days"
                    />
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary mt-2 mx-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-send"
                          viewBox="0 0 16 16"
                          onClick={change2}
                        >
                          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {button3 && button1 != true && button2 != true && button4 != true && (
            <div className="container w-50 d-flex">
              <div className="mt-3" style={{ marginRight: "3%", width: "70%" }}>
                <p className="output-text">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter

                      .typeString("Finny is working.......")
                      .pauseFor(1000)
                      .deleteAll()
                      .start()
                      .typeString("Wohooo here's my prediction !!!")
                    }}
                  />
                </p>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-end w-70 mt-2">
                <div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="nasdaq31"
                    placeholder="Enter a NASDAQ Code"
                  />
                  <div className="d-flex">
                    <input
                      type="number"
                      className="form-control mt-2"
                      id="3days"
                      placeholder="No. of days"
                    />
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary mt-2 mx-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-send"
                          viewBox="0 0 16 16"
                          onClick={change3}
                        >
                          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {button4 && button1 != true && button2 != true && button3 != true && (
            <div className="container w-50 d-flex">
              <div className="mt-3" style={{ marginRight: "3%", width: "70%" }}>
                <p className="output-text">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter

                      .typeString("Finny is working.......")
                      .pauseFor(1000)
                      .deleteAll()
                      .start()
                      .typeString("Wohooo here's my prediction !!!")
                    }}
                  />
                </p>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-end w-70 mt-2">
                <div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="nasdaq_4"
                    placeholder="Enter a NASDAQ Code"
                  />
                  <div className="d-flex">
                    <input
                      type="date"
                      className="form-control mt-2"
                      id="date"
                    />
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary mt-2 mx-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-send"
                          viewBox="0 0 16 16"
                          onClick={change4}
                        >
                          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          className="btn btn-primary w-70 mt-5"
          style={{ marginLeft: "30vh" }}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Link>
        </button>
      </div>
    </>
  );
}
