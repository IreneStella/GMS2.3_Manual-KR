rh._.exports({"0":["Sequences"],"1":["Sequences Editor"],"2":["sequences,dope sheet,sequences editor,parameter tracks,asset tracks,playhead"],"3":["\n  ","\n  ","\n  ","\n  ","A ","sequence ","is essentially a collection of assets that perform a dynamic animation over time. They can contain sprites, instances, sounds and other things, and each of these can be set to move or change colour, or start/stop animating\n    over time within the sequence itself. The assets you add are assigned to specific ","tracks ","within the sequence and these tracks can then have different attributes applied to them - called ","keyframes"," - which can be static\n    or change over time. All editing of a sequence takes place in the ","Sequence Editor"," which is essentially comprised of three areas:","\n  ","\n    ","the ","Canvas ","- where you place the assets that make up the sequence","\n    ","the ","Track Panel ","- where you add/remove ","asset tracks"," and ","parameter tracks"," to your sequence","\n    ","the ","Dope Sheet"," - where you add/remove/edit the ","keyframes"," of the tracks and control how they behave over time.","\n  ","\n  ","Note too that you can have sequences within sequences to create complex animations and effects, and sequences can also be accessed and changed through code to give you as much control as possible over how they will be displayed and used in your game.\n    For more information on the coded aspect of sequences, please see the section on the ","Sequences Functions",".","\n  ","Before continuing to explain the details of the editor, we'll take a moment to explain how a sequence is created as well as some keywords that are used in the descriptions so you'll have a more thorough understanding of how the Sequences Editor\n    works. The general workflow for creating a sequence is as follows:","\n  ","\n    ","First you'd create your sequence from the ","Asset Browser",", which will open it the Sequences Editor.","\n    ","Next you'd drag an asset (sprite, object, sound or sequence) into the editor canvas.","\n    ","This will create an ","asset track"," in the ","Track Panel",", and add an ","asset key"," to the ","Dope Sheet",". The asset track is simply the name of the track that contains the asset, while the asset key is a bar that is drawn to symbolise the number of frames that the asset will be animated over in the sequence.","\n    ","At this point, you'll usually want to position the asset in the canvas at its initial position for the start of the sequence, and add in any initial transforms, like scale or rotation.","\n    ","When you are happy with the initial settings, you will want to record the ","parameter keys"," (or ","keyframe","s",") - which is simply the name given to\n      the values for scale, rotation and position that a specific asset key has at a any point in the dope sheet timeline.","\n    ","Next you'd change the position of the ","playhead"," (the current play position in the dope sheet timeline) and then move or change the asset transforms and record another parameter key.","\n    ","All parameter keys are stored in additional ","parameter tracks"," which are a subset of tracks under the main asset track in the Track Panel, and you can edit the parameter key data for\n      each parameter in the track editor.","\n    ","Now you would repeat the above process for the length of the sequence, moving, rotating and scaling the asset as required, and then adding more assets as you need them.","\n  ","\n  ","Below you can find an overview of each of the features of the sequence editor, and at the bottom of this page are links to pages that explain the three main features mentioned above in more depth:","\n  "," ","\n  ","Rulers / Guides","Rulers / Guides","\n  ","\n    ","The rulers along the edge of the canvas show you the position of the things that are placed within it, and are marked from (0, 0) which is the center of the canvas and the default origin for the sequence. You can click and drag on the rulers to pull\n      a horizontal or vertical ","guide ","into the sequence, and this guide can then be used to accurately position the different assets that are being used, as moving an asset close to one will \"snap\" it to the guide. While positioning\n      assets within the sequence, ","smart guides"," will also be temporarily shown indicating the distance between assets, as well as the distance from the sequence boundary or center point.","\n    ","Note that the boundary of the sequence and the center point marker lines for the sequence are also considered\n      guides and will behave the same way as guides added from the rulers, with the exception that they cannot be edited.","\n    ","The distance that assets \"snap\" to guides, as well as other properties, can be set in the ","Sequences Preferences",".","\n    "," ","\n  ","\n  ","Canvas View","Canvas View","\n  ","\n    ","The canvas view is where you can see a preview of the sequence canvas, and is where you can edit and position the different assets that make up your sequence. You can add an asset to the sequence by simply dragging it from the asset browser and then\n      dropping it into the canvas, and this will create a new track in the Track Panel, and also add an asset key for the asset at the current timeline playhead position. The following assets can be dropped onto the canvas in this way:","\n    ","\n      ","Sprites","\n      ","Objects","\n      ","Sounds","\n      ","Sequences","\n    ","\n    ","Each asset added to the canvas can be manipulated in multiple ways - rotated, transformed, or translated - based on how you interact with it, as each asset will have a ","bounding box"," and ","transform ","gizmos","      as well as ","bounding box controls",". All this is explained in more detail on the page about the ","Sequence Editor Canvas",".","\n    ","NOTE",": Sound assets when added to a sequence are essentially sound ","emitters ","that play only the given sound resource.","\n    ","To navigate around the canvas view, you can use the same basic controls as for general Workspaces, ie: Use the middle mouse button "," and drag to pan the canvas (or alternatively\n      use the "," + "," combination), and you can scroll horizontally with the\n      mouse wheel "," or zoom in and out using the "," / "," key and the mouse wheel ",". You can also cut, copy and paste assets using the "," / "," + \"","X","\", "," / "," + \"","C","\" and "," / "," + \"","V","\" key combinations.","\n    "," ","\n  ","\n  ","Broadcast Message","Broadcast Message","\n  ","\n    ","This button will add a ","broadcast message"," to the sequence timeline in the ","dope sheet",", opening a dialog where you can add the message to be broadcast. The message will be added wherever the timeline playhead is in the\n      dope sheet and consists of a simple string that can be picked up in the ","Asynchronous System Event"," when it is triggered and then acted on.","\n    ","Once added, the message will be shown in the Dope Sheet, and you can click the right mouse button "," on it to open a menu where you can delete the message or edit it. For more information on Broadcast Messages please see ","here",".","\n    "," ","\n  ","\n  ","Keyframe Control","Keyframe Control","\n  ","\n    ","The keyframe control buttons are one of the ways that you can add, remove or edit specific keys in the dope sheet. The buttons are as follows:","\n    ","\n      "," - This is the \"Split selected keys\" button. When you have selected one or more parameter keys in the dope sheet, you can then click this button and they will\n        be split into two separate keys at the timeline playhead position:","\n        ","\n      "," - This is the \"Delete selected keys\" button. When you have selected one or more parameter keys in the dope sheet, you can then click this button and they will\n        be deleted:","\n        ","\n      "," - This is the \"Record a new key\" button. When you have selected an asset key in the dope sheet and press this button, new parameter keys will be added to the asset\n        track as parameter tracks, and the parameter keys will be added as points in the dope sheet timeline at the playhead position:","\n        ","\n      "," - This is the \"Automatically Record Changes\" button. When this is enabled, any changes made to the asset within the canvas will be automatically recorded and\n        the appropriate parameter tracks and parameter keys added at the playhead position in the dope sheet. For example, if you move the playhead from frame 0 to frame 10 and then in the canvas move the asset 100 pixels to the right, a parameter track\n        will be added for position, and the parameter keys will be added at frame 0 (the initial position) and at frame 10 (the playhead position) and when you press \"Play\" on the sequence, the asset will move 100px to the right over ten frames.","\n        ","\n    ","\n  ","\n  ","Sequence Events","Sequence Events","\n  ","\n    ","In a similar way to regular objects, sequences can have events that can run some code assigned to them. The code is assigned in the form of a ","scripted function"," which can take no\n      arguments and will be called when the event is triggered.","\n    ","Events are added by clicking the ","Add Event"," button "," which will open the following window:","\n    ","\n    ","The events listed here are as follows:","\n    ","\n      ","Create ","- This event happens when an instance of the sequence is first created, and is the very first thing that happens within a sequence placed in the room through the room editor when a room is entered.","\n      ","Destroy ","- This event is executed when an instance of the sequence is destroyed, and will be run before the Clean Up event (see below).","\n      ","Clean Up"," - This event will be called after any event that removes an instance of the sequence from the room. So, it will be triggered if the sequence is destroyed, if the room ends, or if the game ends, and is designed to perform\n        any task that you need performed once when the sequence instance is removed from the game for any reason. If you have destroyed the sequence instance using, for example, layer_sequence_destroy(), then this event will be called after the Destroy\n        Event (see above).","\n      ","Begin Step"," / ","Step ","/ ","End Step"," - The Step Event is an event that is checked every single step (frame) of the game while the sequence instance exists, and is split into three parts: begin, step and\n        end. For most things the standard step event will be fine to use, but sometimes you want a bit more control over what code runs and at what time, so for that you are provided with the Begin and End step events, and these events will always be\n        triggered in the same order every step (frame) of the game. ","Important!"," If the sequence is paused then these events will ","not ","be triggered, and when play resumes they will be triggered the ","next frame after the sequence starts playing again",".\n        Also note that the order of events is not influenced by the playhead direction, and even if the sequence is playing backwards, the events will still be run as Begin, Step and End.","\n      ","Async Event",": This is the equivalent of the object ","Asynchronous System Event",". ","Important!"," If the sequence is paused then this event will ","not ","be triggered.","\n    ","\n    ","Each event can be assigned a single function which will be called when the event is triggered. You can assign the function using the input box for the vent, and clicking the arrow button  will open the script editor for the function to be edited.\n      You can also click the Create New button at the bottom to create a new script resource with \"boilerplate\" functions already defined and ready to be filled in. Note that you can change the function names to anything you require and do not\n      have to use the predefined names, and you can also remove any function definitions that you don't need. It is important note that functions used for sequence events cannot take any arguments.","\n    ","Sequence events can also be added and edited using code. For more information please see ","here",".","\n    "," ","\n  ","\n  ","Sequence Moments","Sequence Moments"," ","\n  ","\n    ","A sequence ","moment ","is a position on the timeline where the sequence can call a function. This is a ","scripted function"," that must have no parameters and when the moment\n      (frame) given on the timeline is reached, this function will be called. To set a moment, you simply move the playhead to the required position and then click the ","Add Moment"," button, and in the dialog that opens you give the name\n      of the function to call.","\n    ","When adding a moment function, you can click the "," button to go to the script with the specified function, or you can click the "," button to create a new script resource with an empty function\n      ready for editing. You can also remove moment and the function call it contains by clicking the "," button.","\n    ","Sequence moments can also be added and edited using code. For more information please see ","here",".","\n    "," ","\n  ","\n  ","Track Panel","Track Panel","\n  ","\n    ","The ","Track Panel"," is where each of the assets in your sequence is listed as a track, with each track having sub-tracks for any parameters that are being changed for the asset. You can click "," and drag on any asset track to change it's position above or below the other tracks (any assigned parameter tracks will move along with it), and you can use "," / "," + "," to select multiple tracks.","\n    ","You can create a track by dragging an asset from the Asset Browser (either a sprite, an object, a sound or a sequence) into the sequence canvas, or you can click the "," icon at the bottom to add a new track and select the asset to use from the Asset Explorer window that opens. The new track will be created and the asset added at the current playhead position within the dope sheet timeline:","\n    ","The track editor has many other features that are discussed in full detail on the following page:","\n    ","\n      ","The Track Panel","\n    ","\n    "," ","\n  ","\n  ","Toolbox","Toolbox","\n  ","\n    ","The Sequence Editor toolbox contains the different visualisation and setup options for the sequence being edited.","\n    ","\n      ","Toggle Canvas Grid"," ",": This will toggle on/off the Sequence Editor canvas grid. This is a grid that GameMaker Studio 2 draws over the\n        preview canvas to divide it into sections, and by default is set to 32x32px in size. However if you click the Grid Menu icon "," you\n        will open the grid options:","\n        ","These options permit you to set the grid colour and alpha, as well as the cell values for the grid along the X and\n        Y axis. You also have an option to enable or disable grid snapping here (disabled by default). You can use the keyboard shortcuts \"G\" and "," + \"G\" to toggle the grid visibility and grid snapping respectively.","\n      ","Canvas Zoom Controls"," ",": These buttons control the current canvas zoom level. You can zoom in or out and\n        clicking the "," button will reset the canvas to be 1:1 with the sequence being edited. You can also click the Window Fit button "," to make the entire sequence canvas fit within the current editor workspace (this will zoom in/out as appropriate to make it fit). Note that you can also zoom in and out using the\n        "," / "," and the Mouse Wheel ",", and pressing "," / "," + "," will set the canvas to be 1:1 with the display.","\n      ","Toggle Gizmos"," ",": Clicking this will enable or disable the different ","gizmos","        visible in the canvas. When enabled you will see all the gizmos associated with the different assets and the canvas itself, and when disabled these will not be shown, giving a clearer view of how the sequence looks. Note that this is enabled by\n        default, and there is a menu available from the right options button "," where you can filter what is visible without having to disable all the different\n        widgets together. A complete list of these filter options and an explanation of what they do can be found ","here",".","\n      ","T","oggle Transform Gizmo Mode"," ",": Each asset added to a sequence has a transform gizmo at its origin:","\n        ","This gizmo can control how the asset is scaled or rotated, as well as control its position and the position\n        of the origin of the asset, however it only shows one of these options at a time. Clicking this button will switch between the different widget types or you can click on the options menu "," to directly select the type of control action you want the transform gizmo to perform.","\n      ","Toggle Canvas Frame"," ",": This button can be used to toggle the canvas frame on or off (it is on by default). The canvas frame is\n        simply a guide that is used to judge where elements are placed in sequence canvas and any elements outside of the frame will not be rendered. This button also has the following options menu ",":","\n        ","Here you can set the canvas frame toggle as well as the size of the canvas. You also have the possibility of setting\n        a ","reference image",", which is an image that you select from your computer (it is not imported into the project) to be used as a background reference for the sequence. This image is only visible in the Sequence Editor itself and\n        will not be rendered when the sequence is used in a project. If you add a reference image you can also set the opacity that it's drawn at and offset its position within the canvas frame.","\n    ","\n    "," ","\n  ","\n  ","Sequence Controls","Sequence Controls","\n  ","\n    ","This bar has the various sequence playback controls:","\n    ","\n    ","\n      ","Playback Speed",": this is the playback speed of the sequence in frames (steps) per second.","\n      ","Playhead Position",": this is the current playhead position, and can be shown in time (h:m:s) or frames (f).","\n      ","Time Display Options",": here you can set whether to display the sequence times in hours, minutes and seconds (h:m:s) or frames (f).","\n      ","Broadcast Message",": Clicking this permits you to add a ","broadcast message"," at the current playhead position (this is explained in more detail earlier on this page and you can find further information ","here","        too).","\n      ","Add Moment",": Clicking this permits you to add a sequence ","moment"," at the current playhead position (this is explained in more detail earlier on this page).","\n      ","Playback Controls",": with these buttons you can start and stop the sequence preview, as well as move the playhead to the start or the end. There is also a button to set whether the sequence should loop or not, and whether the sequence\n        should \"ping-pong\" or repeat when looping. Note that this setting ","will"," affect how the sequence is played when the project is compiled and run.","\n      ","Sequence Length",": this displays the total possible length of the sequence in frames (f) or in time (m:h:s). Note that the sequence may not run to this length if you have set the clip region to be smaller.","\n    ","\n    "," ","\n  ","\n  ","Dope Sheet","Dope Sheet","\n  ","\n    ","The ","Dope Sheet"," is where all the ","asset key"," and ","parameter key","s"," for each track\n      are shown. You can click "," and drag keys left or right to position them within the dope sheet timeline, and you can also click "," on the right edge of an asset key to change its length. Note that for sprites and objects, setting the length to be longer than the animation will cause the animation\n      to loop over the extra frames. The dope sheet also has controls for setting the start and end of the clip region for the sequence, and you can click "," anywhere to set the playhead to that position. For more information on how to use the dope sheet, please see the following page:","\n    ","\n      ","Using The Dope Sheet","\n    ","\n    "," ","\n  ","\n  "," ","\n  ","Due to the initial complexity of the sequence editor, we have only given a brief overview of the features available here, but we have additional pages listed below that go into more depth about its features and how they can be used:","\n  ","\n    ","The Sequence Canvas","\n    ","The Track Panel","\n    ","Clipping Masks","\n    ","Using The Dope Sheet","\n    ","Using Animation Curves","\n    ","Broadcast Messages","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Asset Editors","\n        ","Next: ","Shaders","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Sequences Editor"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"112"})