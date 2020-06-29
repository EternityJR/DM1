/*
    *проверка на соответствие типа
    *
    *проверка каждого символа на соответствие
    *
    *@глобальные переменные res, str
    *@param array
    *return res
*/
function validate(array) {
    var res = true;
    var str = "";
    if (array == "") return alert("Элементы не введены");
    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i][0]) % 2 == 0 &&
        parseInt(array[i][1]) % 2 != 0 &&
        parseInt(array[i][2]) % 2 != 0 &&
        parseInt(array[i][3]) % 2 == 0 &&
        array[i].length == 4
        ) {

        }
        else {
            res = false;
            var k = i + 1;
            str += "Ошибка в " + k + " элементе\n";
            alert(str);
        }
    }
    return res;
}

function getDataUser(func) {
    var A = document.getElementById("arrayA").value;
    A = A.split(" ");
    if (!validate(A)) return;
    
    var B = document.getElementById("arrayB").value;
    B = B.split(" ");
    if (func != 5) {
        if (!validate(B)) return;
    }

    var U = document.getElementById("arrayU").value;
    U = U.split(" ");

    if (func == 1)
      document.getElementById("result").innerHTML = Union(A, B);
    else if (func == 2)
      document.getElementById("result").innerHTML = Intersection(A, B);
    else if (func == 3)
      document.getElementById("result").innerHTML = Addition(A, B);
    else if (func == 4)
      document.getElementById("result").innerHTML = Difference(A, B);
    else 
      document.getElementById("result").innerHTML = Negating(A, U);
}

    /*
    *объединение множеств
    *
    *вывод всех уникальных значений из обоих множеств
    *
    *@глобальные переменные 
    *@param A, B
    *return res
    */
    function Union(A, B) {
        var res = [];
        for (var i = 0; i < A.length; i++) {
            res[i] = A[i];
        }
        var j = 0;
        while (j < B.length) {
            var check = false;
            for (var k = 0; k < res.length; k++) {
                if (res[k] == B[j]) {
                    check = true;
                }
            }
            if (check == false) {
                res[res.length] = B[j];
            }
            j++;
        }
        return "Результат объединения множеств: " + res;
    }

    /*
    *пересечение множеств
    *
    *вывод всех уникальных значений, которые встречаются одновременно в двух заданных множествах
    *
    *@глобальные переменные 
    *@param A, B
    *return res
    */
    function Intersection(A, B) {
        var res = [];
        for (var i = 0; i < A.length; i++) {
            var check = false;
            for (var j = 0; j < B.length; j++) {
                if (A[i] == B[j]){
                    check = true;
                }
            }
            if (check == true) {
                res[res.length] = A[i];
            }
        }
        if (res == "") return "Не было найдено";
        return "Результат пересечения множеств: " + res;
    }

    /*
    *дополнение множеств
    *
    *вывод всех уникальных значений из множества A и значений из множества B, которые ещё не встречались
    *
    *@глобальные переменные 
    *@param A, B
    *return res
    */
    function Addition(A, B) {
        var res = A;
        var i = 0;
        while (i < B.length) {
            var check = false;
            for (var k = 0; k < res.length; k++) {
                if (res[k] == B[i]) {
                    check = true;
                }
            }
            if (check == false) {
                res[res.length] = B[i];
            }
            i++;
        }
        return "Результат дополнения: " + res;
      
    }

    /*
    *симметрическая разность
    *
    *вывод всех уникальных значений из множеств A и B, кроме тех, что встречаются в обоих
    *
    *@глобальные переменные 
    *@param A, B
    *return res
    */
    function Difference(A, B) {
        var res1 = [];
        for (var i = 0; i < A.length; i++) {
            res1[i] = A[i];
        }
        var j = 0;
        while (j < B.length) {
            var check = false;
            for (var k = 0; k < res1.length; k++) {
                if (res1[k] == B[j]) {
                    check = true;
                }
            }
            if (check == false) {
                res1[res1.length] = B[j];
            }
            j++;
        }
        var res2=[];
        for (var i = 0; i < A.length; i++) {
            var check = false;
            for (var j = 0; j < B.length; j++) {
                if (A[i] == B[j]){
                    check = true;
                }
            }
            if (check == true) {
                res2[res2.length] = A[i];
            }
        }

        var diff=[];
        for (var i=0; i < res1.length; i++) {
            if (res2.indexOf(res1[i]) <= -1 ) { 
                diff.push(res1[i]);
            }
        }
        if (diff == "") return "Не было найдено";
        return "Результат симметрической разности:" + diff;
    }

    /*
    *отрицание множества А относительно универсального множества
    *
    *вывод всех значений, которые входят в универсальное множество U, кроме тех, что входят в множество А
    *
    *@глобальные переменные 
    *@param A, U
    *return res
    */
    function Negating(A, U) {

        if (!validate(U)) return;

        var diff=[];
        for (var i=0; i < U.length; i++) {
            if (A.indexOf(U[i]) <= -1 ) { 
                diff.push(U[i]);
            }
        }
        if (diff == "") return "Не было найдено";
        return "Результат отрицания:" + diff;
    }