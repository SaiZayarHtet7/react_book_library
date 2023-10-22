// import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import './style.css';

export default function Layout() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div>
      <NavBar />

      {/* dynamic router changes content */}
      <SwitchTransition>
        <CSSTransition key={location.pathname} timeout={200} classNames='fade'>
          <div className="max-w-6xl mx-auto p-5 ">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

