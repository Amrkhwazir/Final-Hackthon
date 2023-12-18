import React from 'react'
import Menu from '../../components/menu/Menu'
import List from '../../components/list/List'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <Menu />
      <List />
    </div>
  )
}

export default Dashboard