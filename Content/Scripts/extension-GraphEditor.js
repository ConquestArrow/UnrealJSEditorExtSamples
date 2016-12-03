"use strict";

function main(){
    const UMG = require("UMG");
    const I = require('instantiator');
    const EMaker = require("editor-maker");
    
    //menu group settings
    if(!global.editorGroup){
        global.editorGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Samples");
    }

    //get engine
    const GEngine = Root.GetEngine();


    const SmallFontSetting = {
        FontObject:GEngine.SmallFont,
        Size:10
    }
    const btnFColor = new LinearColor()
    btnFColor.R = btnFColor.G = btnFColor.B = 0;
    btnFColor.A = 100;

    const TinyFontSetting = {
        FontObject:GEngine.TinyFont,
        Size:10
    }
    const MediumFontSetting = {
        FontObject:GEngine.MediumFont,
        Size:10
    }
    const SubtitleFontSetting = {
        FontObject:GEngine.SubtitleFont,
        Size:10
    }
    const LargeFontSetting = {
        FontObject:GEngine.LargeFont,
        Size:10
    }

    //Editor window with tab simple template
    EMaker.tabSpawner(
        {
            DisplayName:"Sample GraphEditor",
            TabId: "SamplelGraphEditor@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(
            UMG.div(
                {'slot.size.size-rule':ESlateSizeRule.Fill},
                UMG(JavascriptGraphEditor,{
                    	TitleName:"Sample Graph",
                        $link:elem => {
                            
                        }
                })
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
    require('bootstrap')('extension-GraphEditor')
}