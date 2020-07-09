rh._.exports({"0":["audio_is_playing"],"1":["audio_is_playing"],"2":["audio_is_playing"],"3":["\n  ","\n  ","\n  ","This function will check the given sound to see if it is currently playing. The sound can either be a single instance of a sound (the index for individual sounds being played can be stored in a variable when using the ","audio_play_sound()"," or \n    ","audio_play_sound_at()"," functions) or a sound asset, in which case ","all"," instances of the given sound will be checked and if any of them are playing the function will return ","true"," otherwise\n      it will return ","false",". Note that this function will still return ","true"," if the sound being checked has previously been paused using the ","audio_pause_sound()"," function.","\n  "," ","\n  ","\n  ","audio_is_playing(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sound to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if !audio_is_playing(snd_Waterfall)","    {\n    ","    audio_play_sound_at(snd_Waterfall, x, y, 0, 300, true, 1);","    }\n  ","\n  ","The above code checks to see if the sound indexed in the variable \"snd_Waterfall\" is currently playing and if it returns ","false"," then the sound will be looped at its room position, with a fall-off distance\n    of 300 and a low priority.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_is_paused","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_is_playing"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"675"})