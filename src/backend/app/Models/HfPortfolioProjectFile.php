<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJF_ID
 * @property int $PROJ_ID
 * @property int $FILE_ID
 * @property string $PROJF_URL
 * @property HfFileType $hfFileType
 * @property HfPortfolioProject $hfPortfolioProject
 */
class HfPortfolioProjectFile extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_file';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJF_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJ_ID', 'FILE_ID', 'PROJF_URL'];

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
    public function hfPortfolioProject()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProject', 'PROJ_ID', 'PROJ_ID');
    }
}
