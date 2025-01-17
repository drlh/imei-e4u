sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";
 
	var PageController = Controller.extend("controller.FzgBuchenStart", {
 
		onInit: function () {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(jQuery.sap.getModulePath("ui", "/Distanz.json"));
			this.getView().setModel(oModel);
		}
	});
 
 
	return PageController;
 
});