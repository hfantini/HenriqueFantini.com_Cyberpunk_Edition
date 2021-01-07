<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $HOBDT_ID
 * @property int $HOB_ID
 * @property int $LANG_ID
 * @property string $HOBDT_TITLE
 * @property string $HOBDT_CONTENT
 * @property HfAboutHobby $hfAboutHobby
 * @property HfLanguage $hfLanguage
 */
class HfAboutHobbyDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_hobby_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'HOBDT_ID';

    /**
     * @var array
     */
    protected $fillable = ['HOB_ID', 'LANG_ID', 'HOBDT_TITLE', 'HOBDT_CONTENT'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfAboutHobby()
    {
        return $this->belongsTo('HFcom\Models\HfAboutHobby', 'HOB_ID', 'HOB_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }
}
