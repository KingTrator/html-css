function interruptor() {
        var divs = document.querySelectorAll('.div')
        var luz = document.querySelector('input#light')
        var art = document.querySelector('article#article')
        var luzBig = luz.value.toUpperCase()
        var img = document.querySelector('.img')
        if (luzBig == 'LIGAR LUZ') {
            art.style.background = '#e0d2d2'
            for(a = 0; a < divs.length ; a ++) {
                divs[a].style.backgroundColor = '#e0d2d2'
                luz.value = 'Desligar Luz'
            }
        } else {
            art.style.background = '#948b8b'
            for(a = 0; a < divs.length ; a++) {
                divs[a].style.backgroundColor = '#948b8b'
                luz.value = 'Ligar Luz'
            }
        }

}

/* NOVIDADES:
1. Se você usar apenas "style.background" a bgimage de fundo some, porque você alterou todo o backgroud.
Para corrigir isso, basta especificar "backgroundColor", que apenas a cor será alterada.
Ao tentar usar a função de "clarear" na classe div, descobri que o querySelector apenas não basta, sendo necessário o "All", quer dizer, isso eu já havia aprendido com o Guanabara... Na verdade (pensamento melhor), não existe bem uma novidade aqui. Só foi uma aplicação levemente mais sofisticada daquilo que já havia visto. Como há mais de uma div, eu preciso usar um looping para conseguir varrê-las por completo.
A maior novidade é o fato de que querySelectorAll ou símiles me entregam uma lista com cada uma das divs, 0, 1, 2, 3... tipo uma lista em Python */