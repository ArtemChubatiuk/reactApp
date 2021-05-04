import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, likes: 15, post: 'сегодня все понял'},
    {id: 2, likes: 40, post: 'крутая штуковина!'},
]

let dialogs = [
    {id: 1, name: 'Artemy'},
    {id: 2, name: 'Dmytro'},
    {id: 3, name: 'Denisca'},
    {id: 4, name: 'Evgeny'},
    {id: 5, name: 'Vlados'},
    {id: 6, name: 'Svyatoslav'},
    {id: 7, name: 'Anka'}
]

let messages = [
    {id: 1, message: 'приветули'},
    {id: 2, message: 'как делишки?'},
    {id: 3, message: 'когда гулять?'},
    {id: 4, message: 'нормуль вот мой номер'},
    {id: 5, message: '0976965736'},
    {id: 6, message: 'наберешь'},
    {id: 7, message: 'когда вийдешь!'}
]

ReactDOM.render(
    <React.StrictMode>
        <App postData={postData} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
