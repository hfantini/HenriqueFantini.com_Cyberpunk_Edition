<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $FILED_ID
 * @property int $LANG_ID
 * @property int $FILE_ID
 * @property string $FILED_TITLE
 * @property HfFileType $hfFileType
 * @property HfLanguage $hfLanguage
 */
class HfFileTypeDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_file_type_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'FILED_ID';

    /**
     * @var array
     */
    protected $fillable = ['LANG_ID', 'FILE_ID', 'FILED_TITLE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfFileType()
    {
        return $this->belongsTo('HFcom\Models\HfFileType', 'FILE_ID', 'FILE_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }
}
