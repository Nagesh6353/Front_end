import React from 'react'
import Adminheader from '../AdminComan/Adminheader'
import AdminPageTitle from '../AdminComan/AdminPageTitle'

function Dashboard() {
  return (
    <div>
        <Adminheader />
        <AdminPageTitle name="Dashboard" title="Dashboard" />
        <h1 className='text-center text-primary mt-5'>Hello this is Dashboard page</h1>
    </div>
  )
}

export default Dashboard