sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        rootView: {
          viewName: "sap.ui.demo.walkthrough.view.App",
          type: "XML",
          /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
          id: "app",
        },
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        //Moved here from App.controller
        // set data model on view
        var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);  //Bind Json structure to model
         this.setModel(oModel);      //Bind view to the model above
          //this.getView() not reqd in Component.js in above statement 
         // set i18n model on view
        var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");  //this.getView() not reqd in Component.js
      }
    });
  }
);
