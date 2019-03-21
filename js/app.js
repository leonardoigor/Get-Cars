$(document).ready(function () {
    var load=$('#load').hide();
    $('body').removeClass('bg-primary');
    $("#body").removeClass("d-none");
    function getHour() {
        var data = new Date();
        var horas = data.getHours();
        var minutos = data.getMinutes();
        var segundos = data.getSeconds();

        if (horas < 10) {
            horas = '0' + horas;
        }
        if (minutos < 10) {
            minutos = '0' + minutos;
        }
        if (segundos < 10) {
            segundos = '0' + segundos;
        }
        var setdate = horas + " / " + minutos + " / " + segundos;
        document.getElementById('hours').innerHTML = setdate;

    }

    $("#btn-send").click(function (e) {
        e.preventDefault();
        var btnSend = $("#btn-send");
        btnSend.val("Enviando...");
        btnSend.removeClass("btn-outline-info").addClass("btn-outline-warning");

        $.ajax({
            url: 'http://localhost/Get-Cars.php/add.php',
            type: 'post',
            data: {
                'name': $("#name").val(),
                'models': $("#models").val(),
                'date1': $("#date1").val(),
                "date2": $("#date2").val()
            }
        }).done(function (DATE) {
            console.log
                (DATE);
            btnSend.removeClass("btn-outline-warning").addClass("btn-outline-info").val("Enviar");
        });
    });

    $("#btn-search").click(function (event) {
        event.preventDefault();
        var search = $("#searchInput").val();
        var searchBTN = $("#btn-search");
        var table = $("#table");

        table.animate({ 'margin-left': '-900px' });

        searchBTN.html("Searching...").removeClass("btn-outline-success").addClass("btn-outline-danger").click(false);

        $.ajax(
            {
                url: 'http://localhost/Get-Cars.php/Search.php',
                type: 'post',
                data:
                {
                    'search': search
                }

            }).done(function (DATE) {
                var table = $("#table");
                table.css({ 'margin-left': '900px' });
                table.html(DATE).animate({ 'margin-left': '0' }, 1000);

                searchBTN.removeClass("btn-outline-danger").addClass("btn-outline-success").html("SEARCH");

                console.log(DATE);
            });
    });



    setInterval(getHour, 1000);
});