const hangulKeys = [
    ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ'],
    ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'],
    ['ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
];

const keyMap = {
    q: 'ㅂ', w: 'ㅈ', e: 'ㄷ', r: 'ㄱ', t: 'ㅅ',
    y: 'ㅛ', u: 'ㅕ', i: 'ㅑ', o: 'ㅐ', p: 'ㅔ',
    a: 'ㅁ', s: 'ㄴ', d: 'ㅇ', f: 'ㄹ', g: 'ㅎ',
    h: 'ㅗ', j: 'ㅓ', k: 'ㅏ', l: 'ㅣ',
    z: 'ㅋ', x: 'ㅌ', c: 'ㅊ', v: 'ㅍ',
    b: 'ㅠ', n: 'ㅜ', m: 'ㅡ',
    '1': '1', '2': '2', '3': '3', '4': '4', '5': '5',
    '6': '6', '7': '7', '8': '8', '9': '9', '0': '0',
};

document.addEventListener('keydown', (e) => {
    let key = e.key;

    // Backspace
    if (key === 'Backspace') {
        e.preventDefault();
        const display = document.getElementById('display');
        display.innerText = display.innerText.slice(0, -1);
        return;
    }

    // 키 변환
    key = keyMap[key] || key;

    if (hangulKeys.flat().includes(key)) {
        const button = document.querySelector(`button[data-key="${key}"]`);
        if (button) {
            button.classList.add('active');
            setTimeout(() => button.classList.remove('active'), 150);
        }
    }

    const display = document.getElementById('display');
    display.innerText += key;
});