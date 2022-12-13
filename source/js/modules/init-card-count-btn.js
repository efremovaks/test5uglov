const initCardCountBtn = () => {

    const col = document.getElementById('col');
    const plus = document.querySelectorAll('.order__card-count-btn-plus');
    const minus = document.querySelectorAll('.order__card-count-btn-minus');


    if (parseInt(col.value) >= 2) {
        for (let m = 0; m < minus.length; m++) {

            console.log(parseInt(col.value))
            minus[m].classList.remove('disabled');


            minus[m].onclick = function () {

                col.value = parseInt(col.value) - 1;

                if (col.value < 2) {
                    minus[m].classList.add('disabled');
                }
            };
        }
    }


    for (let p = 0; p < plus.length; p++) {
        plus[p].onclick = function () {
            col.value = parseInt(col.value) + 1;
        };

    };

};

export { initCardCountBtn };
