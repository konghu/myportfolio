/**
 * Created by Kong on 7/20/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');


//Create component
// var  ProfileComponent = React.createClass({


export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*profile begins*/}
                <div id="profile_wrapper">
                    <div id="profile_picture"
                         className="col-md-offset-5 col-md-3 col-sm-offset-4 col-sm-7 col-xs-8 col-xs-offset-4">
                        <img src="/app/img/me.jpg" alt="mySelfie" height="210" width="210"
                             className="img-responsive"/>
                    </div>
                    <div id="profile_description"
                         className="col-md-5 col-md-offset-4 col-sm-7 col-sm-offset-3 col-xs-8 col-xs-offset-3">My
                        name is Kong Hu. I am a graduate student studying Information Science at Cornell University
                    </div>
                </div>
                {/*profile ends*/}

                {/*navigation begins*/}
                <div id="navigation">
                    <label className="button scroll" id="upArrow">
                        <span className="scroll-down-arrow disabled"></span>
                    </label>
                    <label className="button scroll ring" id="rightArrow" onClick={this.handleNextPage.bind(this)}>
                        <span className="scroll-down-arrow disabled bounce"></span>
                    </label>
                    <label className="button scroll" id="downArrow">
                        <span className="scroll-down-arrow disabled"></span>
                    </label>
                    <label className="button scroll" id="leftArrow">
                        <span className="scroll-down-arrow disabled"></span>
                    </label>
                </div>
                {/*navigation ends*/}
            </div>
        );
    }

    handleNextPage() {
        this.props.onNextPage();
    }
};
