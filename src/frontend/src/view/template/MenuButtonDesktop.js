/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: MenuButtonDesktop.js
    Date: 2021/01/07

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './MenuButtonDesktop.scss';
import MenuItemDesktop from "./MenuItemDesktop";

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
class MenuButtonDesktop extends React.Component 
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
            active: this.props.active,
            activeSubPage: this.props.activeSubPage
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
        return( {active: props.active, activeSubPage: props.activeSubPage} );
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
        var menuSubItems = [];

        for( let count = 0 ; count < this.props.subItems.length ; count++ )
        {
            let data = this.props.subItems[count];
            let active = (this.state.activeSubPage === data.subPage)

            menuSubItems.push
            ( 
                <MenuItemDesktop key={`MENU_SUBITEMS_${count}`} icon={data.icon} text={data.text} active={active} page={this.props.page} subPage={data.subPage} onNavigate={ this.props.onNavigate } />
            );
        }

        return (
        
            <div id="MENU_BUTTON_ROOT" className="MENU_BUTTON_ROOT">

                <div id="MENU_BUTTON_TOP" className="MENU_BUTTON_TOP" onClick={ (e) => { this.props.onNavigate(e, this.props.page) } }>

                    <div id="MENU_BUTTON_LEFT" className="MENU_BUTTON_LEFT"> 
                        <this.props.icon className="MENU_BUTTON_IMAGE" fill={this.props.colorSecondary}/>
                    </div>

                    <div id="MENU_BUTTON_RIGHT" className="MENU_BUTTON_RIGHT" style={ {color: this.props.colorSecondary} }>
                        {this.props.text}
                    </div>                  

                </div>

                <div id="MENU_BUTTON_BOTTOM" className={`MENU_BUTTON_BOTTOM ${ this.props.active && this.props.subItems.length > 0 ? "MENU_BUTTON_BOTTOM_VISIBLE" : "MENU_BUTTON_BOTTOM_HIDDEN"}` }>

                    <div id="MENU_BUTTON_HITCH" className="MENU_BUTTON_HITCH">

                        <div id="MENU_BUTTON_HITCH_LEFT" className="MENU_BUTTON_HITCH_LEFT" style={ {backgroundColor : this.props.colorPrimary} }></div>
                    <div id="MENU_BUTTON_HITCH_RIGHT" className="MENU_BUTTON_HITCH_RIGHT" style={ {backgroundColor : this.props.colorPrimary} }></div>

                    </div>

                    <div id="MENU_BUTTON_SUBITEM_CONTAINER" className="MENU_BUTTON_SUBITEM_CONTAINER" style={ { backgroundColor: this.props.colorPrimary } }>

                        <div id="MENU_BUTTON_SUBITEM_CONTAINER_2" className="MENU_BUTTON_SUBITEM_CONTAINER_2">

                            <div id="MENU_BUTTON_SUBITEM_CONTENT" className="MENU_BUTTON_SUBITEM_CONTENT">

                                {menuSubItems}

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

export default MenuButtonDesktop;
