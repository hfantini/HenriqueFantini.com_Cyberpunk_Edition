/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: MenuItemDesktop.js
    Date: 2021/01/12

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './MenuItemDesktop.scss';

import React from 'react';

// == CONSTANTS
// ==========================================================================================

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
class MenuItemDesktop extends React.Component 
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
            active: props.active
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
        return { active: props.active };
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
        let active = this.state.active;

        return ( 
            
            <div id="MENU_ITEM_DESKTOP_ROOT" className="MENU_ITEM_DESKTOP_ROOT" onClick={ (e) => { this.props.onSubMenuItemClickEvent(e, this.props.page, this.props.subPage) } }>

                <div id="MENU_ITEM_DESKTOP_CONTAINER" className={`MENU_ITEM_DESKTOP_CONTAINER ${active ? "MENU_ITEM_DESKTOP_CONTAINER_VISIBLE" : "MENU_ITEM_DESKTOP_CONTAINER_HIDDEN"}`}>

                    <div id="MENU_ITEM_DESKTOP_LEFT" className="MENU_ITEM_DESKTOP_LEFT">

                        <this.props.icon className="MENU_ITEM_DESKTOP_ICON" fill={"#E1DA23"}/>

                    </div>

                    <div id="MENU_ITEM_DESKTOP_RIGHT" className={`MENU_ITEM_DESKTOP_RIGHT`}>

                        {this.props.text}

                    </div>

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

export default MenuItemDesktop;