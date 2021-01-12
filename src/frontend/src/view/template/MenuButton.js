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
            active: this.props.active
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
        return( {active: props.active} );
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

                <div id="MENU_BUTTON_TOP" className="MENU_BUTTON_TOP">

                    <div id="MENU_BUTTON_LEFT" className="MENU_BUTTON_LEFT"> 
                        <this._icon className="MENU_BUTTON_IMAGE" fill={this.props.colorSecondary}/>
                    </div>

                    <div id="MENU_BUTTON_RIGHT" className="MENU_BUTTON_RIGHT" style={ {color: this.props.colorSecondary} }>
                        {this.props.text}
                    </div>                  

                </div>

                <div id="MENU_BUTTON_BOTTOM" className={`MENU_BUTTON_BOTTOM ${ this.props.active && this.props.subItems != null && Array.isArray(this.props.subItems) && this.props.subItems.length > 0 ? "MENU_BUTTON_BOTTOM_VISIBLE" : "MENU_BUTTON_BOTTOM_HIDDEN"}` }>

                    <div id="MENU_BUTTON_HITCH" className="MENU_BUTTON_HITCH">

                        <div id="MENU_BUTTON_HITCH_LEFT" className="MENU_BUTTON_HITCH_LEFT" style={ {"background-color": this.props.colorPrimary} }></div>
                    <div id="MENU_BUTTON_HITCH_RIGHT" className="MENU_BUTTON_HITCH_RIGHT" style={ {"background-color": this.props.colorPrimary} }></div>

                    </div>

                    <div id="MENU_BUTTON_SUBITEM_CONTAINER" className="MENU_BUTTON_SUBITEM_CONTAINER" style={ {"background-color": this.props.colorPrimary} }>

                        <div id="MENU_BUTTON_SUBITEM_CONTAINER_2" className="MENU_BUTTON_SUBITEM_CONTAINER_2">

                            <div id="MENU_BUTTON_SUBITEM_CONTENT" className="MENU_BUTTON_SUBITEM_CONTENT">

                                SUBITEM CONTAINER

                            </div>

                        </div>

                    </div>

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
