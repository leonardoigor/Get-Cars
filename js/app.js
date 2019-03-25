$(document).ready(function () {
    var load = $('#load').hide();
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
        btnSend.val("Sending...");
        btnSend.removeClass("btn-outline-info").addClass("btn-outline-warning");

        $.ajax({
            url: 'http://localhost:8000/Get-Cars.PHP/add.php',
            type: 'post',
            data: {
                'name': $("#name").val(),
                'models': $("#models").val(),
                'date1': $("#date1").val(),
                "date2": $("#date2").val(),
                "cost":$("#money").val()
            }
        }).done(function (DATE) {
            alert(DATE);
            btnSend.removeClass("btn-outline-warning").addClass("btn-outline-info").val("Send");
            $("#name").val('');
            $("#models").val('');
            $("#date1").val('');
            $("#date2").val('');
            $("#money").val('');
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
                url: 'http://localhost:8000/Get-Cars.PHP/Search.php',
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

                // alert(DATE);
            });
    });

    $('.telefone').mask('(00) 0 0000-0000');
    $('.dinheiro').mask('#.##0,00', {reverse: true});
    $('.estado').mask('AA');

    setInterval(getHour, 1000);
});
var divdestiny = $('#divDestiny');
var setdestiny = $('#setDestiny');
function Destiny(id) {
    divdestiny.css({ 'top': '36%', 'left': '24%' }).removeClass("d-none");
    var namedb = $('#nameDB' + id).html();
    var modeldb = $("#modelDB" + id).html();
    var date1db = $("#date1DB" + id).html();
    var date2db = $('#date2DB' + id).html();
    var costdb=$("#costDB"+id).html();
    divdestiny.animate({ 'opacity': 1 }, 1500);
    setdestiny.html("<span class='btn btn-outline-primary' style='position: relative;left: 93%;cursor:pointer;' onclick=exit()>X</span><tr><td>Name:  <span class=text-primary>" + namedb + "</span> </td></tr><tr><td>model: <span class=text-primary>" + modeldb + "</span> </td></tr> <tr><td>Sdate: <span class=text-primary>" + date1db + ' </td></tr> <tr><td>Edate: <span class=text-primary>' + date2db + "</span> </td></tr> <tr><td>Cost of veicule: <span class=text-primary>"+costdb+'</span>');


}

function exit() {
    divdestiny.addClass('d-none');
}

