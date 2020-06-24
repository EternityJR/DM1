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

    for (var i = 0; i < array.length; i++) {
        if (
        array[i][0] % 2 == 0 &&
        array[i][1] % 2 != 0 &&
        array[i][2] % 2 != 0 &&
        array[i][3] % 2 == 0 &&
        array[i].length == 4
        ) {
            return array;
        }
        else {
            res = false;
            i += 1;
            str += "Ошибка в " + i + " элементе\n";
            alert(str);
        }
    }
    
}

function getDataUser(func) {
    var A = document.getElementById("arrayA").value;
    A = A.split(" ");
    if (!validate(A)) return;

    var B = document.getElementById("arrayB").value;
    B = B.split(" ");
    if (!validate(B)) return;

    var U = document.getElementById("arrayU").value;
    U = U.split(" ");
    if (!validate(U)) return;

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
            for (var j = 0; j < B.length; j++) {
                if (A[i] != B[j]){
                    res[i] = A[i];
                }
            }
        }
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

        var diff=[];
        for (var i=0; i < A.length; i++) {
            if (B.indexOf(A[i]) <= -1 ) { 
                result.push(A[i]);
            }
        }
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
        
    }