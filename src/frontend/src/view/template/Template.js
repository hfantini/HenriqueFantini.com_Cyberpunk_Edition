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
import { store } from '../../GlobalStore';
import React from 'react';
import TemplateInternal from './TemplateInternal'

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

    static contextType = store;

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

        // == GLOBAL STATE

        // == STATE

        this.state =
        {
            activePage: props.activePage,
            activeSubPage: props.activeSubPage
        };

        console.log(this.state);
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
        return (      
            {
                activePage: props.activePage,
                activeSubPage: props.activeSubPage
            } 
        );
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
        return( 

            <div className="TEMPLATE_ROOT">

                <div className="TEMPLATE_TOP">

                    <Menu activePage={this.state.activePage} activeSubPage={this.state.activeSubPage} onNavigate={ this.props.onNavigate } />

                </div>

                <div className="TEMPLATE_CONTENT">

                    <TemplateInternal/>

                </div>

            </div> 
        )
    }

    // == EVENTS
    // ======================================================================================

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default Template;
