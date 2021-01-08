/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: Menu.js
    Date: 2021/01/08

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import './Menu.scss';
import MenuButton from "./MenuButton";
import MenuLogo from "../../assets/image/png/logo_loader.png";
import {ReactComponent as IconHome} from "../../assets/image/svg/home_outline.svg";
import {ReactComponent as IconAbout} from "../../assets/image/svg/info_outline.svg";
import {ReactComponent as IconCV} from "../../assets/image/svg/cv_outline.svg";
import {ReactComponent as IconPortfolio} from "../../assets/image/svg/briefcase_outline.svg";
import {ReactComponent as IconContact} from "../../assets/image/svg/mail_outline.svg";

import {isMobile} from 'react-device-detect';
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
        if(!isMobile)
        {
            return(
            
                <div id="MENU_ROOT" className="MENU_ROOT">

                    <div id="MENU_CONTENT" className="MENU_CONTENT">

                        <div id="MENU_BACKGROUND" class="MENU_BACKGROUND">

                            <div id="MENU_IMAGE" class="MENU_IMAGE"> </div>

                        </div>

                        <div id="MENU_LEFT" className="MENU_LEFT">
                            
                        </div>

                        <div id="MENU_RIGHT" className="MENU_RIGHT">
                            
                            <div id="MENU_RIGHT_CONTAINER" className="MENU_RIGHT_CONTAINER">

                                <div id="MENU_RIGHT_HOME" className="MENU_BUTTON MENU_BUTTON_THREE"> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconHome} color="#02D8F3" text="HOME" /> </div> </div>
                                <div id="MENU_RIGHT_HOME" className="MENU_BUTTON MENU_BUTTON_TWO"> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconAbout} color="#FF00A0" text="SOBRE" /> </div>  </div>
                                <div id="MENU_RIGHT_HOME" className="MENU_BUTTON MENU_BUTTON_THREE"> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconCV} color="#02D8F3" text="C.V" /> </div> </div>
                                <div id="MENU_RIGHT_HOME" className="MENU_BUTTON MENU_BUTTON_TWO"> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconPortfolio} color="#FF00A0" text="PORTFOLIO" /> </div> </div>
                                <div id="MENU_RIGHT_HOME" className="MENU_BUTTON MENU_BUTTON_THREE"> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconContact} color="#02D8F3" text="CONTATO" /> </div> </div>

                            </div>

                        </div>

                    </div>

                </div>
            )
        }
        else
        {

            return(
            
                <div id="MENU_ROOT" className="MENU_ROOT">

                </div>
            )
        }
    }

    // == EVENTS
    // ======================================================================================

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default Main;
