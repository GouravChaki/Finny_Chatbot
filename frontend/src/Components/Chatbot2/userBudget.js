import React from "react";

function userBudget() {
  return (
    <div>
        <h1>Hello</h1>
        <div style={{fontFamily:'Inter'}}>
        <form>
            <div className="mt-5">
                <input type="number" className="form-control" id="Email" placeholder='Enter your budget'/>
            </div>
        </form>
        </div>
    </div>
  );
}

export default {userBudget}