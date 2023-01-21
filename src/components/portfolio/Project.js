import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo : false,
    }

    handleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        let {name, languagesIcons, source, info} = this.props.item;

        return (
           <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{name}</h3>

                <div className="img"></div>
                {/* <img src = {picture} alt= {name} onClick={this.handleInfo}/> */}
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {   // partie de la pop'up
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" target="_blank" className="button">Voir le site</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleInfo}> 
                                Retour au portfolio
                                </div>
                            </div>
                        </div>
                    )
                }
           </div>
        );
    }
}

export default Project;