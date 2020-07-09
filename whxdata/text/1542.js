rh._.exports({"0":["camera_get_view_angle"],"1":["camera_get_view_angle"],"2":["camera_get_view_angle"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the angle of the given camera. The return value will be between 0 and 360. Note that this function is ","only"," valid for cameras created using ","camera_create_view()","    or for those added in the room editor.","\n  "," ","\n  ","\n  ","camera_get_view_angle(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var ang = camera_get_view_angle(view_camera[0]);"," if ang != 0","     {\n    ","     camera_set_view_angle(view_camera[0], 0);","     }\n  ","\n  ","The above code retrieves the angle of the camera assigned to view port[0] and then checks this to see if it matches the given value. If it does not then the view camera is set to that angle.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_get_view_target","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["camera_get_view_angle"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1542"})