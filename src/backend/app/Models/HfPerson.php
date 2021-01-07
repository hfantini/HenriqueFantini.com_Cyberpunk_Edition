<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PER_ID
 * @property int $CTY_ID
 * @property string $PER_NAME
 * @property string $PER_LASTNAME
 * @property string $PER_PHOTO_SMALL
 * @property string $PER_PHOTO_MEDIUM
 * @property string $PER_PHOTO_LARGE
 * @property HfCity $hfCity
 * @property HfPersonSocial[] $hfPersonSocials
 * @property HfPortfolioProjectPerson[] $hfPortfolioProjectPeoples
 */
class HfPerson extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_person';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PER_ID';

    /**
     * @var array
     */
    protected $fillable = ['CTY_ID', 'PER_NAME', 'PER_LASTNAME', 'PER_PHOTO_SMALL', 'PER_PHOTO_MEDIUM', 'PER_PHOTO_LARGE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfCity()
    {
        return $this->belongsTo('HFcom\Models\HfCity', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPersonSocials()
    {
        return $this->hasMany('HFcom\Models\HfPersonSocial', 'PER_ID', 'PER_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectPeoples()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectPerson', 'PER_ID', 'PER_ID');
    }
}
