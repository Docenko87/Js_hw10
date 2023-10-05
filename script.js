// --------- Задание 1 --------- //
// Создать html-страницу с трекбаром. 
// Предоставить пользователю возможность изменять положение 
// синего указателя.
function updateValue(value) {
    document.getElementById('current-value').textContent = 'Значение: ' + value;
}
// --------- Задание 2 --------- //
// Создать html-страницу с галереей. 
// В один момент времени на экране отображается одно изображение и две кнопки: Назад и Вперед. При нажатии на кнопки 
// изображения должны переключатся в указанном порядке. Когда 
// следующего/предыдущего изображения нет, то соответствующую 
// кнопку необходимо блокировать. Изображения хранить в заранее 
// подготовленном массиве

var images = [
    'images/fish.png',
    'images/Paradise_beach.png',
    'images/rock.png'
];

// Индекс текущего изображения
var currentIndex = 0;

// Функция для отображения текущего изображения
function showImage() {
    var imageElement = document.getElementById('image');
    imageElement.src = images[currentIndex];
}

// Функция для переключения на предыдущее изображение
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    showImage();
}

// Функция для переключения на следующее изображение
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = images.length - 1;
    }
    showImage();
}

// Начальное отображение первого изображения
showImage();

// --------- Задание 3 --------- //
// Cоздать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может 
// быть развернут только один блок информации.
function toggleContent(blockNumber) {
    var content = document.querySelectorAll('.content');
    for (var i = 0; i < content.length; i++) {
        if (i === blockNumber - 1) {
            content[i].style.display = content[i].style.display === 'block' ? 'none' : 'block';
        } else {
            content[i].style.display = 'none';
        }
    }
}

// Задание 5
// Cоздать html-страницу, на которой пользователь может ввести номер месяца, год, и получить календарь на указанный месяц. 
// Календарь можно генерировать с помощью таблицы. Начальный 
// день недели всегда должен быть понедельник.
function generateCalendar() {
    // Очистка текущего календаря
    var table = document.getElementById('calendar');
    table.innerHTML = '<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>';

    // Получение значения месяца и года из формы
    var month = parseInt(document.getElementById('month').value, 10);
    var year = parseInt(document.getElementById('year').value, 10);

    // Создание объекта Date для указанного месяца и года
    var date = new Date(year, month - 1, 1);

    // Установка начального дня недели в понедельник
    date.setDate(1 - (date.getDay() + 6) % 7);

    // Генерация календаря
    while (date.getMonth() === month - 1) {
        var row = table.insertRow(-1);
        for (var i = 0; i < 7; i++) {
            var cell = row.insertCell(i);
            cell.textContent = date.getDate();
            date.setDate(date.getDate() + 1);
        }
    }
}

// Задание 9
// Создать html-страницу с большой таблицей. 
// При клике по заголовку колонки, необходимо отсортировать 
// данные по этой колонке. Например: на скриншоте люди отсортированы по возрасту. Учтите, что числовые значения должны 
// сортироваться как числа, а не как строки.
function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("sortableTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];
            if (isNumeric(x.innerHTML) && isNumeric(y.innerHTML)) {
                if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            } else {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function isNumeric(str) {
    return /^\d+$/.test(str);
}