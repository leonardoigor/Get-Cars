$(document).ready(function()
{
    function getHour()
    {
        var data=new Date();
        var horas=data.getHours();
        var minutos =data.getMinutes();
        var segundos =data.getSeconds();
    
        if(horas < 10)
        {
            horas ='0'+horas;
        }
        if(minutos < 10)
        {
            minutos ='0'+minutos;
        }
        if(segundos < 10)
        {
            segundos ='0'+segundos;
        }
        var setdate=horas+" / "+minutos+" / "+segundos;
        document.getElementById('hours').innerHTML=setdate;
      
    }

    $("#btn-send").click(function(e)
    {
        e.preventDefault();
        var btnSend = $("#btn-send");
        btnSend.val("Enviando...");
        btnSend.removeClass("btn-outline-info").addClass("btn-outline-warning");

        $.ajax({
            url:'http://localhost/Get-Cars.php/Search.php',
            type:'post',
            data:{
                'name':$("#name").val(),
                'date1':$("#date1").val(),
                "date2":$("#date2").val()
            }
        }).done(function(DATE)
        {
            console.log
            (DATE);
            btnSend.removeClass("btn-outline-warning").addClass("btn-outline-info").val("Enviar");
        });
    });



    setInterval(getHour,1000);
});