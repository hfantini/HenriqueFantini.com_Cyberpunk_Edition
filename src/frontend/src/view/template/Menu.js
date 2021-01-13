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
import MenuButtonDesktop from "./MenuButtonDesktop";
import MenuLogo from "../../assets/image/png/logo_top.png";
import MenuLogoMobile from "../../assets/image/png/logo_top_mobile.png";
import {ReactComponent as MenuBackgroundMobile} from "../../assets/image/svg/circuit_single.svg";
import MenuIcon from "../../assets/image/png/menu_mobile.png";
import MenuCloseIcon from "../../assets/image/png/close_mobile.png";
import {ReactComponent as IconHome} from "../../assets/image/svg/home.svg";
import {ReactComponent as IconAbout} from "../../assets/image/svg/person.svg";
import {ReactComponent as IconAboutProfile} from "../../assets/image/svg/profile.svg";
import {ReactComponent as IconAboutBiografy} from "../../assets/image/svg/scroll.svg";
import {ReactComponent as IconAboutSkills} from "../../assets/image/svg/jigsaw.svg";
import {ReactComponent as IconAboutVirtues} from "../../assets/image/svg/check.svg";
import {ReactComponent as IconAboutFlaws} from "../../assets/image/svg/error.svg";
import {ReactComponent as IconAboutHobbies} from "../../assets/image/svg/horse_chess_piece.svg";
import {ReactComponent as IconAboutInterests} from "../../assets/image/svg/speech_bubble_treedots.svg";
import {ReactComponent as IconCV} from "../../assets/image/svg/cv.svg";
import {ReactComponent as IconCVPresentation} from "../../assets/image/svg/presentation.svg";
import {ReactComponent as IconCVExperience} from "../../assets/image/svg/gear.svg";
import {ReactComponent as IconCVEducation} from "../../assets/image/svg/book.svg";
import {ReactComponent as IconCVLanguage} from "../../assets/image/svg/language.svg";
import {ReactComponent as IconCVCourse} from "../../assets/image/svg/blackboard.svg";
import {ReactComponent as IconCVCertificate} from "../../assets/image/svg/medal.svg";
import {ReactComponent as IconCVSkill} from "../../assets/image/svg/skill.svg";
import {ReactComponent as IconPortfolio} from "../../assets/image/svg/briefcase.svg";
import {ReactComponent as IconContact} from "../../assets/image/svg/mail.svg";
import { store } from '../../GlobalStore';
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

        // == STATE

        this.state =
        {
            activePage: props.activePage,
            activeSubPage: props.activeSubPage
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
                    {
                        id:"MENU_SUBITEM_GERAL",
                        icon: IconAboutProfile,
                        text: "PROFILE",
                        subPage: "profile"
                    },
                    {
                        id:"MENU_SUBITEM_BIOGRAFY",
                        icon: IconAboutBiografy,
                        text: "BIOGRAFY",
                        subPage: "biografy"
                    },
                    {
                        id:"MENU_SUBITEM_SKILLS",
                        icon: IconAboutSkills,
                        text: "SKILLS",
                        subPage: "skills"
                    },
                    {
                        id:"MENU_SUBITEM_VIRTUES",
                        icon: IconAboutVirtues,
                        text: "VIRTUES",
                        subPage: "virtues"
                    },
                    {
                        id:"MENU_SUBITEM_FLAWS",
                        icon: IconAboutFlaws,
                        text: "FLAWS",
                        subPage: "flaws"
                    },
                    {
                        id:"MENU_SUBITEM_HOBBIES",
                        icon: IconAboutHobbies,
                        text: "HOBBIES",
                        subPage: "hobbies"
                    },
                    {
                        id:"MENU_SUBITEM_INTERESTS",
                        icon: IconAboutInterests,
                        text: "INTERESTS",
                        subPage: "interests"
                    }
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
                    {
                        id:"MENU_SUBITEM_PRESENTATION",
                        icon: IconCVPresentation,
                        text: "PRESENTATION",
                        subPage: "presentation"
                    },
                    {
                        id:"MENU_SUBITEM_EXPERIENCE",
                        icon: IconCVExperience,
                        text: "EXPERIENCE",
                        subPage: "experience"
                    },
                    {
                        id:"MENU_SUBITEM_EDUCATION",
                        icon: IconCVEducation,
                        text: "EDUCATION",
                        subPage: "education"
                    },
                    {
                        id:"MENU_SUBITEM_LANGUAGES",
                        icon: IconCVLanguage,
                        text: "LANGUAGES",
                        subPage: "languages"
                    },
                    {
                        id:"MENU_SUBITEM_COURSES",
                        icon: IconCVCourse,
                        text: "COURSES",
                        subPage: "courses"
                    },
                    {
                        id:"MENU_SUBITEM_CERTIFICATES",
                        icon: IconCVCertificate,
                        text: "CERTIFICATES",
                        subPage: "certificates"
                    },
                    {
                        id:"MENU_SUBITEM_SKILLS",
                        icon: IconCVSkill,
                        text: "SKILLS",
                        subPage: "skills"
                    }
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

        // == BINDING

        this.onMenuClick = this.onMenuClick.bind(this);
        this.onMenuCloseClick = this.onMenuCloseClick.bind(this);
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

        return( { activePage: props.activePage, activeSubPage: props.activeSubPage} );
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
        if( this.context.state.isMobile )
        {
            return (

                <div id="MENU_ROOT_MOBILE" className="MENU_ROOT_MOBILE">

                    <div id="MENU_MOBILE_OVERLAY" className={`MENU_MOBILE_OVERLAY`}>

                        <div id="MENU_MOBILE_OVERLAY_BACKGROUND" className="MENU_MOBILE_OVERLAY_BACKGROUND">

                            <MenuBackgroundMobile id="MENU_MOBILE_OVERLAY_BACKGROUND_IMAGE" className="MENU_MOBILE_OVERLAY_BACKGROUND_IMAGE" fill={"#E1DA23"} />

                        </div>

                        <div id="MENU_MOBILE_OVERLAY_TOP" className="MENU_MOBILE_OVERLAY_TOP">
                            
                            <img src={MenuCloseIcon} className="MENU_MOBILE_OVERLAY_TOP_CLOSE" alt="CLOSE" onClick={ (e) => { this.onMenuCloseClick(e) } } />

                        </div>

                        <div id="MENU_MOBILE_OVERLAY_LOGO" className="MENU_MOBILE_OVERLAY_LOGO">
                            
                        </div>

                        <div id="MENU_MOBILE_OVERLAY_CONTENT" className="MENU_MOBILE_OVERLAY_CONTENT">
                            
                        </div>

                    </div>

                    <div id="MENU_MOBILE_CONTENT" className="MENU_MOBILE_CONTENT">

                        <div id="MENU_MOBILE_LEFT" className="MENU_MOBILE_LEFT">

                            <div id="MENU_MOBILE_LOGO_CONTAINER" className="MENU_MOBILE_LOGO_CONTAINER">
                            
                                <div id="MENU_MOBILE_LOGO_BACKGROUND" className="MENU_MOBILE_LOGO_BACKGROUND"> </div>
                                <img src={MenuLogoMobile} id="MENU_MOBILE_LOGO_IMAGE" className="MENU_MOBILE_LOGO_IMAGE" alt="MENU" />

                            </div>

                        </div>

                        <div id="MENU_MOBILE_RIGHT" className="MENU_MOBILE_RIGHT">
        
                            <img src={MenuIcon} id="MENU_MOBILE_ICON_IMAGE" className="MENU_MOBILE_ICON_IMAGE" alt="MENU" onClick={ (e) => { this.onMenuClick(e) } } />

                        </div>

                    </div>

                </div>
            );
        }
        else
        {
            let menuButtonList = [];

            for( let count = 0 ; count < Object.values(this._menu).length ; count++ )
            {
                let currentItem = Object.values(this._menu)[count];

                let pageActive = (this.state.activePage === currentItem.page ? true : false)
                let backgroundColor = (count % 2 === 0 ? "#FF00A0" : "#02D8F3");
                let colorPrimary = (count % 2 === 0 ? "#FF00A0" : "#02D8F3");
                let colorSecondary = (count % 2 === 0 ? "#02D8F3" : "#FF00A0");

                menuButtonList.push ( 

                    <div id={currentItem.id} key={`MENU_ITEMS_${count}`} className={`${currentItem.classes} ${ pageActive ? `MENU_BUTTON_${ currentItem.page.toUpperCase() }_SELECTED` : "" }`} style={ { backgroundColor : backgroundColor} }> 

                        <div className="MENU_BUTTON_CONTENT"> 
                            <MenuButtonDesktop subItems={currentItem.subItems} page={ currentItem.page } active={ pageActive } activeSubPage={this.state.activeSubPage} icon={ currentItem.icon } colorPrimary={colorPrimary} colorSecondary={colorSecondary} text={currentItem.text} onNavigate={ this.props.onNavigate } />
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
                            
                            <img src={MenuLogo} id="MENU_IMAGE" className="MENU_IMAGE" alt="MENU" />

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
    }

    // == EVENTS
    // ======================================================================================

    onMenuClick(e)
    {
        var element = document.getElementById("MENU_MOBILE_OVERLAY");
        element.style.top = "0%";
        element.classList.add("MENU_MOBILE_OVERLAY_ANIM_OPEN");
        element.classList.remove("MENU_MOBILE_OVERLAY_ANIM_CLOSE");
    }

    onMenuCloseClick(e)
    {
        var element = document.getElementById("MENU_MOBILE_OVERLAY");
        element.classList.remove("MENU_MOBILE_OVERLAY_ANIM_OPEN");
        element.classList.add("MENU_MOBILE_OVERLAY_ANIM_CLOSE");

        setTimeout(() => 
        {
            element.style.top = "-100%"; 
        }, 300);
        
    }

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default Main;
