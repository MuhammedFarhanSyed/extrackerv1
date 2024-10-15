import React from "react";
function Subscription() {
    return(
        <main class="main-content">
        
        <header class="header">
            <h1>Subscriptions</h1>
            <button class="feedback-button">Feedback</button>
        </header>

        
        <section class="summary">
            <div class="summary-box">
                <p>Total Subscriptions</p>
                <h2>0</h2>
            </div>
            <div class="summary-box">
                <p>Active - Cancelled</p>
                <h2>0 - 0</h2>
            </div>
            <div class="summary-box">
                <p>Total Active - Monthly</p>
                <h2>₹0</h2>
            </div>
            <div class="summary-box">
                <p>Total Active - Yearly</p>
                <h2>₹0</h2>
            </div>
        </section>

      
        <section className="table-section">
            <div class="filter-container">
                <input type="text" placeholder="Filter by name">
            </div>
            <table class="subscriptions-table">
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
                        <td colspan="7">No data</td>
                    </tr>
                </tbody>
            </table>
        </section>

        
        <button class="fab">+</button>
    </main>

    )
}
export default Subscription;