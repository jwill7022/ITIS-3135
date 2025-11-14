import React from 'react';
import Sidebar from '../common/Sidebar';
import { Outlet } from 'react-router';

function AppLayout() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
