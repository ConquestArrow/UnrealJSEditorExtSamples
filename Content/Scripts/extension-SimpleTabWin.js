module.exports = function (){
    const UMG = require("UMG");
    const I = require('instantiator');
    const EMaker = require("editor-maker");
    
    //menu group settings
    if(!global.editorGroup){
        global.editorGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Samples");
    }

    //Editor window with tab simple template
    EMaker.tabSpawner(
        {
            DisplayName:"Simple Tab Win",
            TabId: "SimpleTabWin@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(UMG.text({},"test"))
    )

    //deconstructor
    return () => {
        
    };
}