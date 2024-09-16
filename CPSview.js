const ball = document.getElementById('CPSview');
ball.onmousedown = function(event) { // (1) 処理を開始
    // (2) 移動のための準備: absolute にし、z-index でトップにする
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // 現在の親から body へ直接移動させ、body に対して相対配置をする
    document.body.append(ball);
    // ...そしてその絶対配置されたボールをカーソルの下に置く
    moveAt(event.pageX, event.pageY);
    // ボールを（pageX、pageY）座標の中心に置く
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    // (3) mousemove でボールを移動する
    document.addEventListener('mousemove', onMouseMove);
    // (4) ボールをドロップする。不要なハンドラを削除する
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  };

//inputの値に合わせてテキストのサイズを変えるコード
const CPSSRIDEBAR = document.getElementById('cpsViewerSize');
const CPS = document.getElementById('CPSview');
CPSSRIDEBAR.addEventListener('input', function() {
    CPS.style.fontSize = (CPSSRIDEBAR.value * 4) + 'px';//clickvalueを表示するテキストのフォントサイズを変更
});

let clickCount = 0;
document.getElementById('valueplus').addEventListener('click',function(){clickCount+=1;});
function onCountView(){document.getElementById('CPSview').innerText = 'CPS:' + clickCount;clickCount = 0;};
setInterval(onCountView, 1000);