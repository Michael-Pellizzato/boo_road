import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Partecipants from "./pages/Partecipants"
import DefaultLayout from './layout/DefaultLayout';


function App(){
    return(
    <>
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route path="/" Component={HomePage} />
                    <Route path="partecipants" Component={Partecipants}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    </>
    )
}

export default App