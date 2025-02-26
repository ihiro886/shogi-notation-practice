// script.js
const board = document.getElementById('shogi-board');
const notationDisplay = document.getElementById('current-notation');
const resultDisplay = document.getElementById('result');
const kanjiNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];

// 9×9の盤面を生成
function createBoard() {
    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 9; col++) {
            const td = document.createElement('td');
            const id = `${9 - col}${kanjiNumbers[row]}`; // 例: "9一", "8二", ...
            td.id = id;
            td.addEventListener('click', checkAnswer);
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
}

// ランダムな符号を生成
function generateNotation() {
    const col = Math.floor(Math.random() * 9) + 1; // 1〜9
    const row = kanjiNumbers[Math.floor(Math.random() * 9)]; // 一〜九
    return `${col}${row}`;
}

// 正解判定
function checkAnswer(event) {
    const clickedId = event.target.id;
    const currentNotation = notationDisplay.textContent;
    if (clickedId === currentNotation) {
        resultDisplay.textContent = '正解！';
        resultDisplay.style.color = 'green';
        setTimeout(nextProblem, 1000); // 1秒後に次の問題へ
    } else {
        resultDisplay.textContent = '不正解。もう一度試してください。';
        resultDisplay.style.color = 'red';
    }
}

// 次の問題を表示
function nextProblem() {
    const newNotation = generateNotation();
    notationDisplay.textContent = newNotation;
    resultDisplay.textContent = '';
}

// 初期化
createBoard();
nextProblem();