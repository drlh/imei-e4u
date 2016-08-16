sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller'],
	function (MessageToast, Controller){
	"use strict";
 
	var PageController = Controller.extend("controller.Statistik", {
 
		press: function (oEvent) {
			MessageToast.show("The radial micro chart is pressed.");
		}
 
	});
 
	return PageController;
 
});