gdjs.uneMCode = {};
gdjs.uneMCode.GDkostkaObjects1= [];
gdjs.uneMCode.GDkostkaObjects2= [];
gdjs.uneMCode.GDkostka2Objects1= [];
gdjs.uneMCode.GDkostka2Objects2= [];
gdjs.uneMCode.GDNewObjectObjects1= [];
gdjs.uneMCode.GDNewObjectObjects2= [];
gdjs.uneMCode.GDNewObject2Objects1= [];
gdjs.uneMCode.GDNewObject2Objects2= [];
gdjs.uneMCode.GDNewObject3Objects1= [];
gdjs.uneMCode.GDNewObject3Objects2= [];

gdjs.uneMCode.conditionTrue_0 = {val:false};
gdjs.uneMCode.condition0IsTrue_0 = {val:false};
gdjs.uneMCode.condition1IsTrue_0 = {val:false};


gdjs.uneMCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.uneMCode.condition0IsTrue_0.val = false;
{
gdjs.uneMCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.uneMCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Gra");
}}

}


}; //End of gdjs.uneMCode.eventsList0xb25a8


gdjs.uneMCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.uneMCode.GDkostkaObjects1.length = 0;
gdjs.uneMCode.GDkostkaObjects2.length = 0;
gdjs.uneMCode.GDkostka2Objects1.length = 0;
gdjs.uneMCode.GDkostka2Objects2.length = 0;
gdjs.uneMCode.GDNewObjectObjects1.length = 0;
gdjs.uneMCode.GDNewObjectObjects2.length = 0;
gdjs.uneMCode.GDNewObject2Objects1.length = 0;
gdjs.uneMCode.GDNewObject2Objects2.length = 0;
gdjs.uneMCode.GDNewObject3Objects1.length = 0;
gdjs.uneMCode.GDNewObject3Objects2.length = 0;

gdjs.uneMCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['uneMCode'] = gdjs.uneMCode;
