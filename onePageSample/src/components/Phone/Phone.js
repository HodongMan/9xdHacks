import React, {PureComponent} from 'react';

import Button from './Button';
import Receive from './Receive';
import './style.css';

export default class Phone extends PureComponent{


    render(){
        return(
        <div>
            <div className="lightbox-blanket">
                <div className="pop-up-container">
                    <div className="pop-up-container-vertical">
                        <div className="pop-up-wrapper">
                            <div className="phone-wrapper">
                                <div className="phone-pad">
                                    <div className="phone-pad-input-panel">
                                        <div className="phone-pad-input-add"><i className="fa fa-plus"></i></div>
                                        <div className="phone-pad-input-text">
                                            <input id="number-input" type="tel" readOnly="readonly" value={this.props.phoneNumberToSend}/>
                                        </div>
                                        <div className="phone-pad-input-remove"><i className="fa fa-remove"></i></div>
                                    </div>
                                    <div className="phone-pad-input-numbers">
                                    {this.props.buttonList.map((item, index) => {
                                        return (<Button
                                            key={index}
                                            item={item}
                                            onClick={this.props.onClick}
                                        />)
                                    })}
                                    </div>
                                    <div className="phone-pad-input-call" onClick={this.props.onSubmit}>
                                        <i className="fa fa-phone"></i>
                                    </div>
                                </div>
                                <div className="phone-contacts-wrapper">
                                    <div className="phone-contacts">
                                    {this.props.newestList.map((item, index) => {
                                        return (<Receive
                                            key={index}
                                            number={item.number}
                                            msg={item.msg}
                                        />)
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="random-background">
            </div>
        </div>

        );
    }
}
