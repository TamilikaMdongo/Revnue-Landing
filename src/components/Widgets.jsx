import React from 'react'
import cashflow from './assets/Widget Cashflow.png';
import breakdown from './assets/expenses.png'
import score from './assets/Widget Finance Score.png';
import transaction from './assets/Widget Transaction.png'
 

const Widgets = () => {
  return (
    <div className='widget-container'>
        <h2>Your Finances, Simplified and Under Control.</h2>
        <p>Track every transaction, understand where your money goes, and make smarter financial decisions — so you save more, stress less, and finally stay on top of your money.</p>
      <div className="widget">
    <div className="widget-item1">
        <img src={cashflow} height={200}/>
        <h4>Cashflow Tracking</h4>
        <p>Get a clear view of money coming in and going out — in real time. Instantly see where your income is flowing so you can plan ahead with confidence</p>
    </div>
    
    <div className="widget-item2">
        <img src={breakdown} height={200}/>
        <h4>Expense Tracking</h4>
        <p>Automatically track and categorize your spending. Identify patterns, cut unnecessary costs, and stay in control without manually logging every transaction.</p>
    </div>
    <div className="widget-item3">
        <img src={score} height={200}/>
        <h4>Financial Health</h4>
        <p>Understand your financial wellbeing at a glance. Simple insights show how balanced your finances are, helping you make smarter decisions</p>
    </div>
    <div className="widget-item4">
        <img src={transaction} height={200}/>
        <h4>Recent Transactions</h4>
        <p>Stay up to date with your latest activity. Quickly review recent transactions to catch errors, track spending, and stay informed without digging through statements.</p>
    </div>
    </div>
    </div>
  )
}

export default Widgets
