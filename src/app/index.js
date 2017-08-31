/**
 * Created by Kong on 7/20/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/public.css';
import './css/stylesheet.css';

//module requires
import ProfileComponent from './components/ProfileComponent';
import ProjectOneComponent from './components/ProjectOneComponent';
import ProjectTwoComponent from './components/ProjectTwoComponent';
import ProjectThreeComponent from './components/ProjectThreeComponent';
import ProjectFourComponent from './components/ProjectFourComponent';
import ProjectOtherComponent from './components/ProjectOtherComponent';
import ResumeComponent from './components/ResumeComponent';

//Create component
// var  App = React.createClass({
//     getInitialState:function () {
//         return {currentPage:1}
//     },
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            currentProject: 1,
        };
    }

    onNextPage(){
        this.setState({
            currrentPage: this.state.currentPage ++
        });
    }

    onPrevPage(){
        this.setState({
            currrentPage: this.state.currentPage --
        });
    }

    onNextProject(){
        this.setState({
            currrentProject: this.state.currentProject ++
        });
    }

    onPrevProject(){
        this.setState({
            currrentProject: this.state.currentProject --
        });
    }

    render(){
        if(this.state.currentPage == 1) {
            window.scrollTo(0, 0);
            return (
                <ProfileComponent onNextPage={this.onNextPage.bind(this)} />
            );
        }
        if(this.state.currentPage == 2) {
            if(this.state.currentProject == 1) {
                window.scrollTo(0, 0);
                return (
                    <ProjectOneComponent onNextPage={this.onNextPage.bind(this)}
                                         onPrevPage={this.onPrevPage.bind(this)}
                                         onNextProject={this.onNextProject.bind(this)}
                                         onPrevProject={this.onPrevProject.bind(this)}/>
                );
            }

            if(this.state.currentProject == 2) {
                window.scrollTo(0, 0);
                return (
                    <ProjectTwoComponent onNextPage={this.onNextPage.bind(this)}
                                         onPrevPage={this.onPrevPage.bind(this)}
                                         onNextProject={this.onNextProject.bind(this)}
                                         onPrevProject={this.onPrevProject.bind(this)}/>
                );
            }

            if(this.state.currentProject == 3) {
                window.scrollTo(0, 0);
                return (
                    <ProjectThreeComponent onNextPage={this.onNextPage.bind(this)}
                                         onPrevPage={this.onPrevPage.bind(this)}
                                         onNextProject={this.onNextProject.bind(this)}
                                         onPrevProject={this.onPrevProject.bind(this)}/>
                );
            }

            if(this.state.currentProject == 4) {
                window.scrollTo(0, 0);
                return (
                    <ProjectFourComponent onNextPage={this.onNextPage.bind(this)}
                                           onPrevPage={this.onPrevPage.bind(this)}
                                           onNextProject={this.onNextProject.bind(this)}
                                           onPrevProject={this.onPrevProject.bind(this)}/>
                );
            }

            if(this.state.currentProject == 5) {
                window.scrollTo(0, 0);
                return (
                    <ProjectOtherComponent onNextPage={this.onNextPage.bind(this)}
                                          onPrevPage={this.onPrevPage.bind(this)}
                                          onNextProject={this.onNextProject.bind(this)}
                                          onPrevProject={this.onPrevProject.bind(this)}/>
                );
            }
        }

        if(this.state.currentPage == 3) {
            window.scrollTo(0, 0);
            return(
                <ResumeComponent onPrevPage={this.onPrevPage.bind(this)} />
            )
        }

    }
};




//put component into html page
ReactDOM.render(<App/>, document.getElementById('root'));