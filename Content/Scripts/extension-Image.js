"use strict";

function main(){
    const UMG = require("UMG");
    const I = require('instantiator');
    const EMaker = require("editor-maker");
    
    //menu group settings
    if(!global.editorGroup){
        global.editorGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Samples");
    }

    //let texture = 

    //Editor window with tab simple template
    EMaker.tabSpawner(
        {
            DisplayName:"Sample Image",
            TabId: "SampleImage@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(
            UMG.div(
                {},
                UMG.span(
                    {},
                    UMG(UImage,
                    {
                        Brush:{
                            ImageSize:{X:248,Y:138},
                            ResourceObject:UObject.Load("/Game/Image")
                        }
                    })
                ),
                UMG.span(
                    {},
                    UMG.img({Brush:{ResourceObject:UObject.Load("/Game/Image")}})
                )
            )
        )
    )

    //deconstructor
    return () => {
        
    };
}

// bootstrap to initiate live-reloading dev env.
try {
    module.exports = () => {
        let cleanup = null

        // wait for map to be loaded.
        process.nextTick(() => cleanup = main());

        // live-reloadable function should return its cleanup function
        return () => cleanup()
    }
}
catch (e) {
    require('bootstrap')('extension-Image')
}