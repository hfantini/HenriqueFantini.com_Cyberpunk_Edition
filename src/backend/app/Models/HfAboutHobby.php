<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $HOB_ID
 * @property string $HOB_ICON
 * @property boolean $HOB_FAVORITE
 * @property HfAboutHobbyDetail[] $hfAboutHobbyDetails
 */
class HfAboutHobby extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_hobby';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'HOB_ID';

    /**
     * @var array
     */
    protected $fillable = ['HOB_ICON', 'HOB_FAVORITE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutHobbyDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutHobbyDetail', 'HOB_ID', 'HOB_ID');
    }
}
