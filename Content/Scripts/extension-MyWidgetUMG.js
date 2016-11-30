"use strict";

function main(){
    const UMG = require("UMG");
    const I = require('instantiator');
    const EMaker = require("editor-maker");
    
    //menu group settings
    if(!global.editorGroup){
        global.editorGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Samples");
    }
    
    //load your widget BP
    let my = Blueprint.Load("/Game/myWidgetBP");

    //Editor window with tab simple template
    EMaker.tabSpawner(
        {
            DisplayName:"Sample MyWidget UMG",
            TabId: "SampleMyWidgetUMG@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(
            //set generated class
            UMG(my.GeneratedClass,{})
        )
    )

    //deconstructor
    return () => {
        my = null;
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
    require('bootstrap')('extension-MyWidgetUMG')
}