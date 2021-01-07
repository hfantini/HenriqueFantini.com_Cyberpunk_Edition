<?php

namespace HFcom\Http\Controllers;

use Illuminate\Http\Request;
use \HFcom\Models\HfLanguage;
use \HFcom\Models\HfAboutDetail;
use \HFcom\Models\HfAboutBioDetail;
use \HFcom\Models\HfAboutSkill;
use \HFcom\Models\HfAboutProfessionalFlawDetail;
use \HFcom\Models\HfAboutProfessionalVirtueDetail;
use \HFcom\Models\HfAboutHobby;
use \HFcom\Models\HfAboutInterest;

class AboutController
{
    public function getAboutData($lang)
    {
        $retValue = null;
        $lang = HfLanguage::select('LANG_ID', 'LANG_CODE')->where("LANG_CODE", $lang)->first();

        if( $lang != null )
        {
            $langId = $lang->LANG_ID;

            $retValue = array(
                'language' => $lang,
                'detail' => HfAboutDetail::whereHas('hfLanguage', function($q) use( $langId )
                            {
                                $q->where("LANG_ID", $langId);
                            })->get()[0],
                'bio' => HfAboutBioDetail::select('BIOD_CONTENT')->whereHas('hfLanguage', function($q) use( $langId )
                         {
                             $q->where("LANG_ID", $langId);
                         })->get(),
                'skills' => HfAboutSkill::with(['hfAboutSkillDetails' => function($q) use( $langId )
                {
                    $q->where("LANG_ID", $langId);
                }])->get(),
                'flaws' => HfAboutProfessionalFlawDetail::select('PFFD_TITLE', 'PFFD_CONTENT')->whereHas('hfLanguage', function($q) use( $langId )
                         {
                             $q->where("LANG_ID", $langId);
                         })->get(),
                'virtues' => HfAboutProfessionalVirtueDetail::select('PFVD_TITLE', 'PFVD_CONTENT')->whereHas('hfLanguage', function($q) use( $langId )
                {
                    $q->where("LANG_ID", $langId);
                })->get(),    
                'hobbies' => HfAboutHobby::with(['hfAboutHobbyDetails' => function($q) use( $langId )
                {
                    $q->where("LANG_ID", $langId);
                }])->get(),         
                'interests' => HfAboutInterest::with(['hfAboutInterestDetails' => function($q) use( $langId )
                {
                    $q->where("LANG_ID", $langId);
                }])->orderBy('ITRST_FAVORITE', 'DESC')->get(),                                              
            );
        }

        return $retValue;
    }
}
