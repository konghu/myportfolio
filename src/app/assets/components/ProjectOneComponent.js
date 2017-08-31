/**
 * Created by Kong on 7/21/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');


//Create component
// var  projectComponent = React.createClass({


export default class ProjectOneComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*project begins*/}
                <div id="project_wrapper">
                    Placeholder
                </div>
                {/*project ends*/}

                {/*navigation begins*/}
                <div id="navigation">
                    <label className="button scroll" id="upArrow">
                        <span className="scroll-down-arrow disabled"></span>
                    </label>
                    <label className="button scroll ring" id="rightArrow" onClick={this.handleNextPage.bind(this)}>
                        <span className="scroll-down-arrow disabled bounce"></span>
                    </label>
                    <label className="button scroll ring" id="downArrow" onClick={this.handleNextProject.bind(this)}>
                        <span className="scroll-down-arrow disabled bounce"></span>
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

    handleNextPage() {
        this.props.onNextPage();
    }

    handleNextProject() {
        this.props.onNextProject();
    }
};
