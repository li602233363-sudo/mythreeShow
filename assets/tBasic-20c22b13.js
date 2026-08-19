import{_ as n,o as e,c as r}from"./index-2bc39f70.js";const t={};function s(a,o){return e(),r("pre",null,`        Three.js 学习路线（从入门到进阶）
        一、基础入门（1-2周）

        环境搭建

        通过npm安装Three.js：npm install three，或直接通过CDN引入。
        搭建基础项目结构（HTML+JS），创建第一个场景：包含场景（Scene）、相机（Camera）、渲染器（Renderer）。


        核心概念

        理解3D坐标系、几何体（BoxGeometry等）、材质（MeshBasicMaterial等）和光源（AmbientLight、DirectionalLight）。
        实现简单动画：通过requestAnimationFrame实现物体旋转、缩放。



        二、核心技能提升（2-3周）

        进阶场景构建

        光照系统：添加阴影、使用不同光源（点光源、聚光灯）。
        材质与纹理：应用法线贴图、环境贴图，加载外部图片作为纹理。


        交互与控制

        使用OrbitControls实现相机拖拽、缩放。
        鼠标/触摸事件：通过Raycaster实现物体拾取、点击交互。



        三、高级应用（3-4周）

        3D模型与动画

        加载GLTF/OBJ等模型，使用GLTFLoader解析。
        骨骼动画：通过AnimationMixer播放骨骼动画（如人物行走）。


        高级渲染技术

        后期处理：使用EffectComposer实现模糊、辉光等效果。
        粒子系统：创建烟雾、火焰等特效（结合Points和Shader）。



        四、实战项目（4周以上）

        小型项目：3D产品展示（旋转/缩放交互）、数据可视化（柱状图/地图）。
        中型项目：第一人称射击游戏（碰撞检测+Cannon.js物理引擎）、虚拟展厅（WebXR+多相机切换）。
        大型项目：智慧城市可视化（三维地图+实时数据）、元宇宙社交场景（多人交互+动态光照）。

        五、优化与扩展

        性能优化：合并几何体、使用LOD（层级细节）、开启WebGLRenderer抗锯齿。
        框架整合：在Vue/React中使用react-three-fiber或vue-threejs。
        跨平台开发：适配移动端触控交互，开发AR/VR应用（结合WebXR）。

        学习资源

        官方文档：https://threejs.org/docs/（最权威的API参考）。
        社区论坛：Stack Overflow、Three.js GitHub Issues、Discord。
        教程平台：Udemy、慕课网（搜索“Three.js入门到实战”课程）。

        关键建议

        从简单案例（如旋转立方体）开始，逐步挑战复杂场景。
        多参考官方示例库（https://threejs.org/examples/），学习最佳实践。
        遇到问题优先查阅文档，其次通过社区提问或查看开源项目源码。
    `)}const i=n(t,[["render",s]]);export{i as default};
