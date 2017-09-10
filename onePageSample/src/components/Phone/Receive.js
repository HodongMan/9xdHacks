import React, {PureComponent} from 'react';


export default class Receive extends PureComponent{

    render(){

        return(
            <div className='contact-card'>
                <div className='contact-image-wrapper'>
                    <img src='' alt = '임시파일'/>
                </div>
                <div className='contact-details'>
                    <div className='contact-name'>"삐삐 확인"</div>
                    <div className='contact-phone'>{this.props.number}</div>
                    <div className='contact-phone'>{this.props.msg}</div>
                </div>
            </div>
        );
    }
}
