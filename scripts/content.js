var inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (input.checkValidity()) {
            input.classList.add('valid')
            input.classList.remove('invalid')
        } else {
            input.classList.remove('valid')
            input.classList.add('invalid')
            if (input.validity.valueMissing) {
                input.setCustomValidity('此欄位必填，請重新確認');
                return
            }
            if (input.validity.typeMismatch) {
                input.setCustomValidity('格式錯誤，請重新確認');
                return
            }

        }
    })
})