/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: Error404.js
    Date: 2021/01/11

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './Error404.scss';

import React from 'react';

// == CONSTANTS
// ==========================================================================================

// == CLASS
// ==========================================================================================

/**
 * 
 *  404 error component.
 * 
 *  @author Henrique Fantini
 *  @since 0.0.1
 * 
 */
class Error404 extends React.Component 
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
        return(<div> NOT FOUND! </div>)
    }

    // == EVENTS
    // ======================================================================================

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default Error404;
