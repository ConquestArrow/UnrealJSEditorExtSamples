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
            DisplayName:"Sample Text",
            TabId: "SampleText@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(
            UMG.div(
                {},
                //suger-syntaxes
                UMG.text({},"UMG.text()"),
                UMG(TextBlock,{Text:"UMG(TextBlock,{Text:\"text\"})"}),
                //font settings
                UMG.text({Font:TinyFontSetting},"TinyFont text (10)"),
                UMG.text({Font:SmallFontSetting},"SmallFont text (10)"),
                UMG.text({Font:MediumFontSetting},"MediumFont text (10)"),
                UMG.text({Font:SubtitleFontSetting},"SubtitleFont text (10)"),
                UMG.text({Font:LargeFontSetting},"LargeFont text (10)")
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
    require('bootstrap')('extension-Text')
}