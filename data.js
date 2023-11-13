function Formdata(form) {
    let isValid = true;

    form.querySelectorAll('input, textarea').forEach(element => {
        element.style.borderColor = '';
    });


    if (form.fnm.value.length == 0 ||  form.fnm.value.length < 3 || !/^[а-яґєіїА-ЯҐЄІЇ]*\s[А-ЯҐЄІЇ]\.[А-ЯҐЄІЇ]/.test(form.fnm.value)) {
        alert('Будь ласка введіть поле "ПІБ" у форматі ТТТТТТ Т.Т.');
        form.fnm.style.borderColor = 'red';
        isValid = false;
    }

    // Validate message field
    if (form.variant.value.length == 0 || !/^\d{1,2}/.test(form.variant.value)) {
        alert('Будь ласка введіть поле "Варіант" у форматі ЧЧ');  
        form.variant.style.borderColor = 'red';
        isValid = false;
    }

    // Validate phone
    if (form.phone.value.length == 0 || !/^\(\d{3}\)\-\d{3}\-\d{2}\-\d{2}/.test(form.phone.value)){
        alert('Будь ласка введіть поле "Телефон" у форматі (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ');
        form.phone.style.borderColor = 'red';
        isValid = false;
    }

    // Validate faculty
    if (form.faculty.value.length == 0  || !/^[а-яґєіїА-ЯҐЄІЇ]{2,6}/.test(form.faculty.value)) {
        alert('Будь ласка введіть поле "Факультет" у форматі ТТТТ');
        form.faculty.style.borderColor = 'red';
        isValid = false;
    }

    // Validate address
    if (form.address.value.length == 0 || !/^[а-яґєії]{1}\.\s\d{5}/.test(form.address.value)) {
        alert('Будь ласка введіть поле "Адреса" у форматі м. ЧЧЧЧЧЧ');
        form.address.style.borderColor = 'red';
        isValid = false;
    }
    if (isValid) {
        const enteredInfo = `Ім'я: ${form.fnm.value}\nВаріант: ${form.variant.value}\nТелефон: ${form.phone.value}\nФакультет: ${form.faculty.value}\nАдреса: ${form.address.value}`;
        window.open('', 'Entered Information', `height=400,width=400,menubar=no,location=no,resizable=no,scrollbars=no,status=no`).document.write(`<pre>${enteredInfo}</pre>`);
    }
    return isValid;
}

document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('myTable');
    const cells = table.getElementsByTagName('td');
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', function() {
        this.style.backgroundColor = colorPicker.value;
    });

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function() {
            if (this.textContent === '7') {
                this.style.backgroundColor = getRandomColor();
            }
        });

        
        cells[i].addEventListener('click', function() {
            if (this.textContent === '7') {
                colorPicker.click(); 
                this.style.backgroundColor = colorPicker.value;
            }
        });

        cells[i].addEventListener('dblclick', function() {
            if (this.textContent === '7') {
                let currentRow = this.parentElement;
                let rows = table.getElementsByTagName('tr');
                let isRowToChange = false;

                for (let j = 0; j < rows.length; j++) {
                    if (rows[j] === currentRow) {
                        isRowToChange = true;
                    }

                    if (isRowToChange) {
                        changeRowColor(rows[j]);
                    }

                    isRowToChange = !isRowToChange;
                }
            }
        });
    }

    // Отримати випадковий колір
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 24545728).toString(16);
    }

    // Змінити колір клітинок у рядку
    function changeRowColor(row) {
        const cellsInRow = row.getElementsByTagName('td');
        for (let i = 0; i < cellsInRow.length; i++) {
            cellsInRow[i].style.backgroundColor = colorPicker.value;
        }
    }
});