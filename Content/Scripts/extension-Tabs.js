"use strict";

function main(){
    const UMG = require("UMG");
    const I = require('instantiator');
    const EMaker = require("editor-maker");
    
    //menu group settings
    if(!global.editorGroup){
        global.editorGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Samples");
    }


    if(!global.tabGroup){
        global.tabGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Tabs");
    }


    /**
     * Tab Manager layout JSON
     * 
     * check 
     * - [FLayout](https://docs.unrealengine.com/latest/INT/API/Runtime/Slate/Framework/Docking/FTabManager/FLayout/index.html)
     * - [FArea](https://docs.unrealengine.com/latest/INT/API/Runtime/Slate/Framework/Docking/FTabManager/FArea/index.html)
     * - [FLayoutNode](https://docs.unrealengine.com/latest/INT/API/Runtime/Slate/Framework/Docking/FTabManager/FLayoutNode/index.html)
     * - [FStack](https://docs.unrealengine.com/latest/INT/API/Runtime/Slate/Framework/Docking/FTabManager/FStack/index.html)
     * - [FSplitter](https://docs.unrealengine.com/latest/INT/API/Runtime/Slate/Framework/Docking/FTabManager/FSplitter/index.html)
     * - [ETabState::Type](https://docs.unrealengine.com/latest/INT/API/Runtime/Slate/Framework/Docking/ETabState__Type/index.html)
     */
    let tabLayout = {
        Type:'Layout',
        Name:'Layout',
        PrimaryAreaIndex: 0,
        Areas: [
            {
                Type: 'Area',
                Orientation: 'Orient_Horizontal',
                WindowPlacement: 'Placement_NoWindow',
                "SizeCoefficient": 1,
                Nodes:[
                    {
                        Type: 'Stack',
                        SizeCoefficient : "0.4",
                        HideTabWell: true,
                        Tabs: [
                            {                                
                                TabId: 'Tab1',
                                TabState: 'OpenedTab'
                            }
                        ]
                    },
                    {
                        Type: 'Stack',
                        SizeCoefficient : "0.6",
                        HideTabWell: false,
                        Tabs: [
                            {                                
                                TabId: 'Tab2',
                                TabState: 'OpenedTab'  
                            },
                            {                                
                                TabId: 'Tab3',
                                TabState: 'OpenedTab'  
                            },
                            {                                
                                TabId: 'Tab4',
                                TabState: 'OpenedTab'  
                            }
                        ]
                    }
                ]
            }
        ]
    }

    /** @type {JavascriptEditorTab[]} */
    let tabs = [
        EMaker.tab(
            {
                TabId:"Tab1",
                Role:EJavascriptTabRole.MajorTab,
                DisplayName:"Tab1",
                Group: global.tabGroup
            },
            ()=>{
                return I(
                    UMG.div(
                        {},
                        UMG.span({},UMG.text({}, EJavascriptTabRole.MajorTab)),
                        UMG(Button,{},"button")
                    )
                )
            },
            (widget)=>{
                widget = null;
            }
        ),
        EMaker.tab(
            {
                TabId:"Tab2",
                Role:EJavascriptTabRole.PanelTab,
                DisplayName:"Tab2",
                Group: global.tabGroup
            },
            ()=>{
                return I(UMG.text({},EJavascriptTabRole.PanelTab))
            },
            (widget)=>{
                widget = null;
            }
        ),
        EMaker.tab(
            {
                TabId:"Tab3",
                Role:EJavascriptTabRole.DocumentTab,
                DisplayName:"Tab3",
                Group: global.tabGroup
            },
            ()=>{
                return I(UMG.text({},EJavascriptTabRole.DocumentTab))
            },
            (widget)=>{
                widget = null;
            }
        ),
        EMaker.tab(
            {
                TabId:"Tab4",
                Role:EJavascriptTabRole.NomadTab,
                DisplayName:"Tab4",
                Group: global.tabGroup
            },
            ()=>{
                return I(UMG.text({},EJavascriptTabRole.NomadTab))
            },
            (widget)=>{
                widget = null;
            }
        )
    ]

    let tabManager = new JavascriptEditorTabManager(JavascriptLibrary.CreatePackage(null,'/Script/Javascript'))
    tabManager.Tabs = tabs
    tabManager.Layout = JSON.stringify(tabLayout)

    //Editor window with tab simple template
    EMaker.tabSpawner(
        {
            DisplayName:"Sample Tabs",
            TabId: "SampleTabs@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(
            UMG.div(
                {
                    $link:elem => {
                        elem.AddChild(tabManager).Size.SizeRule  = "Fill"
                    },
                    $unlink:elem => {
                        //tabManager.Tabs.forEach(tab => tab = null)
                        //tabManager = null
                    }
                }
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
    require('bootstrap')('extension-Tabs')
}