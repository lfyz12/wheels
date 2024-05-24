import {FC, ReactElement} from "react";
import {
    DISKPRODUCT,
    DISKROUTER,
    HOMEROUTER,
    LOGINROUTER,
    PROFILE,
    REGROUTER,
    WHEELSPRODUCT,
    WHEELSROUTER
} from "./utils/consts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";

export type TRoute = {
    path: string,
    element: ReactElement
}
export const publicRoutes: TRoute[] = [
    {
        path: HOMEROUTER,
        element: <Home/>
    },
    {
        path: WHEELSROUTER,
        element: <Shop/>
    },
    {
        path: DISKROUTER,
        element: <Shop/>
    },
    {
        path: REGROUTER,
        element: <Auth/>
    },
    {
        path: LOGINROUTER,
        element: <Auth/>
    },
    {
        path: DISKPRODUCT + '/:articul',
        element: <ProductPage/>
    },
    {
        path: WHEELSPRODUCT + '/:articul',
        element: <ProductPage/>
    },
    {
        path: PROFILE,
        element: <Profile/>
    }
]