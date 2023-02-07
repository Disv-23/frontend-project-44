### Hexlet tests and linter status:
[![Actions Status](https://github.com/Disv-23/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Disv-23/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/1bfab0f4e521174e44ce/maintainability)](https://codeclimate.com/github/Disv-23/frontend-project-44/maintainability)

# Описание проекта:
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

## Игры:
* Калькулятор. Арифметические выражения, которые необходимо вычислить.
* Прогрессия. Поиск пропущенных чисел в последовательности чисел.
* Определение четного числа.
* Определение наибольшего общего делителя.
* Определение простого числа.

## Игра: "Проверка на чётность"
Необходимо реализовать игру "Проверка на чётность". Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное:
>Welcome to the Brain Games!
>May I have your name? Bill
>Hello, Bill!
>Answer "yes" if the number is even, otherwise answer "no".
>Question: 15
>Your answer: yes

В случае, если пользователь даст неверный ответ, необходимо завершить игру и вывести сообщение:
>'yes' is wrong answer ;(. Correct answer was 'no'.
>Let's try again, Bill!

В случае, если пользователь ввел верный ответ, нужно отобразить:
>Correct!

и приступить к следующему числу.
Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:
>Congratulations, Bill!

Вывод должен получиться следующий:
>brain-even

>Welcome to the Brain Games!
>May I have your name? Sam
>Hello, Sam!
>Answer "yes" if the number is even, otherwise answer "no".
>Question: 15
>Your answer: no
>Correct!
>Question: 6
>Your answer: yes
>Correct!
>Question: 7
>Your answer: no
>Correct!
>Congratulations, Sam!

* Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.

[Пример игры Game Brain-even: ](https://asciinema.org/a/qXrtz0Ii5vuq8y6jMOIvLb5Ww)

[Game Brain-calc:](https://asciinema.org/a/XfKdVthcrmxKGmgDKftcOJBLX)

[Game Brain-gcd:](https://asciinema.org/a/EqRBDFU0PNveRYcOprxk9dQIr)

[Game Brain-progression](https://asciinema.org/a/jxY3wWMOS4xb18EOp4BIQX9P9)

[Game Brain-prime](https://asciinema.org/a/cMUYoPxCpMRiIbnfeLRUwC5bm)
