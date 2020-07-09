rh._.exports({"0":["font_get_uvs"],"1":["font_get_uvs"],"2":["font_get_uvs"],"3":["\n  ","\n  ","\n  ","This function returns an ","array"," with the UV coordinates for the font texture on the texture page, filling in the array with the following values:","\n  ","\n    ","[0] = left","\n    ","[1] = top","\n    ","[2] = right","\n    ","[3] = bottom","\n  ","\n  ","This value can then be used in other draw functions, particularly in general drawing when using ","primitives"," as well as the ","Shader"," functions.","\n  "," ","\n  ","\n  ","font_get_uvs(font);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","font","\n        ","The index of the font to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Array","\n  "," ","\n  ","\n  ","var tex = font_get_uvs(fnt_Main);"," tex_left = tex[0];"," tex_top = tex[1];"," tex_right = tex[2];"," tex_left = tex[3];","\n  ","The above code will store the UV coordinates for the given background in a local array and then assign the values to instance variables.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fonts","\n        ","Next: ","font_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["font_get_uvs"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"845"})