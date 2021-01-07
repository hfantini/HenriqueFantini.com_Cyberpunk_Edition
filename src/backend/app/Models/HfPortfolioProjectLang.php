<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJL_ID
 * @property int $PROJ_ID
 * @property int $LANG_ID
 * @property HfPortfolioProject $hfPortfolioProject
 * @property HfLanguage $hfLanguage
 */
class HfPortfolioProjectLang extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_lang';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJL_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJ_ID', 'LANG_ID'];

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
}
