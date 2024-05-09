sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("Task2.controller.View1", {
		onCheck: function() {
			var check = this.getView().byId("__group0").getSelectedButton().getText();
			switch (check){
				case "Display":
					this.onDisplay();
					break;
			}
		},
		onDisplay: function(){
			
			var sServiceUri = "https://dev.monairy.com/sap/opu/odata/SAP/ZGW_SC_SRV/";
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUri, {
				json: true
			});
			this.getView().setModel(oModel, "SCHeaderSet");
			var oData = this.getView().getModel("SCHeaderSet");
			var refNo = this.getView().byId("refNo");
			var refValue = refNo.getValue();
			console.log(refValue)

			oData.read("/SCHeaderSet(" + refValue + ")", {

				success: function(oData2) {
					// General Details
					//shift
					this.getView().byId("shift").setValue(oData2.Zshift);
					this.getView().byId("date").setValue(oData2.ZdateGluFru);
					this.getView().byId("status").setValue(oData2.ZStatusSta);
					//تحويلات الجلوكوز
					this.getView().byId("awl1").setValue(oData2.ZTank1Sta);
					this.getView().byId("akher1").setValue(oData2.ZTank3Sta);
					this.getView().byId("y1").setValue(oData2.ZTank5Sta);
					this.getView().byId("awl2").setValue(oData2.ZTank2Sta);
					this.getView().byId("akher2").setValue(oData2.ZTank4Sta);
					this.getView().byId("y2").setValue(oData2.ZTank6Sta);
					this.getView().byId("br").setValue(oData2.ZTank7Sta);
					this.getView().byId("total").setValue(oData2.ZFru1Sta);
					//النشا الجاف
					// this.getView().byId("orderNo").setValue(oData2.);
					this.getView().byId("H").setValue(oData2.ZDry1Sta);
					this.getView().byId("I").setValue(oData2.ZDry2Sta);
					//النشا التام
					// this.getView().byId("orderNo1").setValue(oData2.);
					this.getView().byId("K").setValue(oData2.ZPack1Sta);
					this.getView().byId("L").setValue(oData2.ZPack2Sta);
					this.getView().byId("M").setValue(oData2.ZPack3Sta);
					// فرق تغير تانكات حليب النشا
					// this.getView().byId("orderNo2").setValue(oData2.);
					this.getView().byId("T1").setValue(oData2.ZTank18Sta);
					// this.getView().byId("KM").setValue(oData2.ZBy1Sta);
					this.getView().byId("T2").setValue(oData2.ZTank14Sta);
					// this.getView().byId("GM").setValue(oData2.ZBy4Sta);
					this.getView().byId("T3").setValue(oData2.ZTank15Sta);
					// this.getView().byId("JM").setValue(oData2.ZBy7Sta);
					this.getView().byId("T4").setValue(oData2.ZTank16Sta);
					// this.getView().byId("Oil").setValue(oData2.ZBy10Sta);
					this.getView().byId("T5").setValue(oData2.ZTank17Sta);
					// this.getView().byId("W").setValue(oData2.ZBy14Sta);
					//Table
					this.getView().byId("production1").setValue(oData2.ZQty1Sta);
					this.getView().byId("oil1").setValue(oData2.ZOil1Sta);
					this.getView().byId("production2").setValue(oData2.ZQty2Sta);
					this.getView().byId("oil2").setValue(oData2.ZOil2Sta);
					this.getView().byId("production3").setValue(oData2.ZQty3Sta);
					this.getView().byId("oil3").setValue(oData2.ZOil3Sta);
					this.getView().byId("production4").setValue(oData2.ZQty4Sta);
					this.getView().byId("oil4").setValue(oData2.ZOil4Sta);
					//الباقي
					this.getView().byId("KK").setValue(oData2.ZKkSta);
					this.getView().byId("SS").setValue(oData2.ZSsSta);
					this.getView().byId("Protin").setValue(oData2.ZQtyproSta);
					this.getView().byId("HumR").setValue(oData2.ZHumSta);
					// ---------------
					this.getView().byId("first").setValue(oData2.ZWat1Sta);
					this.getView().byId("last").setValue(oData2.ZWat2Sta);
					this.getView().byId("WY").setValue(oData2.ZWat3Sta);
					this.getView().byId("WHum").setValue(oData2.ZWatHumSta);
					this.getView().byId("PK").setValue(oData2.ZBy1Sta);
					this.getView().byId("PG").setValue(oData2.ZBy4Sta);
					this.getView().byId("GT").setValue(oData2.ZBy7Sta);

				}.bind(this),
				error: function(oError) {}
			});
		
		}
	});
});