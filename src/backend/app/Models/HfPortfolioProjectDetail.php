<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJD_ID
 * @property int $PROJ_ID
 * @property int $LANG_ID
 * @property string $PROJD_TITLE
 * @property string $PROJD_SUBTITLE
 * @property HfPortfolioProject $hfPortfolioProject
 * @property HfLanguage $hfLanguage
 * @property HfPortfolioProjectSession[] $hfPortfolioProjectSessions
 */
class HfPortfolioProjectDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJD_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJ_ID', 'LANG_ID', 'PROJD_TITLE', 'PROJD_SUBTITLE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfPortfolioProject()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProject', 'PROJ_ID', 'PROJ_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectSessions()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectSession', 'PROJD_ID', 'PROJD_ID');
    }
}
