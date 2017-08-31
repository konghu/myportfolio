/**
 * Created by Kong on 7/21/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');

export default class ProjectOneComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {/*project begins*/}
                <div id="project_wrapper">
                    <div id="project_description">
                        <h2>Empathy Bot</h2>
                        <h3>Node Rest + jQuery</h3>
                        <p>Do you want to feel empathized with your foreign friends? Use our Emotion Bot to make sense of those foreign posts!</p>
                        <br></br>
                        <p>This is a research project I undertook with Professor Susan Fussel. Her research focus was regarding intercultural communication on social media. Since many cross-culture interactions have been hindered by linguistic barriers, I am motivated to find a way to circumvent these barriers. With this chrome extension I developed, users are provided with a easy solution to understand those foreign posts and therefore encouraged to carry out interactions.</p>
                        <br></br>
                        <br></br>
                        <p><a href="https://chrome.google.com/webstore/search/facebook%20emotion%20bot?hl=en-US">View app</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/konghu/Emotion-Bot">View code</a>
                        </p>
                    </div>

                    <div className="project_img"><img src="/app/assets/work/EmotionBotScreenShot1.png" /></div>
                    <div className="project_img"><img src="/app/assets/work/EmotionBotScreenShot2.png" /></div>

                </div>
                {/*project ends*/}

                {/*navigation begins*/}
                <div id="navigation">
                    <label className="button scroll faded" id="upArrow">
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

                {/*scroll begins*/}
                <div id="scroll_wrapper">
                    <div id="scroll">
                        <label className="ScrollCirclesBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROFILE</label>
                        <em></em>
                        <label className="ScrollCirclesBig active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
                            <label className="activeFont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emotion&nbsp;Bot</label>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaggle</label>
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

    handleNextProject() {
        this.props.onNextProject();
    }
};
