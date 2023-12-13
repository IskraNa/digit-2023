import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
    );
}
export default Layout;
