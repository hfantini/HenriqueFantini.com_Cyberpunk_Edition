<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJ_ID
 * @property int $PROJST_ID
 * @property string $PROJ_STARTDATE
 * @property string $PROJ_ENDDATE
 * @property string $PROJ_CURRENT_VERSION
 * @property string $PROJ_IMG_LARGE
 * @property string $PROJ_IMG_MEDIUM
 * @property string $PROJ_IMG_SMALL
 * @property HfPortfolioProjectStatus $hfPortfolioProjectStatus
 * @property HfPortfolioProjectDetail[] $hfPortfolioProjectDetails
 * @property HfPortfolioProjectFile[] $hfPortfolioProjectFiles
 * @property HfPortfolioProjectGallery[] $hfPortfolioProjectGalleries
 * @property HfPortfolioProjectLang[] $hfPortfolioProjectLangs
 * @property HfPortfolioProjectPerson[] $hfPortfolioProjectPeoples
 * @property HfPortfolioProjectTech[] $hfPortfolioProjectTeches
 */
class HfPortfolioProject extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJ_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJST_ID', 'PROJ_STARTDATE', 'PROJ_ENDDATE', 'PROJ_CURRENT_VERSION', 'PROJ_IMG_LARGE', 'PROJ_IMG_MEDIUM', 'PROJ_IMG_SMALL'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfPortfolioProjectStatus()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProjectStatus', 'PROJST_ID', 'PROJST_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectDetails()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectDetail', 'PROJ_ID', 'PROJ_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectFiles()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectFile', 'PROJ_ID', 'PROJ_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectGalleries()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectGallery', 'PROJ_ID', 'PROJ_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectLangs()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectLang', 'PROJ_ID', 'PROJ_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectPeoples()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectPerson', 'PROJ_ID', 'PROJ_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectTeches()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectTech', 'PROJ_ID', 'PROJ_ID');
    }
}
