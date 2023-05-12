import {Routes, Route} from "react-router-dom"
import {authRoutes, publicRoutes} from "../routes"
import Auth from "../pages/Auth"
import Chat from "../pages/Chat";
import { useContext } from "react";
import { Context } from "../App";
import {observer} from "mobx-react-lite"

export const AppRouter = observer(() => {
    const {user} = useContext(Context)

    if(user.isAuth)
    return (
        <Routes>
            {authRoutes.map(({path, Component}) =>
                <Route key={path} exact path={path} element={Component}/>
            )}
            
            <Route exact path='*' element={<Chat />}/>
        </Routes>
    );
    else
    return (
        <Routes>     
            {publicRoutes.map(({path, Component}) =>
                <Route key={path}  exact path={path} element={Component}/>
            )}

            <Route exact path='*' element={<Auth />}/>
        </Routes>
    );
})