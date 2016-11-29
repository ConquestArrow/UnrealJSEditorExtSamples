function main(){
    "use strict";
    const UMG = require("UMG");
    const I = require('instantiator');
    const EMaker = require("editor-maker");
    const UClass = require("uclass");
    
    //menu group settings
    if(!global.editorGroup){
        global.editorGroup = JavascriptWorkspaceItem.AddGroup(JavascriptWorkspaceItem.GetGroup("Root"), "Samples");
    }


    //PropertyEditor showing props
    class ShowProps {
        ctor(){
            //default value set 

            this.myInt = 123;
            this.myFloat = 987.6;
        }
        properties(){
            this.myBoolean /* EditAnywhere+bool */;
            this.myInt /* EditAnywhere+Int */;
            this.myFloat /* EditAnywhere+float */;
            this.myIntArray /* EditAnywhere+Int[] */;
            this.myString /* EditAnywhere+String */;
            this.myVector2d /* EditAnywhere+Vector2D */;
            this.myVector /* EditAnywhere+Vector */;
            this.myActor /* EditAnywhere+Actor */;
            this.myColor /* EditAnywhere+Color */;
            this.someProp /* EditAnywhere+Category:MyCategory+DisplayName:My Prop Name+int */;
            this.advancedProp /* EditAnywhere+Category:MyCategory+AdvancedDisplay+Color */
        }
    }

    let UShowProps = UClass()(global, ShowProps)
    let ushowProp = new UShowProps();



    //Editor window with tab simple template
    EMaker.tabSpawner(
        {
            DisplayName:"PropertyEditor Sample",
            TabId: "PropertyEditorSample@",
            Role: EJavascriptTabRole.MajorTab,
            Group: global.editorGroup
        },
        () => I(UMG(PropertyEditor,
            {
                OnChange:(propertyName) => {
                    //...
                },
                $link:(elem)=>{
                    elem.SetObject(ushowProp)
                    elem.updateData = _ => {
                        elem.SetObject(ushowProp)
                    }
                },
                $unlink:(elem) =>{
                    //...
                }
            }))
    )

    //deconstructor
    return () => {
        UShowProps = null;
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
    require('bootstrap')('extension-PropertyEditor')
}