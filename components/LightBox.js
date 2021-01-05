import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import React, { Component } from 'react';

export default class LightBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        const { isOpen } = this.state;
        return (
            <a className="w-full" onClick={()=>this.setState({isOpen: !this.state.isOpen})} style={{cursor: 'pointer'}}>
                <img className="w-full" src={this.props.imagePath} alt="before and after pictures"/>
                {isOpen && (
                <Lightbox 
                    mainSrc={this.props.imagePath}
                    onCloseRequest={()=>{this.setState({isOpen: false})}}
                    imageCaption={this.props.title}
                    imagePadding={100}
                />
                )}
            </a>
        )
    }
}