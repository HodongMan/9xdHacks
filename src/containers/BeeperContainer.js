import React, {Component} from 'react';

import {Phone} from '../components';

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
    }

    componentDidMount(){
        setInterval(this.setNewBeeper, 6000);
    }

    setNewBeeper(){

        let newData = this.state.beeperList;

        newData.forEach((item, index) => {
            this.notifyMe(item);
        });

        this.setState({
            beeperList : [],
            newestList : newData,
        });

    }

    notifyMe(data) {

        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }else if (Notification.permission === "granted") {
            let notification = new Notification("삐삐", {body : data.phone});
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission((permission) => {
                if (permission === "granted") {
                    let notification = new Notification("삐삐", {body : data.phone});
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

        let newBeeper = Object.assign({}, { phone : this.state.phoneNumberToSend});
        let newBeeperList = this.state.beeperList;
        newBeeperList.push(newBeeper);
        this.setState({
            beeperList : newBeeperList,
        });

    }

    render(){
        return(
            <Phone
                buttonList={this.state.buttonList}
                newestList={this.state.newestList.reverse()}
                phoneNumberToSend={this.state.phoneNumberToSend}
                onClick={this.onClick}
                onSubmit={this.onSubmit}
            />
        );
    }
}
