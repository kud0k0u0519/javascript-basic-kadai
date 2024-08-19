// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

//上記で代入したボタンをクリックした時にイベント処理を実行する
addBtn.addEventListener('click', () => {
  // id名textを取得し、その要素内のテキストを変更する
  document.getElementById('text').textContent = 'ボタンをクリックしました'
})