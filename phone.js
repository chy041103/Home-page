document.addEventListener('DOMContentLoaded', () => {
    // HTML 요소들을 JavaScript에서 사용하기 위해 선택합니다.
    const phoneNumberDisplay = document.getElementById('phoneNumberDisplay');
    const keypadButtons = document.querySelectorAll('.keypad .key'); // 모든 키패드 버튼 (숫자, *, #)
    const deleteButton = document.querySelector('.delete-key'); // 지우기 버튼

    let currentPhoneNumber = ""; // 현재 입력된 전화번호를 저장할 변수

    // 모든 키패드 버튼에 클릭 이벤트 리스너를 추가합니다.
    keypadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const keyValue = event.target.dataset.value; // 클릭된 버튼의 data-value 속성 값

            // 전화번호에 하이픈(-)을 추가하는 함수
            function formatPhoneNumber(numberString) {
                // 010-XXXX-XXXX 형식으로 포맷
                if (numberString.length === 11 && numberString.startsWith('010')) {
                    return numberString.substring(0, 3) + '-' +
                           numberString.substring(3, 7) + '-' +
                           numberString.substring(7, 11);
                }
                // 다른 일반적인 경우 (예: 지역번호) 나중에 필요하면 추가
                return numberString;
            }

            // 특수문자(*, #)와 지우기 버튼이 아닌 경우에만 번호를 추가
            if (keyValue !== undefined) { // data-value가 있는 버튼만 처리
                if (currentPhoneNumber.length < 11) { // 최대 11자리까지만 입력 가능 (하이픈 제외)
                    currentPhoneNumber += keyValue;
                }
                phoneNumberDisplay.textContent = formatPhoneNumber(currentPhoneNumber);
            }
        });
    });

    // 지우기 버튼에 클릭 이벤트 리스너를 추가합니다.
    deleteButton.addEventListener('click', () => {
        currentPhoneNumber = currentPhoneNumber.slice(0, -1); // 마지막 문자 제거
        // 지우기 버튼 클릭 시에도 다시 포맷팅
        phoneNumberDisplay.textContent = formatPhoneNumber(currentPhoneNumber);
    });

    // 과제에서 주어진 전화번호를 자동으로 입력하는 함수 (선택 사항)
    // 기말고사 과제가 주어진 전화번호를 "입력하는" 화면을 만드는 것이므로,
    // 이 부분은 제출 전에 제거하거나, 과제 지시사항에 따라 추가/제거하세요.
    // 만약 "자동으로 입력된 상태"를 보여줘야 한다면 유용합니다.
    function setInitialPhoneNumber(number) {
        currentPhoneNumber = number.replace(/-/g, ''); // 하이픈 제거하고 저장
        phoneNumberDisplay.textContent = formatPhoneNumber(currentPhoneNumber);
    }

    // 주어진 전화번호: 010-3789-6397
    // setInitialPhoneNumber('010-3789-6397'); // 페이지 로드 시 자동으로 번호 입력
});