<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $FILE_ID
 * @property string $FILE_ICON_SMALL
 * @property string $FILE_ICON_MEDIUM
 * @property HfFileTypeDetail[] $hfFileTypeDetails
 * @property HfPortfolioProjectFile[] $hfPortfolioProjectFiles
 */
class HfFileType extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_file_type';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'FILE_ID';

    /**
     * @var array
     */
    protected $fillable = ['FILE_ICON_SMALL', 'FILE_ICON_MEDIUM'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfFileTypeDetails()
    {
        return $this->hasMany('HFcom\Models\HfFileTypeDetail', 'FILE_ID', 'FILE_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectFiles()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectFile', 'FILE_ID', 'FILE_ID');
    }
}
