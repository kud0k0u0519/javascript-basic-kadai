// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

const changeText = document.getElementById('text');

//上記で代入したボタンをクリックした時にイベント処理を実行する
addBtn.addEventListener('click', () => {
  changeText.textContent = 'ボタンをクリックしました'
});