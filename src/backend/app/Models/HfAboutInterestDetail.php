<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $ITDET_ID
 * @property int $ITRST_ID
 * @property int $LANG_ID
 * @property string $ITDET_NAME
 * @property HfAboutInterest $hfAboutInterest
 * @property HfLanguage $hfLanguage
 */
class HfAboutInterestDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_interest_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'ITDET_ID';

    /**
     * @var array
     */
    protected $fillable = ['ITRST_ID', 'LANG_ID', 'ITDET_NAME'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfAboutInterest()
    {
        return $this->belongsTo('HFcom\Models\HfAboutInterest', 'ITRST_ID', 'ITRST_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }
}
