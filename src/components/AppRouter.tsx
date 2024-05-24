import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, TRoute} from "../Routes";
import Home from "../pages/Home";

const AppRouter: FC = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, element}:TRoute) =>
               <Route key={path} path={path} element={element}/>
            )}
            <Route path='*' element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;