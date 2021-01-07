<?php

    namespace HFcom\Http\Controllers;

    use \HFcom\Models\HfLanguage;
    use \HFcom\Models\HfPortfolioProject;
    use \HFcom\Models\HfPortfolioProjectDetails;
    use \HFcom\Models\HfPortfolioProjectLang;
    use \HFcom\Models\HfPortfolioProjectPeople;
    use \HFcom\Models\HfPortfolioProjectTech;
    use \HFcom\Models\HfPortfolioProjectSession;
    use \HFcom\Models\HfPortfolioProjectSessionDetails;
    use \HFcom\Models\HfPortfolioProjectGallery;
    use \HFcom\Models\HfPortfolioProjectFile;
use HFcom\Models\HfPortfolioProjectLinks;

class PortfolioController
    {   
        function getProjects($lang)
        {
            $lang = HfLanguage::select('LANG_ID', 'LANG_CODE')->where("LANG_CODE", $lang)->first();

            if( $lang != null )
            {
                $langId = $lang->LANG_ID;
                $retValue = array(
                    'language' => $lang,
                    'projects' => HfPortfolioProject::with( ['hfPortfolioProjectDetails' => function($q) use( $langId ) 
                    {
                        $q->where("LANG_ID", $langId);
                    }])->orderBy("PROJ_ID", "DESC")->get()
                );
            }

            return $retValue;
        }

        function getProjectDetail($lang, $id)
        {
            $lang = HfLanguage::select('LANG_ID', 'LANG_CODE')->where("LANG_CODE", $lang)->first();

            if( $lang != null )
            {
                $langId = $lang->LANG_ID;
                $retValue = array(
                    'language' => $lang,
                    'project' => HfPortfolioProject::with( ['hfPortfolioProjectDetails' => function($q) use( $langId ) 
                    {
                        $q->where("LANG_ID", $langId);
                    }])->WHERE("PROJ_ID", $id)->get(),
                    'planguage' => HfPortfolioProjectLang::with( ['hfLanguage' => function($q) use( $langId ) 
                    {

                    }])->WHERE("PROJ_ID", $id)->get(),
                    'people' => HfPortfolioProjectPeople::with( ['hfPerson' => function($q)
                    {
                        $q->with( ['hfPersonSocials' => function($q)
                        {
                            $q->with("hfSocialnetwork");    
                        }]);

                    }])->WHERE("PROJ_ID", $id)->get(),
                    'tech' => HfPortfolioProjectTech::with('hfResumeSkill')->where("PROJ_ID", $id)->get(),
                    'sessions' => HfPortfolioProjectSession::with( ['hfPortfolioProjectSessionDetails' => function($q) use( $langId ) 
                    {
                        $q->where("LANG_ID", $langId);

                    }])->where("PROJ_ID", $id)->get(),
                    'gallery' => HfPortfolioProjectGallery::with("hfMediaType")->where("PROJ_ID", $id )->get(),
                    'files' => HfPortfolioProjectFile::with( ["hfFileType" => function($q) use( $langId )
                    {
                        $q->with( ["hfFileTypeDetails" => function($q) use( $langId )
                        {
                            $q->where('LANG_ID', $langId);
                        }]);
                    }])->where("PROJ_ID", $id )->get(),
                    'links' => HfPortfolioProjectLinks::with("hfLinkType")->where("PROJ_ID", $id)->get()
                );
            }

            return $retValue;
        }
    }

?>
