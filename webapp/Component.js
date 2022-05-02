sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
  ],
  function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        //Moved rootView to Manifest.json
        manifest: "json"
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        //Moved here from App.controller
        //Set data model on view
        var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);  //Bind Json structure to model
         this.setModel(oModel);      //Bind view to the model above
          //this.getView() not reqd in Component.js in above statement 
         // set i18n model in Manifest.json
        
         // create the views based on the url/hash
			   this.getRouter().initialize();
      }
    });
  }
);
