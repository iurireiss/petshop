import { Header } from "../header";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <Header />
            <div className="w-full flex items-center justify-center">
                <Outlet />
            </div>

        </>
    )
}