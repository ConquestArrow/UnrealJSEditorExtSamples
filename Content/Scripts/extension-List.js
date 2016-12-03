"use strict";

function main(){
    const UMG = require("UMG");
    const I = require('instantiator');
    const EMaker = require("editor-maker");
    const UClass = require("uclass");
    
    //menu group settings
    if(!global.editorGroup){
        global.editorGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Samples");
    }

    let GEngine = Root.GetEngine();

    //show data
    class A/* Struct */{
        ctor(){
            this.desc = "A desc"
            this.name = "A"
        }
        properties(){
            this.desc /* String */
            this.name /* String */
        }
    }
    class B/* Struct */{
        ctor(){
            this.desc = "B desc"
            this.name = "B"
        }
        properties(){
            this.desc /* String */
            this.name /* String */
        }
    }

    let data = [
        new (UClass()(global, A)),
        new (UClass()(global, B)),
    ]

    

    //Editor window with tab simple template
    EMaker.tabSpawner(
        {
            DisplayName:"Sample Lists",
            TabId: "SamplelLists@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(
            UMG.div(
                {'slot.size.size-rule':ESlateSizeRule.Fill},
                UMG(JavascriptListView,
                    {
                        ItemHeight:25,
                        Columns: [
                            {
                                Id: 'Name',
                                Width: 0.5
                            },
                            {
                                Id: "Desc",
                                Width: 0.5
                            }
                        ],
                        OnGenerateRowEvent: (item, column) => {
                            //console.log(item, column)
                            

                            let s = ""
                            switch(column){
                                case "Name":
                                    s = item ? item.name : column;
                                    break;
                                case "Desc":
                                    s = item ? item.desc : column;
                                    break;
                                default:
                                    s = "default"
                            }

                            let design = 
                                UMG(JavascriptTextBlock,
                                    {
                                        Font : {
                                            FontObject : GEngine.SmallFont,
                                            Size : 10
                                        },
                                        Text : s
                                    }
                                )
                            return I(design)
                        },
                        $link: (elem) => {
                            elem.JavascriptContext = Context
                            elem.Items = data;
                        }
                    }
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
    require('bootstrap')('extension-List')
}