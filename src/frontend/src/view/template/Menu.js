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
            activePage: props.activePage,
        }

        // == MENUS

        this._menu = 
        {
            home:
            {
                id: "MENU_HOME",
                classes: "MENU_BUTTON_HOME",
                text: "HOME",
                page: "home",
                icon: IconHome,
                subItems: []
            },
            about:
            {
                id: "MENU_ABOUT",
                classes: "MENU_BUTTON_ABOUT",
                text: "ABOUT",
                page: "about",
                icon: IconAbout,
                subItems: 
                [
                    "teste"
                ]
            },
            cv:
            {
                id: "MENU_CV",
                classes: "MENU_BUTTON_CV",
                text: "CV",
                page: "cv",
                icon: IconCV,
                subItems: 
                [
                    "teste"
                ]
            },
            portfolio:
            {
                id: "MENU_PORTFOLIO",
                classes: "MENU_BUTTON_PORTFOLIO",
                text: "PORTFOLIO",
                page: "portfolio",
                icon: IconPortfolio,
                subItems: []
            },
            contact:
            {
                id: "MENU_CONTACT",
                classes: "MENU_BUTTON_CONTACT",
                text: "CONTACT",
                page: "contact",
                icon: IconContact,
                subItems: []
            },
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
        // VERIFICA E DEFINE A ROTA ATIVA.

        return( { activePage: props.activePage } );
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
            let menuButtonList = [];

            for( let count = 0 ; count < Object.values(this._menu).length ; count++ )
            {
                let currentItem = Object.values(this._menu)[count];

                let pageActive = (this.state.activePage === currentItem.page ? true : false)
                let backgroundColor = (count % 2 == 0 ? "#FF00A0" : "#02D8F3");
                let colorPrimary = (count % 2 == 0 ? "#FF00A0" : "#02D8F3");
                let colorSecondary = (count % 2 == 0 ? "#02D8F3" : "#FF00A0");

                menuButtonList.push ( 

                    <div id={currentItem.id} className={`${currentItem.classes} ${ pageActive ? `MENU_BUTTON_${ currentItem.page.toUpperCase() }_SELECTED` : "" }`} style={ {"background-color": backgroundColor} } onClick={ (e) => this.props.onClick(e, currentItem.page) }> 

                        <div className="MENU_BUTTON_CONTENT"> 
                            <MenuButton subItems={currentItem.subItems} active={ pageActive } icon={ currentItem.icon } colorPrimary={colorPrimary} colorSecondary={colorSecondary} text={currentItem.text} /> 
                        </div> 

                    </div> 
                );
            }

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

                                {menuButtonList}
      
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
