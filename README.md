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


    Welcome to the Brain Games!
    May I have your name? Sam
    Hello, Sam!
    Answer "yes" if the number is even, otherwise answer "no".

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

## Игра: "Калькулятор"
Необходимо реализовать игру "Калькулятор". Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

Вывод должен получиться следующий:

>brain-calc


>Welcome to the Brain Games!

>May I have your name? Sam

>Hello, Sam!

>What is the result of the expression?

>Question: 4 + 10

>Your answer: 14

>Correct!

>Question: 25 - 11

>Your answer: 14

>Correct!

>Question: 25 * 7

>Your answer: 175

>Correct!

>Congratulations, Sam!

* Достаточно реализовать следующие операции: +, - и *.
* Операции, как и числа, выбираются случайным образом.

В случае, если пользователь даст неверный ответ, необходимо вывести:

>Question: 25 * 7

>Your answer: 145

>'145' is wrong answer ;(. Correct answer was '175'.

>Let's try again, Sam!

и завершить игру.

На данном этапе можно заметить, что игры имеют общий порядок выполнения (задать вопрос, получить ответ, сравнить ответ и т.д.). Эту логику можно вынести в одно место и переиспользовать внутри конкретных игр для устранения дублирования кода.

[Пример игры Game Brain-calc:](https://asciinema.org/a/XfKdVthcrmxKGmgDKftcOJBLX)

## Игра "НОД"
Необходимо реализовать игру "наибольший общий делитель (НОД)". Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Вывод должен получиться следующий:

>brain-gcd


>Welcome to the Brain Games!

>May I have your name? Sam

>Hello, Sam!

>Find the greatest common divisor of given numbers.

>Question: 25 50

>Your answer: 25

>Correct!

>Question: 100 52

>Your answer: 4

>Correct!

>Question: 3 9

>Your answer: 3

>Correct!

>Congratulations, Sam!

В случае, если пользователь даст неверный ответ, необходимо вывести:

>Question: 25 50

>Your answer: 1

>'1' is wrong answer ;(. Correct answer was '25'.

>Let's try again, Sam!


[Пример игры Game Brain-gcd:](https://asciinema.org/a/EqRBDFU0PNveRYcOprxk9dQIr)

## Игра "Арифметическая прогрессия"
Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

*Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5 чисел
*Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом)
Пример:

>brain-progression


>Welcome to the Brain Games!

>May I have your name? Sam

>Hello, Sam!

>What number is missing in the progression?

>Question: 5 7 9 11 13 .. 17 19 21 23

>Your answer: 15

>Correct!

>Question: 2 5 8 .. 14 17 20 23 26 29

>Your answer: 11

>Correct!

>Question: 14 19 24 29 34 39 44 49 54 ..

>Your answer: 59

>Correct!

>Congratulations, Sam!

В случае, если пользователь даст неверный ответ, необходимо вывести:

>Question: 5 7 9 11 13 .. 17 19 21 23

>Your answer: 1

>'1' is wrong answer ;(. Correct answer was '15'.

>Let's try again, Sam!


[Пример игры Game Brain-progression](https://asciinema.org/a/jxY3wWMOS4xb18EOp4BIQX9P9)

## Игра "Простое ли число?"
Пример:

>brain-prime


>Welcome to the Brain Games!

>May I have your name? Sam

>Hello, Sam!

>Answer "yes" if given number is prime. Otherwise answer "no".

>Question: 7

>Your answer: yes

>Correct!

Весь вывод и логика в случае правильного и неправильного ответа повторяют предыдущие шаги.

[Пример игры Game Brain-prime](https://asciinema.org/a/cMUYoPxCpMRiIbnfeLRUwC5bm)
