<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $STA_ID
 * @property int $CTR_ID
 * @property string $STA_NAME
 * @property HfCountry $hfCountry
 * @property HfCity[] $hfCities
 */
class HfState extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_state';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'STA_ID';

    /**
     * @var array
     */
    protected $fillable = ['CTR_ID', 'STA_NAME'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfCountry()
    {
        return $this->belongsTo('HFcom\Models\HfCountry', 'CTR_ID', 'CTR_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfCities()
    {
        return $this->hasMany('HFcom\Models\HfCity', 'STA_ID', 'STA_ID');
    }
}
