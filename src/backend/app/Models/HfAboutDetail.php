<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $ABT_ID
 * @property int $LANG_ID
 * @property string $ABT_NAME
 * @property string $ABT_TITLE
 * @property string $ABT_BIRTHDATE
 * @property string $ABT_COUNTRY
 * @property string $ABT_CITY
 * @property string $ABT_NATIONALITY
 * @property string $ABT_HEIGHT
 * @property string $ABT_GENDER
 * @property string $ABT_MARITAL
 * @property string $ABT_SCHOOLING
 * @property HfLanguage $hfLanguage
 */
class HfAboutDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'ABT_ID';

    /**
     * @var array
     */
    protected $fillable = ['LANG_ID', 'ABT_NAME', 'ABT_TITLE', 'ABT_BIRTHDATE', 'ABT_COUNTRY', 'ABT_CITY', 'ABT_NATIONALITY', 'ABT_HEIGHT', 'ABT_GENDER', 'ABT_MARITAL', 'ABT_SCHOOLING'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }
}
