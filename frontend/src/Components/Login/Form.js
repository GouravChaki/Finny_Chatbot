import React from 'react'
export default function InputForm() {


    return (
        <form>
            <div class="mb-3">
                <label for="Email" class="form-label">Enter Email</label>
                <input type="email" class="form-control" id="Email" placeholder='Email'/>
            </div>
            <div class="mb-3">
                <label for="Pass" class="form-label">Enter Password</label>
                <input type="password" class="form-control" id="Pass" placeholder='Password'/>
            </div>
            <button class="btn btn-primary" type="submit">Login</button>
        </form>
    )
}