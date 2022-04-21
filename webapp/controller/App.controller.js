sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], (Controller,MessageToast) => {
    'use strict';
    return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
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
        }
    })
});