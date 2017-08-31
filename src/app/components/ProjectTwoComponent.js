/**
 * Created by Kong on 7/21/2017.
 */
/**
 * Created by Kong on 7/21/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');

export default class ProjectTwoComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*project begins*/}
                <div id="project_wrapper">
                    <div id="project_description">
                        <h2>Kaggle</h2>
                        <h3>MongoDB + Express + Angular2 + Node</h3>
                        <p>This is a large-scale project I participated with Societe Generale, a French investment banking institution. SG wanted to clone Kaggle, the data science competition platform, in-house, as they won’t be able to use public portals due to security and trademark concerns. </p>
                        <br></br>
                        <p>This project was my sounding attempt to go full-stack, during which I have gained experience with MEAN stack, i.e. MongoDB, Express, Angular and Node. The project spans over 9 months and is still in progress. The screenshots are from what I had been able to implement, including question create, read, update and delete features.</p>
                        <br></br>
                    </div>

                    <div className="project_img"><img src="/app/assets/work/SGScreenShot1.png" /></div>
                    <div className="project_img"><img src="/app/assets/work/SGScreenShot2.png" /></div>

                    <div id="project_video">
                        <video preload="auto" width="520" height="280" controls="controls">
                            <source src="/app/assets/work/SocGen.webm" type="video/webm" />
                            <source src="/app/assets/work/SocGen.mp4" type="video/mp4" />
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
                            <label className="activeFont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaggle</label>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SongSung</label>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NY&nbsp;Auto&nbsp;Depot</label>
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
