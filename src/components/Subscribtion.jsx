import React, { useState } from 'react'
import './Subscribtion.css'

function Subscribtion() {
    const [name,setname] =useState()
  return (
    <div className='main' > 
    
    <header className="header">
        <h1>Subscriptions</h1>
        <button className="feedback-button">Feedback</button>
    </header>

   
    <section className="summary">
        <div className="summary-box">
            <p>Total Subscriptions</p>
            <h2>0</h2>
        </div>
        <div className="summary-box">
            <p>Active - Cancelled</p>
            <h2>0 - 0</h2>
        </div>
        <div className="summary-box">
            <p>Total Active - Monthly</p>
            <h2>₹0</h2>
        </div>
        <div className="summary-box">
            <p>Total Active - Yearly</p>
            <h2>₹0</h2>
        </div>
    </section>

   
    <section className="table-section">
        <div className="filter-container">
            <input type="text"value={name}
             placeholder="Filter by name"/>
        </div>
        <table className="subscriptions-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Renewal Date</th>
                    <th>Start/Cancel Date</th>
                    <th>Notes</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="7">No data</td>
                </tr>
            </tbody>
        </table>
    </section>

    
    <button className="fab">+</button>
</div>
  )
}

export default Subscribtion