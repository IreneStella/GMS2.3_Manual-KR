rh._.exports({"0":["game_id"],"1":["game_id"],"2":["game_id"],"3":["\n  ","\n  ","\n  ","This ","read only"," variable returns the unique identifier for the game you have created. You can use this if you need a unique file name, or anything else that needs something to identify your game only. This can be set in the ","Game Options",".","\n  "," ","\n  ","\n  ","game_id","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","ini_open(\"Score.ini\");"," ini_write_real(\"Scores\",\"0\",score + game_id);"," ini_close();\n  ","\n  ","The above code performs a very basic encryption on the score by adding the game_id to it before saving. On reading it back into the game you would deduct the game_id to get the correct value again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Game Control","\n        ","Next: ","game_save_id","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["game_id"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1132"})