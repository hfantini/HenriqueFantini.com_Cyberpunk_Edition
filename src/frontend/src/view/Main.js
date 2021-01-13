/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: Main.js
    Date: 2021/01/07

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './Main.scss';
import FSLoader from './loader/FSLoader'
import Template from './template/Template'
import ViewportUtil from "../util/ViewportUtil";

// == CONSTANTS
// ==========================================================================================

const DEBUG_TIME_TO_LOAD = 1000;

// == CLASS
// ==========================================================================================

/**
 * 
 *  Website's bootstrap module.
 *  Basically it prepares the page to work with URL routes and serves as container 
 *  to subpages.
 * 
 *  @author Henrique Fantini
 *  @since 0.0.1
 * 
 */
class Main extends React.Component 
{
    // == DECLARATIONS
    // ======================================================================================

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

        // == VAR

        // == STATE

        this.state =
        {
            loading: true,
            isMobile: ViewportUtil.isMobile(),
        }
    }

    // == METHODS
    // ======================================================================================

    /**
     * 
     *  Called when component has been rendered and mounted for the first time.
     * 
     *  @returns void;
     * 
     */
    componentDidMount()
    {
        var self = this;

        this.onWindowResize = this.onWindowResize.bind(this);
        window.addEventListener("resize", this.onWindowResize);

        if(process.env.NODE_ENV === 'development')
        {
            setTimeout(() => {
                
                self.setState( {loading: false} );

            }, DEBUG_TIME_TO_LOAD);
        }
        else
        {

        }
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
        window.removeEventListener("resize", this.onWindowResize);
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
        console.log(this.state.isMobile);

        return(

            <div id="WS_ROOT" className="WS_ROOT">

                <Router>
                    
                    <Switch>

                        <Route exact path="/">
                            <Redirect to="/en/home" />
                        </Route>

                    </Switch>

                    <FSLoader isVisible={this.state.loading} />
                    <Template/>

                </Router>

            </div>
        )
    }

    // == EVENTS
    // ======================================================================================

    /**
     * 
     *  Event called when window's resize.
     * 
     *  @param evt resize event data
     *  @returns void; 
     * 
     */
    onWindowResize(evt)
    {
        this.setState( { isMobile: ViewportUtil.isMobile() } )
    }

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default Main;
