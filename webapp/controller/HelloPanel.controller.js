sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    "sap/ui/core/Fragment"
], (Controller,MessageToast,Fragment) => {
    'use strict';
    return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
        //Event to Initialize Controller (Loads when View is loaded)
        //onInit : function () {  Moved init function to Component.js
         //Moved model declaration, setModel and Set i18 resource model to Component.js
        //},
        //Event Handlers
        onShowHello : function () {
         // read msg from i18n bundle model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
        },
        //Enent Handler for Dialog Fragment
        onOpenDialog : function () {
            // create dialog lazily
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "sap.ui.demo.walkthrough.view.HelloDialog"
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
        },
        onCloseDialog : function () {
            // note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
        }
    });
});