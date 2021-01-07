<?php

    namespace HFcom\Http\Controllers;

    class BlogController
    {
        public function obtainAllPosts()
        {
            return \HFcom\Models\hf_blogpost::all();
        }
    }

?>
