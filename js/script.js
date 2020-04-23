function task1(e) {
    e.preventDefault();
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let sumResault = 0;
    for (let i = num1; i <= num2; i++) {
        sumResault += i;
    }
    document.getElementById("sumResault").value = sumResault;
}

function task2(e) {
    e.preventDefault();
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    while (a != b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    document.getElementById("resault2").value = a;
}

function task3(e) {
    e.preventDefault();
    let numb = +document.getElementById("numb").value;
    resault3 = '';
    for (let i = 1; i <= numb; i++) {
        if (numb % i == 0) {
            resault3 += (i + ' ');
        }
    }
    document.getElementById("resault3").value = resault3;
}

function task4(e) {
    e.preventDefault();
    let howNum = +document.getElementById("howNum").value;
    resault4 = 0;
    while (howNum >= 1) {
        howNum /= 10;
        resault4++;
    }
    document.getElementById("resault4").value = resault4;
}

function task5(e) {
    e.preventDefault();
    let i = 1, neg = 0, pos = 0, zero = 0;
    while (i <= 10) {
        let val10 = +prompt('Введите число:');;
        if (val10) {
            if (val10 > 0) {
                pos++;
            } else {
                neg++;
            }
        } else {
            zero++;
        }
        i++;
    }
    document.getElementById("resault5").value = `pos = ${pos} neg = ${neg} zero = ${zero}`;
}

function task6(e) {
    e.preventDefault();
    while (true) {
        a = +prompt('Введите первое число:');
        b = +prompt('Введите второе число:');
        action = prompt('Введите действие:');

        temp = prompt(`Результат: ${eval(a + action + b)}.\n0 - Завершить!!!\n другое число - Продолжить! `);
        if (temp == 0) {
            break;
        }
    }
}

function task8(e) {
    e.preventDefault();
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let i = 1;
    let d = 0;
    while (true) {
        if (confirm(`${days[d]}. "ОК" - следующий день`)) {
            d++;
            i++;
            if (d == 7) {
                d = 0;
            }
        } else if (i == 7) {
            i = 1;
        }
        else {
            alert('Мог бы еще покликать...')
            return false;
        }

    }

}








