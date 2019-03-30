gdjs.menuCode = {};
gdjs.menuCode.GDkostkaObjects1= [];
gdjs.menuCode.GDkostkaObjects2= [];
gdjs.menuCode.GDkostka2Objects1= [];
gdjs.menuCode.GDkostka2Objects2= [];
gdjs.menuCode.GDNewObjectObjects1= [];
gdjs.menuCode.GDNewObjectObjects2= [];
gdjs.menuCode.GDNewObject2Objects1= [];
gdjs.menuCode.GDNewObject2Objects2= [];
gdjs.menuCode.GDNewObject3Objects1= [];
gdjs.menuCode.GDNewObject3Objects2= [];
gdjs.menuCode.GDNewObject4Objects1= [];
gdjs.menuCode.GDNewObject4Objects2= [];
gdjs.menuCode.GDNewObject5Objects1= [];
gdjs.menuCode.GDNewObject5Objects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.menuCode.GDNewObject5Objects1});gdjs.menuCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.menuCode.GDNewObject5Objects1.createFrom(runtimeScene.getObjects("NewObject5"));

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "uneM");
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.menuCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.menuCode.eventsList0xb25a8


gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.menuCode.GDkostkaObjects1.length = 0;
gdjs.menuCode.GDkostkaObjects2.length = 0;
gdjs.menuCode.GDkostka2Objects1.length = 0;
gdjs.menuCode.GDkostka2Objects2.length = 0;
gdjs.menuCode.GDNewObjectObjects1.length = 0;
gdjs.menuCode.GDNewObjectObjects2.length = 0;
gdjs.menuCode.GDNewObject2Objects1.length = 0;
gdjs.menuCode.GDNewObject2Objects2.length = 0;
gdjs.menuCode.GDNewObject3Objects1.length = 0;
gdjs.menuCode.GDNewObject3Objects2.length = 0;
gdjs.menuCode.GDNewObject4Objects1.length = 0;
gdjs.menuCode.GDNewObject4Objects2.length = 0;
gdjs.menuCode.GDNewObject5Objects1.length = 0;
gdjs.menuCode.GDNewObject5Objects2.length = 0;

gdjs.menuCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['menuCode'] = gdjs.menuCode;
