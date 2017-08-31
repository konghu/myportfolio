/**
 * Created by Kong on 7/23/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ResumeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*resume begins*/}
                <div id="resume_wrapper">
                    <div id="resume_picture">
                        <div id="resumeTop"><img src="/app/img/resume.png" /></div>
                    </div>
                </div>
                {/*resume ends*/}

                {/*navigation begins*/}
                <div id="navigation">
                    <label className="button scroll faded" id="upArrow">
                        <span className="scroll-down-arrow disabled"></span>
                    </label>
                    <label className="button scroll faded" id="rightArrow">
                        <span className="scroll-down-arrow disabled"></span>
                    </label>
                    <label className="button scroll faded" id="downArrow">
                        <span className="scroll-down-arrow disabled"></span>
                    </label>
                    <label className="button scroll ring" id="leftArrow" onClick={this.handlePrevPage.bind(this)}>
                        <span className="scroll-down-arrow disabled bounce"></span>
                    </label>
                </div>
                {/*navigation ends*/}

            </div>
        );
    }

    handlePrevPage() {
        this.props.onPrevPage();
    }
};
