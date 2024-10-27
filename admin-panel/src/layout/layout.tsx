import { Outlet } from "react-router-dom"


export const Layout = () => {
    // ---- jsx return ----
    return <div>
        SIDEBAR
        <div>
            HEADER
            <main>
                <Outlet />
            </main>
            FOOTER
        </div>
    </div>
}