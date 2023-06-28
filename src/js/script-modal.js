const texto_regalo = document.querySelector('#texto-regalo');
const imagen_regalo = document.querySelector('#imagen-regalo');

const premiacion = (tipo) => {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');

    switch (tipo) {
        case 'ASESORIA':
            texto_regalo.innerHTML = 'ASESORÍA EN SITIO';
            imagen_regalo.src = './src/img/premio1.png';
            break;
        case 'DIFUSOR':
            texto_regalo.innerHTML = 'DIFUSOR';
            imagen_regalo.src = './src/img/premio1.png';
            break;
        case 'MENCION':
            texto_regalo.innerHTML = 'MENCIÓN EN VALLA LED';
            imagen_regalo.src = './src/img/premio1.png';
            break;
        default:
            texto_regalo.innerHTML = '';
            imagen_regalo.src = './src/img/perdio.png';
            break;
    }
};

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
