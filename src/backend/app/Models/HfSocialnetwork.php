<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $SOC_ID
 * @property string $SOC_TITLE
 * @property string $SOC_LOGO_SMALL
 * @property string $SOC_LOGO_MEDIUM
 * @property HfPersonSocial[] $hfPersonSocials
 */
class HfSocialnetwork extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_socialnetwork';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'SOC_ID';

    /**
     * @var array
     */
    protected $fillable = ['SOC_TITLE', 'SOC_LOGO_SMALL', 'SOC_LOGO_MEDIUM'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPersonSocials()
    {
        return $this->hasMany('HFcom\Models\HfPersonSocial', 'SOC_ID', 'SOC_ID');
    }
}
