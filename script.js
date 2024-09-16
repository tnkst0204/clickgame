const toggleButton = document.getElementById('setting-toggle');//設定を開く要素を取得
const toggleElement = document.getElementById('toggle-item-settingMenu');//設定の要素を取得
const column = document.getElementById('column');//設定にある要素を囲むdivを取得
toggleButton.addEventListener('click', () => {
    // 要素の表示状態を切り替え
    if (toggleElement.style.display === 'none' || toggleElement.style.display === '') {
        toggleElement.style.display = 'block'; // 表示
        toggleElement.style.display = 'inline-block';
        toggleElement.style.display = 'flex';
        column.style.height = 'auto';
        column.style.marginRight = '20px';
    } else {
        toggleElement.style.display = 'none';  // 非表示
    }
});

function onclosebutton() {toggleElement.style.display = 'none';};

const checkbox = document.getElementById('openSidebarMenu');
const settingmenu = document.getElementById('toggle-item-settingMenu');

checkbox.addEventListener('change', function(){settingmenu.style.display='none';});
//それぞれのinputを取得
const BACKGROUND = document.getElementById('maininner');
const DEFAULT = document.getElementById('colorDefault');
const RED = document.getElementById('colorRed');
const BLUE = document.getElementById('colorBlue');
const BLACK = document.getElementById('colorBlack');
const GREEN = document.getElementById('colorGreen');
const CLICKVALUE = document.getElementById('clickvalueview');
//取得したinputが押されたときにバックグラウンドの色を変える
DEFAULT.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#ffffff';CLICKVALUE.style.color = '#000000';});
RED.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#ff0000';CLICKVALUE.style.color = '#00ffff';});
BLUE.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#0000ff';CLICKVALUE.style.color = '#ffff00';});
BLACK.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#000000';CLICKVALUE.style.color = '#ffffff';});
GREEN.addEventListener('change', function(){BACKGROUND.style.backgroundColor = '#00ff00';CLICKVALUE.style.color = '#ff00ff';});
//ボタンが押されたときにclickvalueを+1するコード
let clickvalue = 0; //clickvalueを作る
//ボタンが押されたときの処理
function clickButton() {
  //htmlの要素をIDで取得
  let cvv = document.getElementById('clickvalueview');
  let vp = document.getElementById('valueplus');
  clickvalue += 1;//clickvalueに+1をする
  cvv.textContent = clickvalue;//clickvalueを表示する要素のテキストにclickvalueを入れる
  vp.style.fontSize = '40px';//ボタンのサイズを変更
  setTimeout(() => {
    vp.style.fontSize = '50px';
  }, 100);//一定時間がたったあとにボタンのサイズをもとに戻す
 }
//inputの値に合わせてテキストのサイズを変えるコード
const SRIDERBAR = document.getElementById('fontsizesrider');
SRIDERBAR.addEventListener('input', function() {
    CLICKVALUE.style.fontSize = (SRIDERBAR.value * 12) + 'px';//clickvalueを表示するテキストのフォントサイズを変更
});

