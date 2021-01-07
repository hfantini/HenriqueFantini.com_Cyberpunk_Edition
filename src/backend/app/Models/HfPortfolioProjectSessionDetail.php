<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJSD_ID
 * @property int $PROJS_ID
 * @property int $LANG_ID
 * @property string $PROJS_TITLE
 * * @property string $PROJS_ICON
 * @property string $PROJS_HTML
 * @property HfPortfolioProjectSession $hfPortfolioProjectSession
 * @property HfLanguage $hfLanguage
 */
class HfPortfolioProjectSessionDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_session_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJSD_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJS_ID', 'LANG_ID', 'PROJS_TITLE', 'PROJS_HTML'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfPortfolioProjectSession()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProjectSession', 'PROJS_ID', 'PROJS_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }
}
