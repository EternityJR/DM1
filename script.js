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
                res[res.length + 1] = B[j];
            }
            j++;
        }
        return "Результат объединения множеств" + res;
    }
function validate(array) {
    var res = true;
    var str = "";
    for (var i = 0; i < array.length; i++) {
      if (
        array[i][0] % 2 != 0 &&
        array[i][1] % 2 == 0 &&
        array[i][2] % 2 == 0 &&
        array[i][3] % 2 != 0 &&
        array[i].length > 4
      ) {
        str += "Ошибка в " + i + " элементе\n";
        res = false;
      }
    }
    if (!res) alert(str);
    return res;
}

function getDataUser() {
    var func = 0;
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
