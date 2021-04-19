import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export class MainPage extends React.Component{
    render() {
        return(
            <div>
                <h1>Главная страница</h1>
                <Popup trigger={
                    <button> Открыть модальное окно
                    </button>
                }
                    position="right center">
                    <div>В этом модальном окне может быть любой контент</div>
                </Popup>
            </div>
        )
    }
}