import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Musing from "./components/Musing/Musing";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redax/state";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile profile={props.state.profile}
                                                              updateNewPostText={props.updateNewPostText}
                                                              addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/musing' render={() => <Musing/>}/>
            </div>
        </div>
    )
}

export default App;
