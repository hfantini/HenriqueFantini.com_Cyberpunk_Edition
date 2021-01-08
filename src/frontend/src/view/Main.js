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

import './Main.scss';
import FSLoader from './loader/FSLoader'

// == CONSTANTS
// ==========================================================================================

const DEBUG_TIME_TO_LOAD = 5000;

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

        // == VAR

        // == STATE

        this.state =
        {
            loading: true
        }
    }

    // == METHODS
    // ======================================================================================

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
        return(
            <div id="WS_ROOT">

                <FSLoader key="1" isVisible={this.state.loading} />

                <div>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris neque, condimentum in sem non, rutrum pharetra dui. Pellentesque sed diam sit amet augue mollis ultrices. Etiam turpis mauris, laoreet vel ipsum ultrices, malesuada scelerisque felis. Nam ut dolor id lorem ultrices molestie. Donec sed risus faucibus, dapibus justo dapibus, vestibulum felis. In quis vestibulum sem, vel consequat magna. Maecenas tempor, urna sit amet ultrices ultrices, nisi leo laoreet est, sed fringilla nibh magna et felis. Nunc in dolor tellus. Donec lorem nulla, pellentesque id lacus vitae, faucibus rutrum urna. Maecenas at felis euismod, tempus purus eu, auctor ligula. Nullam vestibulum convallis justo sit amet congue.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a consectetur nisi, bibendum gravida est. Ut venenatis ligula in congue faucibus. Fusce nisi ipsum, mollis sit amet cursus eu, fermentum sed turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut blandit nisi. Sed consectetur massa condimentum nibh maximus dignissim. Proin ut ligula ac nisi finibus egestas. In hac habitasse platea dictumst. Donec lacinia quam a varius tempor. Nam porta est ut lacus aliquam blandit.

Nam lobortis est sit amet maximus consectetur. Vivamus at nibh fermentum, auctor tellus ac, egestas neque. Pellentesque in libero justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis dolor neque, feugiat id facilisis eu, aliquam quis nunc. Integer egestas pharetra lorem et placerat. Aliquam vehicula mi nunc, ac interdum tortor hendrerit in. Nunc cursus mauris eget sem efficitur euismod. Aenean posuere enim dolor. Suspendisse bibendum dui non lorem tincidunt gravida. Morbi in purus nisl. Nunc eget nibh non eros sodales tempor id in risus. Ut vehicula rhoncus libero, nec sodales elit feugiat nec.

Pellentesque orci felis, scelerisque vitae mollis id, euismod a nulla. Quisque mi justo, consequat ut suscipit et, dignissim in nibh. Vestibulum consequat, massa sit amet vulputate elementum, nisl mauris tempus velit, bibendum condimentum enim tortor eu dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ante elit, elementum at arcu in, pulvinar gravida nisl. Nulla blandit lobortis pharetra. Sed in cursus enim, in egestas enim. Curabitur tincidunt magna consectetur interdum porta.

Ut vulputate sodales nunc, a placerat augue suscipit vitae. Mauris mollis, metus et fermentum gravida, nunc ante eleifend dolor, dapibus rutrum ante diam nec quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt lectus. Duis tempus pellentesque est id congue. Curabitur augue elit, egestas ac risus vitae, suscipit varius est. Donec placerat cursus dictum. Aliquam erat volutpat. Quisque orci risus, pretium sit amet ligula id, vehicula pulvinar turpis. Etiam tincidunt nisi magna, eu ultricies dui auctor in. Maecenas elementum risus quis laoreet rhoncus. Aliquam erat volutpat. Sed vehicula dapibus ipsum, sit amet dapibus ex scelerisque eu.

Quisque nec augue erat. Praesent vitae leo vitae libero gravida tincidunt id et lacus. Praesent sit amet velit eu nisl pretium lobortis eget id velit. Curabitur id volutpat dui. Quisque justo turpis, accumsan non malesuada in, commodo sit amet nibh. Nullam dignissim malesuada magna, a luctus neque imperdiet eget. Sed elementum tellus nec iaculis luctus.

Sed eu lectus luctus, fringilla arcu eu, eleifend justo. Nulla ut lorem sit amet justo rhoncus tristique. Praesent porta, velit quis pellentesque dapibus, velit lacus condimentum tellus, at tincidunt magna lacus ac massa. Proin id efficitur enim, scelerisque feugiat diam. Sed in magna non mi eleifend consectetur sed ac libero. Integer et consectetur ipsum, a vestibulum eros. Praesent pretium consectetur semper. Sed mollis lacinia lectus in ornare. Donec nec eleifend erat, sed luctus tortor. Duis in aliquet augue. Ut vestibulum diam non sapien lacinia pulvinar. Donec hendrerit turpis in nisi condimentum fermentum. Integer ut diam in ex suscipit feugiat sed et elit. Suspendisse id libero ac nisl dapibus fringilla in et nisl. Nam tempor viverra ultrices.

Aliquam nisi ex, ornare at nibh in, mattis sodales erat. Maecenas arcu ante, pretium at tellus id, venenatis pulvinar dui. Nam blandit imperdiet libero, non pretium dolor egestas sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam massa nisl, feugiat sed tincidunt eu, pharetra vitae neque. Nulla porttitor sem consectetur nulla tincidunt euismod. Fusce vel mi iaculis tellus mattis aliquet. Cras convallis, mi ac hendrerit vestibulum, dolor ligula porttitor metus, sagittis dignissim elit sem in risus. Morbi id tincidunt lacus, sit amet condimentum odio. Nullam at molestie mi, in consectetur tellus. Sed sit amet urna congue arcu tristique eleifend in sed enim. Nullam finibus auctor elit, at tincidunt dolor semper et. Morbi sollicitudin in nunc vel gravida. In hac habitasse platea dictumst.

Proin quam enim, auctor sit amet sem ut, ultrices congue lorem. Nullam tempor placerat vestibulum. Curabitur quis sodales justo, id venenatis massa. Integer arcu ipsum, ornare et volutpat in, feugiat ut tortor. Cras fringilla iaculis nisi, at varius ex aliquet at. Curabitur tempus ullamcorper massa, eget semper massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem dui, vestibulum a vestibulum et, consectetur quis enim. Vivamus id enim et sem commodo eleifend. Sed laoreet, eros ac pharetra ultricies, felis elit imperdiet leo, vitae blandit nunc sem convallis felis. Quisque ultrices venenatis congue. Donec lacinia, tellus a fringilla efficitur, nisl nulla iaculis eros, ut pellentesque justo enim eget lorem. Proin pharetra sed turpis eu tincidunt.

Sed et vestibulum nunc. Aliquam porta ligula sapien, et bibendum lorem posuere aliquet. Integer finibus, orci et pharetra aliquet, dolor nisl condimentum odio, a malesuada nunc tellus sit amet urna. Vivamus laoreet arcu quis facilisis commodo. Praesent id nunc ultricies odio porttitor ullamcorper. Donec eget dapibus massa, a gravida ante. Aenean at mollis est.

Fusce posuere lectus eget semper tempus. Nam viverra ex ac tellus fringilla, id pharetra justo consequat. Ut tristique magna id sapien lacinia porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis velit. Curabitur egestas convallis velit at porttitor. Fusce ultrices dui sit amet quam venenatis pulvinar ac eget erat. Sed cursus nulla a mauris semper, vel accumsan arcu aliquam.

Nulla in nibh eu dolor congue scelerisque et nec enim. Maecenas eu iaculis lectus. Cras porttitor sapien eu erat auctor efficitur. Nulla eu orci sit amet arcu consequat aliquam eu non massa. Nam erat nisi, cursus vitae enim luctus, lobortis sollicitudin velit. Quisque malesuada dolor in mauris fermentum facilisis. Pellentesque dui leo, pharetra quis iaculis eget, fermentum ut enim. Suspendisse potenti. Praesent ornare gravida varius. Vivamus luctus quis tortor ut auctor. Cras sed blandit lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Phasellus interdum, sem nec imperdiet gravida, quam sem elementum felis, eget feugiat purus erat a nunc. Cras vel pretium nibh, at condimentum orci. Mauris metus ex, ullamcorper mollis ultricies eu, luctus non dui. Vivamus sagittis dictum vehicula. Morbi in eros quis dolor congue convallis. Fusce mauris libero, tempor id risus ac, faucibus mattis erat. Etiam venenatis semper maximus. Nullam fringilla aliquet nunc ac suscipit. Vestibulum in mollis sapien, commodo varius mauris. Maecenas aliquam lectus commodo, pharetra elit ut, elementum mi.

Donec sollicitudin, lorem nec viverra eleifend, arcu eros porta nunc, commodo luctus nunc metus quis lectus. Praesent diam risus, pellentesque in ante vel, aliquam interdum turpis. Morbi sodales tincidunt arcu, eu hendrerit ipsum porta eget. Morbi fermentum at turpis a pharetra. Nulla in vehicula est. Nunc tincidunt id purus non aliquam. Suspendisse congue mauris nec nibh commodo facilisis. Pellentesque laoreet non neque vel auctor. Proin a est vehicula, vestibulum lorem a, consectetur urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet ex sit amet lorem vestibulum feugiat. Morbi vitae pellentesque sapien, ut semper purus. Morbi iaculis ligula gravida, pretium velit non, semper justo. Donec tincidunt leo id risus aliquet, eu tempus mi volutpat. Vivamus ultrices sem eget sagittis feugiat. Aliquam eu libero eu ante laoreet blandit a sit amet erat.

Suspendisse vulputate pellentesque risus eu feugiat. Mauris semper sapien in dolor eleifend, a euismod eros faucibus. Nunc quis iaculis erat. Donec sagittis elementum justo in fringilla. Praesent non ligula lacinia, tincidunt quam eget, mollis turpis. Sed rutrum pulvinar tortor et viverra. Morbi a risus congue, viverra dui nec, consectetur erat. Suspendisse potenti.

Fusce eu orci iaculis, gravida lectus et, pretium neque. Phasellus rhoncus aliquam neque nec dapibus. Nunc ornare sodales lectus id imperdiet. Nulla ultrices dolor lacus, ac porttitor erat eleifend sed. Vestibulum viverra ut sapien vitae lobortis. Suspendisse id commodo nunc. Donec interdum a enim pharetra egestas. Integer sapien eros, volutpat vitae feugiat non, semper convallis ligula. Nulla facilisi.

Nulla at porttitor libero, a faucibus elit. Nulla ut erat a elit egestas tristique. Donec eleifend augue eros, vitae lobortis erat tincidunt ac. Quisque ullamcorper mauris facilisis, scelerisque lacus congue, fermentum eros. Donec leo tellus, interdum eget dignissim vel, ultricies in arcu. Vivamus congue dolor turpis, ut posuere lorem lobortis id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium neque ligula, id semper ligula rutrum vitae. Morbi sit amet tortor velit. Donec metus diam, eleifend ac ex rhoncus, consequat fermentum nulla. Phasellus vitae faucibus dui, in consequat metus. Integer ut eros at tellus tincidunt scelerisque in eget lacus. Maecenas rhoncus eros eu nisi fermentum, eu hendrerit dolor sollicitudin. Maecenas id porta est.

Phasellus tristique faucibus suscipit. In at elit tincidunt, euismod quam quis, dignissim massa. Morbi sed semper sem. Donec scelerisque semper orci. Nulla tincidunt turpis eget est commodo placerat. Curabitur vel odio vel turpis pellentesque tempor. Quisque laoreet tellus in pharetra efficitur. Aliquam leo massa, lobortis eget dui et, lobortis congue erat. Morbi aliquam mi id risus dignissim, ut placerat purus bibendum. Vivamus nec turpis eleifend, condimentum leo at, scelerisque erat.

Suspendisse in leo ut ante efficitur rhoncus id in turpis. Nullam est dui, lacinia ac consequat a, feugiat vitae dolor. Pellentesque mollis condimentum ligula, sit amet aliquet lacus iaculis sed. Phasellus eget est vel enim convallis posuere sed congue nibh. Etiam laoreet convallis risus ut condimentum. Cras suscipit a felis vel iaculis. Aenean eu dolor venenatis, bibendum lorem quis, convallis ex. In sagittis eros magna, vitae dignissim ipsum volutpat a. Donec dictum suscipit justo dictum tincidunt. Aenean id pharetra purus. Suspendisse a felis nisi.

Vestibulum tincidunt, sapien nec feugiat viverra, nulla arcu posuere massa, vel fermentum turpis leo ut urna. Integer accumsan nisl nec mi condimentum, eget luctus diam tristique. Donec sed bibendum velit, nec ultrices turpis. Phasellus ut ex dictum, varius enim tempus, semper elit. Integer convallis massa a malesuada dapibus. Nullam vitae luctus lectus, ac efficitur enim. Nulla mattis, elit id vehicula facilisis, ligula eros luctus augue, et auctor quam lacus eget ipsum. In eget nulla at nisi porttitor pellentesque.

Aenean luctus vulputate dapibus. Maecenas accumsan diam vel porttitor scelerisque. Aenean viverra elementum mi, eu molestie urna venenatis ac. Integer mollis sodales diam non gravida. Aliquam sed mauris at nisi molestie euismod non eu ligula. Etiam at sem sapien. Sed euismod ex vel diam bibendum, ac sollicitudin dui suscipit. Ut aliquet finibus orci, ut tempor arcu sollicitudin at.

Integer mollis vulputate massa eu imperdiet. Vivamus metus mi, maximus sed efficitur et, lacinia ac neque. Suspendisse laoreet, augue sit amet pretium fringilla, odio dolor hendrerit ipsum, a posuere est lacus nec leo. Curabitur dictum leo sed magna pellentesque, sit amet pharetra neque feugiat. Ut eleifend, turpis ut bibendum mattis, ante lacus ultricies ligula, nec hendrerit justo risus quis metus. Proin eleifend dolor eu aliquam aliquet. Integer pretium orci vulputate, blandit nisl at, sagittis neque. Nulla suscipit pellentesque sapien, non sollicitudin dolor consectetur vitae. Ut non nunc et est convallis dictum vel at tellus. Sed eu ligula eget enim porttitor condimentum. Donec rutrum accumsan venenatis. Pellentesque non erat ullamcorper, semper eros nec, posuere ligula. Ut et eros quam.

Fusce finibus commodo eleifend. Integer mattis urna sit amet erat placerat ultrices. Duis malesuada feugiat urna, a rutrum risus venenatis ultricies. Ut tempus turpis at felis finibus posuere. Sed dolor est, eleifend in justo sed, auctor pellentesque urna. Duis nec gravida enim. Nulla facilisi. Vivamus tristique rhoncus nisl, vel iaculis libero dapibus sed.

Mauris sit amet ligula rutrum, maximus quam vitae, commodo neque. Ut viverra lacinia mi, vel elementum mi condimentum vitae. Sed congue in nisl in tristique. Suspendisse sollicitudin enim at elementum laoreet. Vestibulum at arcu ultrices, convallis augue id, pretium leo. Vestibulum libero lacus, suscipit a libero et, ultricies consequat tellus. Nulla iaculis faucibus ex facilisis tempor. Fusce tincidunt nec sem non pellentesque. Donec et dapibus magna. Nullam vestibulum dapibus nunc eget ornare. Maecenas congue turpis vitae ultrices egestas. Donec a leo sed arcu rhoncus pellentesque. Nam nec massa tristique, dapibus magna id, pharetra lectus. Praesent molestie magna nec aliquam bibendum.

Aenean posuere ornare nisi. Nullam in auctor massa. Fusce condimentum rhoncus odio malesuada consequat. In non massa lacinia, dictum dui finibus, blandit risus. In libero dui, tristique a purus a, blandit laoreet turpis. Integer commodo sed tortor eget feugiat. Vivamus egestas accumsan tortor non auctor. Proin accumsan, sapien eget tristique commodo, purus nulla tincidunt arcu, eu mattis est neque sed lacus. Cras iaculis turpis lorem, non convallis diam gravida scelerisque. Aliquam metus enim, suscipit eu egestas eget, bibendum ac risus. Sed laoreet, libero id lobortis porta, augue nibh dignissim neque, non tristique sem elit vitae massa.

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

export default Main;
