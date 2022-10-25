import { Header } from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
           <Header />
           <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
           </Suspense>
            
        </div>
    )
}