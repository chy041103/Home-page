const display = document.querySelector('.display');
const keyboardKeys = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    // UI 키보드에서 해당 키를 시각적으로 강조 (선택 사항)
    keyboardKeys.forEach(keyElement => {
        if (keyElement.textContent.toLowerCase() === keyName.toLowerCase()) {
            keyElement.classList.add('active');
        }
    });

    if (keyName === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (keyName === 'Tab') {
        display.value += '\t';
    } else if (keyName === 'Enter') {
        display.value += '\n';
    } else if (keyName === ' ') {
        display.value += ' ';
    } else if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
        // Ctrl, Alt, Meta, Shift 키 조합은 무시 (필요에 따라 처리 가능)
    } else {
        display.value += keyName;
    }
});

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    keyboardKeys.forEach(keyElement => {
        if (keyElement.textContent.toLowerCase() === keyName.toLowerCase()) {
            keyElement.classList.remove('active');
        }
    });
});