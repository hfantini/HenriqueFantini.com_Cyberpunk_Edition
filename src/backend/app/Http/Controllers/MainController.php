<?php

namespace HFcom\Http\Controllers;

use Illuminate\Http\Request;
use \HFcom\Models\HfPerson;
use \HFcom\Models\HfPersonSocial;

class MainController
{
    public function getMainData()
    {
        return HfPerson::with("hfPersonSocials.hfSocialnetwork")->where("PER_ID", 1)->get()[0];
    }
}
