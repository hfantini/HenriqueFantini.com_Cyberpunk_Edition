<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJS_ID
 * @property int $PROJD_ID
 * @property int $PROJS_ORDER
 * @property HfPortfolioProjectDetail $hfPortfolioProjectDetail
 * @property HfPortfolioProjectSessionDetail[] $hfPortfolioProjectSessionDetails
 */
class HfPortfolioProjectSession extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_session';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJS_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJD_ID', 'PROJS_ORDER'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfPortfolioProjectDetail()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProjectDetail', 'PROJD_ID', 'PROJD_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectSessionDetails()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectSessionDetail', 'PROJS_ID', 'PROJS_ID');
    }
}
