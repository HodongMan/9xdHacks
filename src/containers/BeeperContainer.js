import React, {Component} from 'react';
import {Phone} from '../components';

import {getBeeperList, getBeeperNewList, sendBeep} from '../lib/toServer';

export default class BeeperContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            buttonList : [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"],
            phoneNumberToSend : "",
            beeperList : [],
            newestList : [],
        };

        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setNewBeeper = this.setNewBeeper.bind(this);
        this.setBeeperList = this.setBeeperList.bind(this);
    }

    componentDidMount(){
        this.setBeeperList();
        setInterval(this.setNewBeeper, 6000);
    }

    setBeeperList(){
        getBeeperList('8')
        .then((response) => {
            this.setState({
                newestList : response.data,
            });
        })
        .catch((error) => console.log(error));
    }

    setNewBeeper(){

        getBeeperNewList('8')
        .then((response) => {
            if(response.data){
                response.data.forEach((item, index) => {
                    this.notifyMe(item);
                });
                this.setBeeperList();
            }
        });

    }

    notifyMe(data) {

        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }else if (Notification.permission === "granted") {
            let notification = new Notification("삐삐", {body : data.msg});
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission((permission) => {
                if (permission === "granted") {
                    let notification = new Notification("삐삐", {body : data.msg});
                }
            });
        }
    }

    onClick(e, item){
        e.preventDefault();
        this.setState({
            phoneNumberToSend : this.state.phoneNumberToSend + item,
        });
    }

    onSubmit(){
        sendBeep(this.state.phoneNumberToSend)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

    }

    render(){
        return(
            <Phone
                buttonList={this.state.buttonList}
                newestList={this.state.newestList.slice(0, 5)}
                phoneNumberToSend={this.state.phoneNumberToSend}
                onClick={this.onClick}
                onSubmit={this.onSubmit}
            />
        );
    }
}
