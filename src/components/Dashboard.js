
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LogoutButton from './Logout';

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-end py-4 pr-4">
        <LogoutButton />
      </div>
      <div className="text-center text-xl font-bold">Dashboard</div>
      <NavLink to="/dashboard/product">
        <div className="p-5">Products</div>
      </NavLink>
      <Outlet />
    </>
  );
};

export default Dashboard;
