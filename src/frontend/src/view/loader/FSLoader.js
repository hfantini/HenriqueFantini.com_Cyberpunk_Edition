/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: FSLoader.js
    Date: 2021/01/07

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './FSLoader.scss';
import ImageLogo from "../../assets/image/png/logo_loader.png";

import {isMobile} from 'react-device-detect';
import React from 'react';
var classNames = require('classnames');

// == CONSTANTS
// ==========================================================================================

const COMPONENT_STATE = Object.freeze(
{
    LOADING: 0,
    TRANSITION_CLOSE: 2,
    COMPLETE: 3 
});

// == CLASS
// ==========================================================================================

/**
 * 
 *  Component constructor;
 * 
 *  @param props Initial Properties
 * 
 */
class FSLoader extends React.Component 
{

    // == DECLARATIONS
    // ======================================================================================

    #loadingTimeout = null;

    // == CONSTRUCTOR
    // ======================================================================================

    /**
     * 
     *  Component constructor;
     * 
     *  @param props Initial Properties
     * 
     */
    constructor(props)
    {
        super(props);

        // == STATE

        this.state = 
        {
            current: COMPONENT_STATE.LOADING,
            loadCompleted: false
        }

        // == BINDS

        this.onRootAnimationEnds = this.onRootAnimationEnds.bind(this);
        this.onBackgroundAnimationInteration = this.onBackgroundAnimationInteration.bind(this);
        
    }

    // == METHODS
    // ======================================================================================

    /**
     * 
     *  Used to handle with derived properties.
     * 
     *  @returns void;
     * 
     */   
    static getDerivedStateFromProps(props)
    {
        return( {loadingCompleted: (props.isVisible ? false : true) } );
    }

    /**
     * 
     *  Called when component has been rendered and mounted for the first time.
     * 
     *  @returns void;
     * 
     */
    componentDidMount()
    {
        document.body.style.overflow = "hidden";
    }

    /**
     * 
     *  Called when component is being to be unmounted and removed from component tree.
     * 
     *  @returns void;
     * 
     */    
    componentWillUnmount()
    {
        document.body.style.overflow = "auto";
    }

    /**
     * 
     *  Renders the component on screen;
     * 
     *  @returns JSX
     * 
     */
    render()
    {
        var styles =
        {
            "display": (this.state.current === COMPONENT_STATE.COMPLETE ? "none" : "flex")
        }

        var classes = classNames(
        {
            "FSLOADER_ROOT": true,
            "FSLOADER_ANIM_FADE_DESKTOP": this.state.current === COMPONENT_STATE.TRANSITION_CLOSE && !isMobile,
            "FSLOADER_ANIM_FADE_MOBILE": this.state.current === COMPONENT_STATE.TRANSITION_CLOSE && isMobile
        });

        var classesBackground = classNames(
        {
            "FSLOADER_BACKGROUND": this.state.current === COMPONENT_STATE.LOADING,
            "FSLOADER_BACKGROUND_LOADING_ANIM": this.state.current === COMPONENT_STATE.LOADING,
        });

        return (

            <div id="FSLOADER_ROOT" className={ classes } style={ styles } onAnimationEnd={this.onRootAnimationEnds}>

                <div id="FSLOADER_INTERNAL" className="FSLOADER_INTERNAL">

                    <div id="FSLOADER_BACKGROUND" className={classesBackground} onAnimationIteration={this.onBackgroundAnimationInteration}>

                    </div>

                    <div id="FSLOADER_CONTAINER" className="FSLOADER_CONTAINER"> 

                        <div id="FSLOADER_CONTAINER_SUB" className="FSLOADER_CONTAINER_SUB">

                            <img id="FSLOADER_LOGO" alt="LOGO" className="FSLOADER_LOGO" src={ImageLogo} />

                        </div>

                    </div>

                </div>

            </div>
        )
    }

    // == EVENTS
    // ======================================================================================

    onRootAnimationEnds()
    {
        this.setState( { current: COMPONENT_STATE.COMPLETE } );
    }

    onBackgroundAnimationInteration()
    {
        if(this.state.loadingCompleted)
        {
            this.setState( { current: COMPONENT_STATE.TRANSITION_CLOSE } );
        }
    }

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default FSLoader;
