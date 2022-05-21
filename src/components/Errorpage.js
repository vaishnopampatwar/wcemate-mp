import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div>
            <div className="errpage" id="notfound">
                <div className="notfound">
                    <h3>404</h3>
                    <div className="notfound-404">
                        {/* <h1>404</h1> */}
                        <h2>We are sorry , Page not found</h2>
                        <p>The Page you are looking for might have been removed or Unavailable </p>
                        <NavLink to="/"><button type="submit" className="btn btn-primary">Back to Home</button></NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Errorpage