import React from 'react';

const Drawer = ({ children, sidebarItems, isOpen, toggleDrawer }) => {
  return (
    <div className={`drawer drawer-end fixed z-10 ${isOpen ? 'lg:drawer-open' : ''} right-0 top-0 h-full`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Injected main content */}
        {children}
        <button className="btn btn-primary drawer-button lg:hidden" onClick={toggleDrawer}>Toggle drawer</button>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" onClick={toggleDrawer}></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content">
          {/* Sidebar content dynamically passed as props */}
          {sidebarItems.map((item, index) => (
            <li key={index}><a>{item}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
