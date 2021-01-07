<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $PROJT_ID
 * @property int $PROJ_ID
 * @property int $SKL_ID
 * @property HfPortfolioProject $hfPortfolioProject
 * @property HfResumeSkill $hfResumeSkill
 */
class HfPortfolioProjectTech extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_tech';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJT_ID';

    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['PROJ_ID', 'SKL_ID'];

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
    public function hfResumeSkill()
    {
        return $this->belongsTo('HFcom\Models\HfResumeSkill', 'SKL_ID', 'SKL_ID');
    }
}
