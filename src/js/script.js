(function () {
    const wheel = document.querySelector('.wheel');

    let deg = 0;
    const rangoError = 5;

    wheel.addEventListener('click', () => {
        wheel.getElementsByClassName.pointerEvents = 'none';
        deg = Math.floor(10000 + Math.random() * 10000);
        console.log(deg);
        if (deg % 26 == 0) {
            deg = deg + rangoError;
        }
        // console.log(deg);
        wheel.style.transition = 'all 5s ease';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove('blur');
        wheel.getElementsByClassName.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        console.log(`---->${actualDeg}`);
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        //Se analizan los grados en sentido antihorario
        if (actualDeg >= 0 && actualDeg < 26) {
            // INTENTE NUEVAMENTE
            premiacion('');
        }
        if (actualDeg >= 26 && actualDeg < 52) {
            // MENCION EN VALLA
            premiacion('MENCION');
        }
        if (actualDeg >= 52 && actualDeg < 78) {
            // INTENTE NUEVAMENTE
            premiacion('');
        }
        if (actualDeg >= 78 && actualDeg < 104) {
            // ASESORIA
            premiacion('ASESORIA');
        }
        if (actualDeg >= 104 && actualDeg < 130) {
            // INTENTE NUEVAMENTE
            premiacion('');
        }
        if (actualDeg >= 130 && actualDeg < 156) {
            // DIFUSOR
            premiacion('DIFUSOR');
        }
        if (actualDeg >= 156 && actualDeg < 182) {
            // INTENTE NUEVAMENTE
            premiacion('');
        }
        if (actualDeg >= 182 && actualDeg < 208) {
            // MENCION EN VALLA
            premiacion('MENCION');
        }
        if (actualDeg >= 208 && actualDeg < 234) {
            // INTENTE NUEVAMENTE
            premiacion('');
        }
        if (actualDeg >= 234 && actualDeg < 260) {
            // ASESORIA
            premiacion('ASESORIA');
        }
        if (actualDeg >= 260 && actualDeg < 286) {
            // INTENTE NUEVAMENTE
            premiacion('');
        }
        if (actualDeg >= 286 && actualDeg < 312) {
            // DIFUSOR
            premiacion('DIFUSOR');
        }
        if (actualDeg >= 312 && actualDeg < 338) {
            // INTENTE NUEVAMENTE
            premiacion('');
        }
        if (actualDeg >= 338 && actualDeg < 360) {
            // ASESORIA
            premiacion('ASESORIA');
        }
    });
})();
