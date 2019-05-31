<a-assets>
  <a-asset-item id="fish-obj"
  src="obj/fish-2.obj">
  </a-asset-item>
<a-asset-item id="fish-mtl1"
  src="obj/fish-2.mtl">
</a-asset-item>
<a-asset-item id="fish-mtl2"
  src="obj/fish-1.mtl">
</a-asset-item>
AFRAME.registerComponent('fish', {
    init: function() {
        const aEntity = document.querySelector("#fish_models");
        aEntity.setAttribute('obj-model',{
          obj: #fish-obj,
          mtl: #fish-mtl2});
        console .log（'Hello，World！'）;
    }
});
