//
// 応用プログラミング 課題4.1
// $Id$
//
"use strict"; // 厳格モード

// ３Ｄページ作成関数の定義
function init() {
  const cameraParam = { // カメラの設定値
    fov: 50, // 視野角
    x: 5,
    y: 10,
    z: 20
  };
  const gap = 0.01; // 胸のマークなどを浮かせる高さ
  const seg = 12; // 円や円柱の分割数

  function makeMetalRobot() {
    // メタルロボットの設定
    const metalRobot = new THREE.Group
    const metalMaterial = new THREE.MeshPhongMaterial(
      {color: 0x707777, shininess: 60, specular: 0x222222 });
    const redMaterial = new THREE.MeshBasicMaterial({color: 0xc00000});
    const legRad = 0.5; // 脚の円柱の半径
    const legLen = 3; // 脚の円柱の長さ
    const legSep = 1.2; // 脚の間隔
    const bodyW = 3; // 胴体の幅
    const bodyH = 3; // 胴体の高さ
    const bodyD = 2; // 胴体の奥行
    const armRad = 0.4; // 腕の円柱の半径
    const armLen = 3.8; // 腕の円柱の長さ
    const headRad = 1.2; // 頭の半径
    const eyeRad = 0.2; // 目の半径
    const eyeSep = 0.8; // 目の間隔
    //  脚の作成
    const legGeometry
      = new THREE.CylinderGeometry(legRad, legRad, legLen, seg, seg);
    const legR = new THREE.Mesh(legGeometry, metalMaterial);
    legR.position.set(-legSep/2, legLen/2, 0);
    metalRobot.add(legR);
    //  胴体の作成

    //  腕の作成

    //  頭の作成

    // 影についての設定

    // 作成結果を戻す
    return metalRobot;
  }

  function makeCBRobot() {
    // 段ボールロボットの設定
    const cardboardRobot = new THREE.Group
    const cardboardMaterial = new THREE.MeshLambertMaterial({ color: 0xccaa77 });
    const blackMaterial = new THREE.MeshBasicMaterial({color: "black"});
    const legW = 0.8; // 脚の幅
    const legD = 0.8; // 脚の奥行
    const legLen = 3; // 脚の長さ
    const legSep = 1.2; // 脚の間隔
    const bodyW = 2.2; // 胴体の幅
    const bodyH = 3; // 胴体の高さ
    const bodyD = 2; // 胴体の奥行
    const armW = 0.8; // 腕の幅
    const armD = 0.8; // 腕の奥行
    const armLen = 3.8; // 腕の長さ
    const headW = 4; // 頭の幅
    const headH = 2.4; // 頭の高さ
    const headD = 2.4; // 頭の奥行
    const eyeRad = 0.2; // 目の半径
    const eyeSep = 1.6; // 目の間隔
    const eyePos = 0.2; // 目の位置(顔の中心基準の高さ)
    const mouthW = 0.6; // 口の幅
    const mouthH = 0.5; // 口の高さ
    const mouthT = 0.2; // 口の頂点の位置(顔の中心基準の高さ)
    //  脚の作成

    //  胴体の作成

    //  腕の設定

    //  頭の設定

    // 影についての設定

    // 再生結果を戻す
    return cardboardRobot;
  }

  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);
  // axes.visible = false;

  // 平面の設定
  const planeGeometry = new THREE.PlaneGeometry(20, 10);
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x007030});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.receiveShadow = true;
  scene.add(plane);

  // 金属製ロボットの追加
  const metalRobot = makeMetalRobot();
  scene.add(metalRobot);

  // 光源の設定
  const spotLight = new THREE.SpotLight();
  spotLight.position.set(-10, 30, 10);
  scene.add(spotLight);

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    cameraParam.fov, window.innerWidth/window.innerHeight, 0.1, 1000);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x406080 );
  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement);

  // 描画関数の定義
  function render() {
    camera.fov = cameraParam.fov;
    camera.position.x = cameraParam.x;
    camera.position.y = cameraParam.y;
    camera.position.z = cameraParam.z;
    camera.lookAt(0, 5, 0);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }

  // カメラのコントローラ
  const gui = new dat.GUI();
  gui.add(cameraParam, "fov", 10, 100).onChange(render);
  gui.add(cameraParam, "x", -40, 40).onChange(render);
  gui.add(cameraParam, "y", -40, 40).onChange(render);
  gui.add(cameraParam, "z", -40, 40).onChange(render);

  // 描画
  render();
}

document.onload = init();
