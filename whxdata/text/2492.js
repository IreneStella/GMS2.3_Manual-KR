rh._.exports({"0":["xboxlive_stats_add_user"],"1":["xboxlive_stats_add_user,achievement_stat_event"],"2":["xboxlive_stats_add_user,achievement_stat_event"],"3":["\n  ","\n  ","\n  ","This function can be used to add a given user ID pointer to the statistics manager. This must be done before using any of the other stats functions to automatically sync the game with the XBox Live server and retrieve the latest values. You supply the\n    user ID as returned by (for example) the function ","xboxlive_get_user()",", and the function will will return -1 if there was an error or if the user ID is invalid, or any other value if\n    the function was successfully called.","\n  ","The function will generate a callback which will trigger a ","System Asynchronous Event",". This event will have the special DS map ","async_load","    which should then be parsed for the following keys:","\n  ","\n    ","\"","id","\" - Will hold the constant ","achievement_stat_event","\n    ","\"","eventname","\" - Will hold the string \"","LocalUserAdded","\"","\n    ","\"","userid","\" - The user ID associated with the request","\n    ","\"","error","\" - 0 if successful, some other value if there has been an error","\n    ","\"","errormessage","\" - A string with an error message, if any is available","\n  ","\n  "," ","\n  ","\n  ","xboxlive_stats_add_user(user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID (a pointer) to add","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","for(var i = 0; i < xboxlive_get_user_count(); ++i;)","     {\n    ","     user_id[i] = xboxlive_get_user(i);","     xboxlive_stats_add_user(user_id[i]);\n    ","     }\n  ","\n  ","The above code will get the number of user accounts available then loop through them and assign the account ID to an array, as well as register the user with the stats manager.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_remove_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_stats_add_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2492"})