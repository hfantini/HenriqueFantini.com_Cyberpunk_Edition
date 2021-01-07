<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PFF_ID
 * @property HfAboutProfessionalFlawDetail[] $hfAboutProfessionalFlawDetails
 */
class HfAboutProfessionalFlaw extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_professional_flaw';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PFF_ID';

    /**
     * @var array
     */
    protected $fillable = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutProfessionalFlawDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutProfessionalFlawDetail', 'PFF_ID', 'PFF_ID');
    }
}
