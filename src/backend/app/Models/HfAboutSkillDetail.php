<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $SKLD_ID
 * @property int $SKL_ID
 * @property int $LANG_ID
 * @property string $SKLD_TITLE
 * @property string $SKLD_CONTENT
 * @property HfLanguage $hfLanguage
 * @property HfAboutSkill $hfAboutSkill
 */
class HfAboutSkillDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_skill_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'SKLD_ID';

    /**
     * @var array
     */
    protected $fillable = ['SKL_ID', 'LANG_ID', 'SKLD_TITLE', 'SKLD_CONTENT'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfAboutSkill()
    {
        return $this->belongsTo('HFcom\Models\HfAboutSkill', 'SKL_ID', 'SKL_ID');
    }
}
