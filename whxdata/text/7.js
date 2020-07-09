rh._.exports({"0":["The Output Window"],"1":["Output Window,Search Results,Breakpoints"],"2":["search results,source control,breakpoints,syntax errors,compile errors,output,compiler output"],"3":["\n  ","\n  ","\n  ","\n  ","When you open a project in GameMaker Studio 2 for the first time, you will be presented with the ","Output Window ","docked at the bottom of the screen. This docked window contains various tabs that show the different output information for\n    your project, depending on certain circumstances. The dock can be closed by clicking the button at the bottom of the ","IDE",", and you can click "," and drag any tab in the docked window to another dock to change its position, or you can click "," on the dock contents bar and drag it\n    into the workspace to create a stand-alone window:","\n  ","You can also click "," and drag\n    a docked output into another one to create a split view output window, as shown in the example below where the two error outputs have been placed within the same tab (you can slow click "," on a tab to change its name too):","\n  ","You can recover the default state of the IDE at any time by selecting ","Reset Layout"," from the ","Layouts Window"," and\n    you can re-open any closed tab from the ","Window Menu",".","\n  ","The default docked tabs are explained below:","\n  ","Output","Output","\n  ","\n    ","The general ","Output ","window is where all compiler output is shown, as well as any messages that you may have added to your game using\n      the ","show_debug_message()"," function. Most of the initial information shown is simply debug information on how the game is being built and\n      as such can generally be ignored. However if you have an issue building your project for a target platform it can prove helpful in finding the cause as well as provide information for Support should you contact them. Note that you can change the\n      quantity of information shown here from the ","Compiling"," section of the ","Preferences",".","\n    "," ","\n  ","\n  ","Search Results","Search Results","\n  ","\n    ","You can open the ","Search And Replace Window"," using the keyboard shortcut  "," / "," +  "," + \" ","F","\",\n      or go to the ","Edit Menu",". Once you have entered your search terms, the results will be shown in this window with the format:","\n    ","[object] - [event] - [Line Number]: [search string]","\n    ","If the search term is found in a script then it will simply be:","\n    ","[script] - [Line Number]: [search string]","\n    ","You can then double-click "," on any of the returned entries to open the given asset at the correct position for editing.","\n    "," ","\n  ","\n  ","Source Control","Source Control","\n  ","\n    ","This window will show all the output for your ","SCM"," plugin. You can find out more about\n      setting up Source Control ","here",".","\n    "," ","\n  ","\n  ","Breakpoints","Breakpoints","\n  ","\n    ","Breakpoints are places in your game code or DnD™ where you have instructed GameMaker Studio 2 to pause the running of the project while in\n      ","Debug Mode",". You can add a breakpoint anywhere in the game loop using the key \" ","F9","\", and when you do it will appear in this output tab. You can enable and disable them (without removing them) by clicking on the checkbox\n        to the left and if you use the right mouse button "," on one then you get a small menu that permits you to remove the breakpoint or open the code/DnD™ window where the breakpoint\n        is located.","\n    "," ","\n  ","\n  ","Syntax Errors","Syntax Errors","\n  ","\n    ","Syntax errors are those errors in your code that the GameMaker Studio 2 ","syntax"," checker\n      has picked up. There are many reasons why you might get a syntax error - like having a \";\" in your code when a \":\" is expected - and these should be fixed before trying to test or compile your game. Each syntax error entry in\n      the output window can be double-clicked using the left mouse button "," to open a window at the position flagged so it can be resolved.","\n    ","Syntax errors will update as you write your code (there will be a short pause between typing something and any errors appearing in this window to prevent errors being reported for unfinished code), and will follow the format:","\n    ","[object] - [event] - [Line Number] - [Position In Line]: [error string]","\n    ","Or if the error is in a script, it will be:","\n    ","[script] - [Line Number] - [Position in line]: [error string]","\n    ","Note that syntax errors will usually prevent the game from being compiled, however there are errors that will be flagged that won't prevent compiling, but that should, nonetheless, be resolved. The errors in question are:","\n    ","\n      ","for declared variables that aren't used anywhere","\n      ","for variables used somewhere that haven't been declared yet","\n    ","\n    ","In general either of these would suggest a ","typo"," in a variable name, or some other kind of easy-to-make error - and so they are flagged for you to revise - but it can also be intentional, as you\n      may have declared the variable for future use, but not got around to actually using it yet. This is why these errors will still permit your game to compile. For a full list of possible syntax error messages, please see ","here",".","\n    "," ","\n  ","\n  ","Compile Errors","Compile Errors","\n  ","\n    ","A Compiler Error happens when your game encounters some type of error that the syntax checker may not have been able to detect, or when an\n      error is related to how you have set up the compile options. When this happens, your game will give you a compiler error and stop running. Any compiler errors will be shown in the General Output window too, but they will also be listed here separately\n      (since they can get \"lost\" in the rest of the general output).","\n    ","The compiler error messages will all follow the same format:","\n    ","[object] - [event] - [Line Number]: [error string]","\n    ","If the error is found in a script then it will simply be:","\n    ","[script] - [Line Number]: [error string]","\n    ","You can then double-click "," on any of the compiler error entries to open the given asset at the position flagged as giving the error. For a full list\n      of possible error messages, please see ","here",".","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Introduction To GameMaker Studio 2","\n        ","Next: ","The Marketplace","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Output Window"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"7"})