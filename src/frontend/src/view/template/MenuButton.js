/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: MenuButton.js
    Date: 2021/01/07

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './MenuButton.scss';

import React from 'react';

// == CONSTANTS
// ==========================================================================================

// == CLASS
// ==========================================================================================

/**
 * 
 *  Defines the menu button (Container inside MenuBar).
 * 
 *  @author Henrique Fantini
 *  @since 0.0.1
 * 
 */
class MenuButton extends React.Component 
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

        this._icon = props.icon; 

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
        return (
        
            <div id="MENU_BUTTON_ROOT" className="MENU_BUTTON_ROOT">

                    <div id="MENU_BUTTON_LEFT" className="MENU_BUTTON_LEFT"> 
                        <this._icon className="MENU_BUTTON_IMAGE" fill={this.props.color}/>
                    </div>

                    <div id="MENU_BUTTON_RIGHT" className="MENU_BUTTON_RIGHT" style={ {color: this.props.color} }>
                        {this.props.text}
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

export default MenuButton;
