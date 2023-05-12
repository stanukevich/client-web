import Auth from "./pages/Auth"
import Chat from "./pages/Chat"
import Register from "./pages/Register";
import {AUTH_ROUTE, PUBLIC_ROUTE, REGISTER_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: AUTH_ROUTE,
        Component: <Chat/>
    }
]

export const publicRoutes = [
    {
    path: PUBLIC_ROUTE,
    Component: <Auth/>
    },

    {
    path: REGISTER_ROUTE,
    Component: <Register/>
    }
]