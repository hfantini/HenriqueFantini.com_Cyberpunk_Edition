<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJST_ID
 * @property string $PROJST_TITLE
 * @property HfPortfolioProject[] $hfPortfolioProjects
 */
class HfPortfolioProjectStatus extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_status';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJST_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJST_TITLE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjects()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProject', 'PROJST_ID', 'PROJST_ID');
    }
}
