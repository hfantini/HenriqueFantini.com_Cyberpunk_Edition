<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $ITRST_ID
 * @property string $ITRST_ICON
 * @property boolean $ITRST_FAVORITE
 * @property HfAboutInterestDetail[] $hfAboutInterestDetails
 */
class HfAboutInterest extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_interest';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'ITRST_ID';

    /**
     * @var array
     */
    protected $fillable = ['ITRST_ICON', 'ITRST_FAVORITE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutInterestDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutInterestDetail', 'ITRST_ID', 'ITRST_ID');
    }
}
