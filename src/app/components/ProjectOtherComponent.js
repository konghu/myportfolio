/**
 * Created by Kong on 8/24/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');

export default class ProjectOtherComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*project begins*/}
                <div id="project_wrapper">
                    <div id="project_description">
                        <h2>Some other projects...</h2>
                        <br></br>
                        <br></br>
                        <h3><a href="http://waterloofirstpresbyterian.com/index.php">First Presbyterian Church of Waterloo</a></h3>
                        <p>The pastor wanted a website showcasing her church's weekly events. I designed this site essentially as a photo gallery, with each event as an album. I have accomplished CRUD functionalities for the administration side based on PHP and MySQL. Meanwhile, I also implemented robust error handling, input validation and sanitization. <a href="https://github.com/konghu/FirstPresbyterianChurch">View code</a></p>

                        <br></br>
                        <br></br>
                        <h3><a href="http://konghu.me/SenateDonationSources/">The Money Behind the Senators</a></h3>
                        <p>This is a data visualization project that I have completed within a team of 4. In this project, we analyzed the donation received by current senators in 2016. I have been able to incorporate some nice animation effects based on D3, and unveil some cool facts, for example, Republicans tend to receive more funds than Democrats. <a href="https://github.com/konghu/INFO3300_Final">View code</a></p>
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
                    <label className="button scroll faded" id="downArrow">
                        <span className="scroll-down-arrow disabled"></span>
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
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NY&nbsp;Auto&nbsp;Depot</label>
                            <label className="activeFont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Others</label>
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