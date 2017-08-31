/**
 * Created by Kong on 8/23/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');

export default class ProjectThreeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*project begins*/}
                <div id="project_wrapper">
                    <div id="project_description">
                        <h2>SongSung</h2>
                        <h3>PHP</h3>
                        <p>SongSung is a course project I have always wanted to do. It is designed as a place for music fans to share their favorite music and write reviews.</p>
                        <br></br>
                        <p><a href="https://github.com/konghu/INFO2300/tree/master/project2">View code</a></p>
                    </div>

                    <div className="project_img"><img src="/app/assets/work/SongSungScreenShot1.png" /></div>
                    <div className="project_img"><img src="/app/assets/work/SongSungScreenShot2.png" /></div>

                    <div id="project_video">
                        <video preload="auto" width="520" height="280" controls="controls">
                            <source src="/app/assets/work/SongSung.webm" type="video/webm" />
                            <source src="/app/assets/work/SongSung.mp4" type="video/mp4" />
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
                        <label className="ScrollCirclesBig active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE</label>
                        <em></em>
                        <label className="ScrollCirclesBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS</label>
                        <em></em>
                        <label className="ScrollCirclesBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESUME</label>
                    </div>
                    <div className="clear"></div>
                </div>
                {/*scroll ends*/}

                {/*scroll begins*/}
                <div id="scroll_wrapper">
                    <div id="scroll">
                        <label className="ScrollCirclesBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE</label>
                        <em></em>
                        <label className="ScrollCirclesBig active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emotion&nbsp;Bot</label>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaggle</label>
                            <label className="activeFont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SongSung</label>
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