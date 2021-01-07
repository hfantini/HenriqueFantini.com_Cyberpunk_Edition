<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $LANG_ID
 * @property string $LANG_CODE
 * @property boolean $LANG_NOOB
 * @property string $LANG_NOOB_WARNING
 * @property HfAboutBioDetail[] $hfAboutBioDetails
 * @property HfAboutDetail[] $hfAboutDetails
 * @property HfAboutHobbyDetail[] $hfAboutHobbyDetails
 * @property HfAboutInterestDetail[] $hfAboutInterestDetails
 * @property HfAboutProfessionalFlawDetail[] $hfAboutProfessionalFlawDetails
 * @property HfAboutProfessionalVirtueDetail[] $hfAboutProfessionalVirtueDetails
 * @property HfAboutSkillDetail[] $hfAboutSkillDetails
 * @property HfFileTypeDetail[] $hfFileTypeDetails
 * @property HfPortfolioProjectDetail[] $hfPortfolioProjectDetails
 * @property HfPortfolioProjectLang[] $hfPortfolioProjectLangs
 * @property HfPortfolioProjectSessionDetail[] $hfPortfolioProjectSessionDetails
 * @property HfPostContent[] $hfPostContents
 * @property HfResumeCertificateDetail[] $hfResumeCertificateDetails
 * @property HfResumeCourseDetail[] $hfResumeCourseDetails
 * @property HfResumeEducationDetail[] $hfResumeEducationDetails
 * @property HfResumeExperienceDetail[] $hfResumeExperienceDetails
 * @property HfResumeSkillCatDetail[] $hfResumeSkillCatDetails
 */
class HfLanguage extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_language';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'LANG_ID';

    /**
     * @var array
     */
    protected $fillable = ['LANG_CODE', 'LANG_NOOB', 'LANG_NOOB_WARNING'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutBioDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutBioDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutHobbyDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutHobbyDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutInterestDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutInterestDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutProfessionalFlawDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutProfessionalFlawDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutProfessionalVirtueDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutProfessionalVirtueDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutSkillDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutSkillDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfFileTypeDetails()
    {
        return $this->hasMany('HFcom\Models\HfFileTypeDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectDetails()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectLangs()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectLang', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectSessionDetails()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectSessionDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPostContents()
    {
        return $this->hasMany('HFcom\Models\HfPostContent', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeCertificateDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeCertificateDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeCourseDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeCourseDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeEducationDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeEducationDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeExperienceDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeExperienceDetail', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeSkillCatDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeSkillCatDetail', 'LANG_ID', 'LANG_ID');
    }
}
