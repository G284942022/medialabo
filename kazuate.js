 // 入力回数（予想回数）
 let answer = 0;
 let kaisu = 0;
 let foo = 0;
 let s1 = document.querySelector('span#kaisu');
 let s2 = document.querySelector('span#answer');
 let p1 = document.querySelector('p#result');

 // 答え
 let kotae = Math.floor(Math.random() * 10) + 1;
 console.log('答え（デバッグ用）: ' + kotae);

 // ボタンを押した後の処理をする関数 hantei() の定義
 function hantei() {
   // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
   let i = document.querySelector('input[name="nanto"]');
   let yoso = Number(i.value); // 文字列を数値に変換する
   s2.textContent = yoso;

   // 課題3-1: 正解判定する
   // kotae と yoso が一致するかどうか調べて結果を出力
   // 課題3-1における出力先は p1 要素

   s1.textContent = (kaisu + 1);

   kaisu++;

   if (foo > 0) {
     p1.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
   } else if ((kotae === yoso && kaisu < 3) || (kotae === yoso && kaisu === 3)) {
     p1.textContent = "正解！答えは " + kotae + " でした．";
     foo++;
   } else if (kotae > yoso && kaisu < 3) {
     p1.textContent = "まちがい．答えはもっと大きいですよ";
   } else if (kotae < yoso && kaisu < 3) {
     p1.textContent = "まちがい．答えはもっと小さいですよ";
   } else if (kotae !== yoso && kaisu === 3) {
     p1.textContent = "まちがい．残念でした答えは" + kotae + "です．";
   } else {
     p1.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
   }
 }

 const button = document.getElementById("print");
 button.addEventListener("click", hantei);









