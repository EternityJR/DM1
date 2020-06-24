    function Union(A, B) {
        var res = [];
        for (var i = 0; i < A.length; i++) {
            res[i] = A[i];
        }
        var j = 0;
        while (j < B.length) {
            for (var k = 0; k < res.length; k++) {
                if (res[k] != B[j]) {
                    res[res.length + 1] = B[j];
                }
            }
            j++;
        }
        return "Результат объединения множеств" + res;
    }
