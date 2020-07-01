import React from 'react'
import Config from '../../config';
import './widget.css';
import {
    MdHeadsetMic,
    MdClose,
    MdCall
} from 'react-icons/md';

const widgetDataURL = Config.url;

class Widget extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dataFetched: false,
            isOpen:false,
            dialogTxt:'',
            dialogContact:''
        };
    }

    componentWillMount(){
        // Triggering to get data before component renders
        this.fetchContactData();
    }

    async fetchContactData(){
        // Handles data fetching from predefined Endpoint
        try{
            const _this = this;
            const response = await fetch(widgetDataURL);
            if (!response.ok) {
                // If response is present but it isn't right
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                let data = (await response.json())['script test'];
                // Update States to rerender UI
                _this.setState({dialogTxt:data.labels,dialogContact:data.phone_number,dataFetched:true})
            }
        }catch(e){

        }
    }

    handleDialogToggle(){
        // Handles open and close of the widget dialog
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {

        // Conditionally loading the widget based on data fetched
        return this.state.dataFetched ? <div className={`widget-container ${this.state.isOpen ? 'active' : ''}`} onClick={()=>this.handleDialogToggle()}>
                        
            {/* --------- Widget Icon START ---------- */}
            <div className="widget-icon" >
                <MdHeadsetMic className="support-icon"/>
                <MdClose className="close-icon"/>
            </div>
            {/* --------- Widget Icon END ---------- */}

            {/* --------- Widget Dialog START ---------- */}
            <div className="widget-dialog" onClick={(e)=>e.stopPropagation()}>
                <div className="dialog-head">
                    {this.state.dialogTxt}
                </div>
                <div className="dialog-contact">
                    <MdCall className="call-icon"/>
                    <a href={`tel:${this.state.dialogContact}`}>{this.state.dialogContact}</a> 
                </div>
            </div>
            {/* --------- Widget Dialog END ---------- */}

        </div> : null
    }
};

export default Widget;