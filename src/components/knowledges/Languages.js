import React, { Component } from 'react'
import ProgressBar from './ProgressBar'



export default class Languages extends Component {
    state = {
        languages: [
            {id: 1,value: "HTML / CSS", xp:2},
            {id: 2,value: "Javascript", xp:1.5},
            {id: 3,value: "Symfony", xp:1.5},
            {id: 4,value: "PHP", xp:1.5},
        ],
        frameworks: [
            {id: 1,value: "Bootstrap", xp:2},
            {id: 2,value: "Sass", xp:1.5},
            {id: 3,value: "React.js", xp:1.5},
            {id: 4,value: "Worpress", xp:2},
        ],
    }

  render() {
      let { languages, frameworks } = this.state;

    return (
        <div className="languagesFrameworks">
            <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages"
            />

            <ProgressBar 
                languages={frameworks}
                className="frameworksDisplay"
                title="frameworks & bibliothèque"
            />
        </div>
    )
  }
}
