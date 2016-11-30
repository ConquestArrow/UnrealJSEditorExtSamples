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
            DisplayName:"Sample Buttons",
            TabId: "SamplelButtons@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(
            UMG.div(
                {'slot.size.size-rule':ESlateSizeRule.Fill},
                //simplest button
                UMG(Button,{},"default button"),
                //simple button with font decoration
                UMG(Button,{ColorAndOpacity:btnFColor},UMG.text({Font:SmallFontSetting},"decorated text button")),
                //horizontal buttons
                UMG.span({}, UMG(Button,{ColorAndOpacity:btnFColor},"A"), UMG(Button,{ColorAndOpacity:btnFColor},"B")),
                //OnClicked event
                UMG(Button,{OnClicked:_ =>{
                    let design = UMG(JavascriptWindow, 
                        {
                            SizingRule:'AutoSized', 
                            Title:'Modal Window'
                        },
                        UMG.text({Font:SmallFontSetting, Slot:{Size:{SizeRule:ESlateSizeRule.Fill},HorizontalAlignment:EHorizontalAlignment.HAlign_Center}},"button clicked.")
                    )
                    I(design).TakeWidget().EditorAddModalWindow()
                }, ColorAndOpacity:btnFColor},UMG.text({Font:SmallFontSetting},"Open ModalWindow"))
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
    require('bootstrap')('extension-Button')
}