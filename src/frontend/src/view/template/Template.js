/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: Template.js
    Date: 2021/01/08

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './Template.scss';
import Menu from "./Menu";
import Error404 from "../error/404/Error404";
import Home from "../home/Home";
import About from "../about/About";
import Curriculum from "../cv/Curriculum";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import { HashRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import React from 'react';

// == CONSTANTS
// ==========================================================================================

// == CLASS
// ==========================================================================================

/**
 * 
 *  Website's main template page.
 *  Handles with a responsive 
 * 
 *  @author Henrique Fantini
 *  @since 0.0.1
 * 
 */
class Template extends React.Component 
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

		// == VAR & CONST

        // == STATE

        this.state =
        {

        }
    }

    // == METHODS
    // ======================================================================================

    /**
     * 
     *  Obtain through currentPath the active page.
     * 
     *  @param currentPath String that defines the current URL Path. Obtained from React-Router.
     * 
     */
    getActivePage( currentPath )
    {
        let retValue = null;

        if(currentPath && typeof currentPath == "string")
        {
            let splittedPath = currentPath.split("/");

            if(splittedPath[2])
            {
                retValue = splittedPath[2];
            }
        }

        return retValue;
    }

    /**
     * 
     *  Called when component receive props from parent
     * 
     *  @returns void;
     * 
     */   
    static getDerivedStateFromProps(props, state)
    {
        return( {isVisible: props.isVisible} );
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
        // == ROUTE
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
        let activePage = this.getActivePage(this.props.location.pathname);

        return( 

            <div className="TEMPLATE_ROOT">

                <div className="TEMPLATE_TOP">

                    <Menu activePage={activePage} onClick={ (e, page) => { this.onMenuItemClick(e, page) } }/>

                </div>

                <div className="TEMPLATE_CONTENT">

                <Router>
                    
                    <Switch>

                        <Route exact path="/:lang/home">
                           
                            <Home/>

                        </Route>

                        <Route exact path="/:lang/about">
                        
                            <About/>

                        </Route>

                        <Route exact path="/:lang/cv">
                        
                            <Curriculum/>

                        </Route>

                        <Route exact path="/:lang/portfolio">
                        
                            <Portfolio/>

                        </Route>

                        <Route exact path="/:lang/contact">

                            <Contact/>

                        </Route>

                        <Route component={Error404} />

                    </Switch>

                </Router>

                </div>

                <div className="TEMPLATE_FOOTER">

                </div>

            </div> 
        )
    }

    // == EVENTS
    // ======================================================================================

    onMenuItemClick( e, page )
    {
        this.props.history.push(`/en/${page}`);
    }

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default withRouter(Template);
