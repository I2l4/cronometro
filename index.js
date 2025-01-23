
var cronometro = (function(){

    var temporizador = document.getElementById('temporizador');
    var botoes = {
       iniciar: document.getElementById ('btn-iniciar'),
       pausar: document.getElementById ('btn-pausar'),
       zerar: document.getElementById ('btn-zerar')
    }

    botoes.iniciar.addEventListener('click', (e) => {
       e.preventDefault();
       iniciar();
    });

    botoes.pausar.addEventListener('click', (e) => {
        e.preventDefault();
        parar();
     });

     botoes.zerar.addEventListener('click', (e) => {
        e.preventDefault();
        zerar();
     });



    // Variáveis do cronômetro:
    var ss = 0;
    var mm = 0;
    var hh = 0;
    var cron;

    function iniciar(){

        cron= setInterval(() => {
           //Aqui fazer o cálculo
           timer();
            
        }, 100);
    }

    function parar(){

        clearInterval(cron);
    }

    function zerar(){

        parar();
        ss = 0;
        mm = 0;
        hh = 0;

        atualizarTempo();
    }



    function timer(){
        ss++;

        if(ss == 60){

            mm++;
            ss = 0;

        }else if(mm == 60){

            hh++;
            mm = 0;
        }

        atualizarTempo();

    }

    function retornarTempoAtualizado (){

        var segundos = (ss < 10) ? "0" + ss : ss;
        var minutos = (mm < 10) ? "0" + mm : mm;
        var horas = (hh < 10) ? "0" + hh : hh;
    
        return `${horas}:${minutos}:${segundos}`;
    }

    function atualizarTempo(){

        temporizador.textContent = retornarTempoAtualizado ();
    }




}) ()
    
