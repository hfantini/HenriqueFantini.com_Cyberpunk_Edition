<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $SKL_ID
 * @property string $SKL_ICON
 * @property HfAboutSkillDetail[] $hfAboutSkillDetails
 */
class HfAboutSkill extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_skill';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'SKL_ID';

    /**
     * @var array
     */
    protected $fillable = ['SKL_ICON'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutSkillDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutSkillDetail', 'SKL_ID', 'SKL_ID');
    }
}
