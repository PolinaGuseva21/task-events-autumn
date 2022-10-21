/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.insertAdjacentElement('beforeend', button);
    button.addEventListener('click', function (event) {
        event.target.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.insertAdjacentElement('beforeend', li);
    }
    document.body.insertAdjacentElement('beforeend', ul);
    document
        .querySelector('ul')
        .addEventListener('mouseover', function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.title = event.target.textContent;
            }
        });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.textContent = 'tensor';
    document.body.insertAdjacentElement('beforeend', a);
    a.addEventListener(
        'click',
        function (event) {
            event.target.textContent += ` ${event.target.href}`;
            event.preventDefault();
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    li.textContent = 'Пункт';
    ul.insertAdjacentElement('beforeend', li);
    document.body.insertAdjacentElement('beforeend', ul);
    document.body.insertAdjacentElement('beforeend', button);
    document.querySelector('ul').addEventListener('click', function (event) {
        if (event.target.nodeName === 'LI') {
            event.target.textContent += '!';
        }
    });
    button.addEventListener('click', function () {
        document
            .querySelector('ul')
            .insertAdjacentElement(
                'beforeend',
                document.querySelector('ul').lastChild.cloneNode(true),
            );
    });
}
