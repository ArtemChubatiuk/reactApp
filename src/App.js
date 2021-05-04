import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Musing from "./components/Musing/Musing";
import {BrowserRouter ,Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile />}/>
                    <Route path='/dialogs' render={ () => <Dialogs />}/>
                    <Route path='/musing' render={ () => <Musing />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
