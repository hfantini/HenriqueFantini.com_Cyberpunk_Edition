/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: TemplateInternal.js
    Date: 2021/01/13

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './TemplateInternal.scss';
import Error404 from "../error/404/Error404";
import Home from "../home/Home";
import About from "../about/About";
import Curriculum from "../cv/Curriculum";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

import { Switch, Route } from "react-router-dom";
import React from 'react';

// == CONSTANTS
// ==========================================================================================

// == CLASS
// ==========================================================================================

/**
 * 
 *  Defines the component TemplateInternal.js
 * 
 *  @author Henrique Fantini
 *  @since 0.0.1
 * 
 */
class TemplateInternal extends React.Component 
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
     *  Called when component receive props from parent
     * 
     *  @returns void;
     * 
     */   
    static getDerivedStateFromProps(props)
    {
        return {};
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
        return ( 
        
            <div id="TEMPLATE_INTERNAL">

                <div id="TEMPLATE_INTERNAL_CONTENT">
                    
                    <Switch>

                        <Route exact path="/:lang/home">
                        
                            <Home/>

                        </Route>

                        <Route exact path="/:lang/about">
                        
                            <About/>

                        </Route>

                        <Route exact path="/:lang/about/:subPage">
                        
                            <About/>

                        </Route>

                        <Route exact path="/:lang/cv">
                        
                            <Curriculum/>

                        </Route>

                        <Route exact path="/:lang/cv/:subPage">
                        
                            <About/>

                        </Route>

                        <Route exact path="/:lang/portfolio">
                        
                            <Portfolio/>

                        </Route>

                        <Route exact path="/:lang/contact">

                            <Contact/>

                        </Route>

                        <Route component={Error404} />

                    </Switch>

                </div>

            </div>
        );
    }

    // == EVENTS
    // ======================================================================================

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default TemplateInternal;
