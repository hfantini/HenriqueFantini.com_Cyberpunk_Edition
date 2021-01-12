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
import MenuLogo from "../../assets/image/png/logo_top.png";
import {ReactComponent as IconHome} from "../../assets/image/svg/home.svg";
import {ReactComponent as IconAbout} from "../../assets/image/svg/person.svg";
import {ReactComponent as IconCV} from "../../assets/image/svg/cv.svg";
import {ReactComponent as IconPortfolio} from "../../assets/image/svg/briefcase.svg";
import {ReactComponent as IconContact} from "../../assets/image/svg/mail.svg";
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
            currentPathname: props.currentPathname,
        }
    }

    // == METHODS
    // ======================================================================================

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
    static getDerivedStateFromProps(props)
    {
        // VERIFICA E DEFINE A ROTA ATIVA.

        return( { currentPathname: props.currentPathname } );
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
        let activePage = this.getActivePage(this.props.currentPathname);

        if(!isMobile)
        {
            return(
            
                <div id="MENU_ROOT_DESKTOP" className="MENU_ROOT_DESKTOP">

                    <div id="MENU_CONTENT" className="MENU_CONTENT">

                        <div id="MENU_BACKGROUND" className="MENU_BACKGROUND">

                            <div id="MENU_IMAGE" className="MENU_IMAGE"> </div>

                        </div>

                        <div id="MENU_LEFT" className="MENU_LEFT">
                            
                            <img src={MenuLogo} id="MENU_IMAGE" className="MENU_IMAGE" />

                        </div>

                        <div id="MENU_RIGHT" className="MENU_RIGHT">
                            
                            <div id="MENU_RIGHT_CONTAINER" className="MENU_RIGHT_CONTAINER">

                            <div id="MENU_RIGHT_HOME" className={`MENU_BUTTON_HOME MENU_BUTTON_THREE ${ activePage === "home" ? "MENU_BUTTON_HOME_SELECTED" : "" }`} onClick={ (e) => this.props.onClick(e, "home") }> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconHome} color="#02D8F3" text="HOME" /> </div> </div>
                            <div id="MENU_RIGHT_ABOUT" className={`MENU_BUTTON_ABOUT MENU_BUTTON_TWO ${ activePage === "about" ? "MENU_BUTTON_ABOUT_SELECTED" : "" }`} onClick={ (e) => this.props.onClick(e, "about") }> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconAbout} color="#FF00A0" text="SOBRE" /> </div>  </div>
                            <div id="MENU_RIGHT_CV" className={`MENU_BUTTON_CV MENU_BUTTON_THREE ${ activePage === "cv" ? "MENU_BUTTON_CV_SELECTED" : "" }`} onClick={ (e) => this.props.onClick(e, "cv") }> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconCV} color="#02D8F3" text="C.V" /> </div> </div>
                            <div id="MENU_RIGHT_PORTFOLIO" className={`MENU_BUTTON_PORTFOLIO MENU_BUTTON_TWO ${ activePage === "portfolio" ? "MENU_BUTTON_PORTFOLIO_SELECTED" : "" }`} onClick={ (e) => this.props.onClick(e, "portfolio") }> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconPortfolio} color="#FF00A0" text="PORTFOLIO" /> </div> </div>
                            <div id="MENU_RIGHT_CONTACT" className={`MENU_BUTTON_CONTACT MENU_BUTTON_THREE ${ activePage === "contact" ? "MENU_BUTTON_CONTACT_SELECTED" : "" }`} onClick={ (e) => this.props.onClick(e, "contact") }> <div className="MENU_BUTTON_CONTENT"> <MenuButton icon={IconContact} color="#02D8F3" text="CONTATO" /> </div> </div>

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
