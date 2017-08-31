/**
 * Created by Kong on 8/23/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');

export default class ProjectFourComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*project begins*/}
                <div id="project_wrapper">
                    <div id="project_description">
                        <h2>NY Auto Depot</h2>
                        <h3>React + Webpack + SASS</h3>
                        <p>This is the project I participated in the course Software Engineering. I was in a team of 5, including one UX designer, two backend developers and two frontend developers.</p>
                        <br></br>
                        <p>Our client is NY Auto Depot, a auto dealership based in New York. The client wants to build a completely new site, mainly for the purpose of inventory showcasing.</p>
                        <br></br>
                        <p>I have been excited to learn about React and Webpack, as well as Agile working process, over the course of this project.</p>
                    </div>

                    <div className="project_img">
                        <div id="projectFourImg"><img src="/app/assets/work/AutoDepotScreenShot1.png" /></div>
                    </div>

                    <div id="project_video">
                        <video preload="auto" width="520" height="310" controls="controls">
                            <source src="/app/assets/work/NYAutoDepot.webm" type="video/webm" />
                            <source src="/app/assets/work/NYAutoDepot.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/*project ends*/}

                {/*navigation begins*/}
                <div id="navigation">
                    <label className="button scroll ring" id="upArrow" onClick={this.handlePrevProject.bind(this)}>
                        <span className="scroll-down-arrow disabled bounce"></span>
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

                {/*scroll begins*/}
                <div id="scroll_wrapper">
                    <div id="scroll">
                        <label className="ScrollCirclesBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE</label>
                        <em></em>
                        <label className="ScrollCirclesBig active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emotion&nbsp;Bot</label>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaggle</label>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SongSung</label>
                            <label className="activeFont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NY&nbsp;Auto&nbsp;Depot</label>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Others</label>
                        </label>
                        <em></em>
                        <label className="ScrollCirclesBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESUME</label>
                    </div>
                    <div className="clear"></div>
                </div>
                {/*scroll ends*/}
            </div>
        );
    }

    handlePrevPage() {
        this.props.onPrevPage();
    }

    handleNextPage() {
        this.props.onNextPage();
    }

    handlePrevProject() {
        this.props.onPrevProject();
    }

    handleNextProject() {
        this.props.onNextProject();
    }
};