//
// 応用プログラミング 課題３．１
//
"use strict"; // 厳格モード

// ３Ｄページ作成関数の定義
function init() {
  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  /* 平面の設定
  const planeGeometry = new THREE.PlaneGeometry(32, 16);
  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x606060});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  scene.add(plane);
  /**/

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.x = 25;
  camera.position.y = 15;
  camera.position.z = 30;
  camera.lookAt(0, 4, 0);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x808080 );
  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement);

  // 描画
  renderer.render(scene, camera);
}

document.onload = init();
