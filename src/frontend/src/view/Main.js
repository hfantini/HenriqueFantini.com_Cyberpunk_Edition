/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: Main.js
    Date: 2021/01/07

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

// == IMPORTS
// ==========================================================================================

import React from 'react';
import { store } from '../GlobalStore'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import './Main.scss';
import FSLoader from './loader/FSLoader'
import Template from './template/Template'
import ViewportUtil from "../util/ViewportUtil";

// == CONSTANTS
// ==========================================================================================

const DEBUG_TIME_TO_LOAD = 1000;

// == CLASS
// ==========================================================================================

export const StoreContext = React.createContext()

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

        // == VAR

        // == STATE

        this.state =
        {
            loading: true,
            isMobile: ViewportUtil.isMobile(),
        }

        // == BINDINGS

        this.onNavigate = this.onNavigate.bind(this);
    }

    // == METHODS
    // ======================================================================================

    /**
     * 
     *  Obtain through currentPath the active page.
     * 
     *  @param currentPath String that defines the current URL Path. Obtained from React-Router.
     * 
     */
    getActivePath( currentPath )
    {
        let retValue = { page: null, subPage: null };

        if(currentPath && typeof currentPath == "string")
        {
            let splittedPath = currentPath.split("/");

            if(splittedPath[2])
            {
                retValue.page = splittedPath[2];
            }

            if(splittedPath[3])
            {
                retValue.subPage = splittedPath[3];
            }
        }

        return retValue;
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
        var self = this;

        this.onWindowResize = this.onWindowResize.bind(this);
        window.addEventListener("resize", this.onWindowResize);

        if(process.env.NODE_ENV === 'development')
        {
            setTimeout(() => {
                
                self.setState( {loading: false} );

            }, DEBUG_TIME_TO_LOAD);
        }
        else
        {

        }
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
        window.removeEventListener("resize", this.onWindowResize);
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
        let activePath = this.getActivePath(this.props.location.pathname);

        return(

            <div id="WS_ROOT" className="WS_ROOT">
    
                <Switch>

                    <Route exact path="/">
                        <Redirect to="/en/home" />
                    </Route>

                </Switch>

                <FSLoader isVisible={this.state.loading} />
                <Template activePage={activePath.page} activeSubPage={activePath.subPage} onNavigate={ (e, page, subPage) => { this.onNavigate(e, page, subPage) } }/>
                
            </div>
        )
    }

    // == EVENTS
    // ======================================================================================

    /**
     * 
     *  Event called when window's resize.
     * 
     *  @param evt resize event data
     *  @returns void; 
     * 
     */
    onWindowResize(evt)
    {
        if( ViewportUtil.isMobile() )
        {
            this.context.dispatch( { type: "VIEWPORT_CHANGE_TO_MOBILE" } );
        }
        else
        {
            this.context.dispatch( { type: "VIEWPORT_CHANGE_TO_DESKTOP" } );
        }
    }

    onNavigate( e, page, subPage )
    {
        if(page)
        {
            this.props.history.push(`/en/${page}${ subPage ? "/" + subPage : "" }`);
        }
    }    

    // == GETTERS AND SETTERS
    // ======================================================================================
}

// == EXPORTS
// ==========================================================================================

export default withRouter(Main);
