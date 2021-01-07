<?php

namespace HFcom\Http\Controllers;

use Illuminate\Http\Request;
use \HFcom\Models\HfLanguage;
use \HFcom\Models\HfResumeExperience;
use \HFcom\Models\HfResumeEducation;
use \HFcom\Models\HfResumeLanguage;
use \HFcom\Models\HfResumeCourse;
use \HFcom\Models\HfResumeCertificate;
use \HFcom\Models\HfResumeSkill;
use \HFcom\Models\HfResumeSkillCat;

class ResumeController
{
    public function getResumeData($lang)
    {
        $retValue = null;
        $lang = HfLanguage::select('LANG_ID', 'LANG_CODE')->where("LANG_CODE", $lang)->first();

        if( $lang != null )
        {
            $langId = $lang->LANG_ID;

            $retValue = array(
                'language' => $lang,
                'experience' => HfResumeExperience::with(['hfResumeExperienceDetails' => function($q) use( $langId )
                {
                    $q->with("hfResumeExperienceFunctions")->where("LANG_ID", $langId);
                    
                }])->orderBy("EXP_ID", "DESC")->get(), 
                'education' => HfResumeEducation::with(['hfResumeEducationDetails' => function($q) use ($langId)
                {
                    $q->with("hfResumeEducationStatus")->where("LANG_ID", $langId);

                }])->with(["HfCity" => function($q)
                {
                    $q->with(["HfState" => function($q)
                    {
                        
                        $q->with(["HfCountry"]);

                    }]);

                }])->orderBy("EDU_ID", "DESC")->get(),
                'languages' => HfResumeLanguage::with(['hfResumeLanguageDetails' => function($q) use ($langId)
                {
                    $q->where("LANG_ID", $langId);

                }])->orderBy("RLANG_LEVEL", "DESC")->get(),
                "courses" => HfResumeCourse::with(['hfResumeCourseDetails' => function($q) use ($langId) 
                {
                    $q->where("LANG_ID", $langId);

                }])->with(['hfCity' => function($q)
                {
                    $q->with('hfState');

                }])->orderBy("COU_START", "DESC")->get(),
                "certificates" => HfResumeCertificate::with(['hfResumeCertificateDetails' => function($q) use ($langId) 
                {
                    $q->where("LANG_ID", $langId);
                    
                }])->orderBy("CER_ID", "DESC")->get(),
                "skill_cat" => HfResumeSkillCat::with(['hfResumeSkillCatDetails' => function($q) use ($langId) 
                {
                    $q->where("LANG_ID", $langId);
                    
                }])->orderBy("SKLC_ID", "ASC")->get(),                
                "skill" => HfResumeSkill::orderBy("SKL_FAV", "DESC")->orderBy('SKL_KNOWLEDGE', 'DESC')->get()    
            );
        }

        return $retValue;
    }
}
