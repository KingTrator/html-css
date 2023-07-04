 function verify() {
    var data = new Date()
    var year = data.getFullYear()
    var formY = document.getElementById('year')
    var res = document.querySelector('div#res')
    var death = document.querySelector('body#body')
    if (Number(formY.value) > year || formY.value.length == 0) {
        res.style.color = 'red'
        res.innerHTML = `Por favor, digite um valor válido </p> o ano digitado foi (${formY.value}), estamos em ${year}.`
    } else if (Number(formY.value) < 1900) {
        res.innerHTML = `Quem nasceu em ${Number(formY.value)} já morreu (há um bom tempo). <p> Digite um valor válido.</p>`
        res.style.color = 'red'
    } else {
        var fsex = document.getElementsByName('radg')
        var age = year - Number(formY.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gender = 'Homem'
            if (age >= 0 && age <= 1) {
                img.setAttribute('src', 'images/mbaby.jpg')
            } else if (age <= 5) {
                img.setAttribute('src', 'images/mtoddler.jpg' )
            } else if (age <= 10) {
                img.setAttribute('src', 'images/mchild.jpg')
            } else if (age <= 13) {
                img.setAttribute('src', 'images/mpreteen.jpg')
            } else if (age <= 19) {
                img.setAttribute('src', 'images/mteen.jpg')
            } else if (age <= 33) {
                img.setAttribute('src', 'images/myoungadult.jpg')
            } else if (age <= 49) {
                img.setAttribute('src', 'images/mman.jpg')
            } else if (age <= 65) {
                img.setAttribute('src', 'images/m50s.jpg')
            } else if (age <= 75 ) {
                img.setAttribute('src', 'images/m60s.jpg')
            } else if (age < 100) {
                img.setAttribute('src', 'images/mgrandpa.jpg')
            } else {
                img.setAttribute('src', 'images/plus100.jpg')
            }
        } else {
            gender = 'Mulher'
            if (age >= 0 && age <= 1) {
                img.setAttribute('src', 'images/fbaby.jpg')
            } else if (age <= 5) {
                img.setAttribute('src', 'images/ftoddler.jpg')
            } else if (age <= 10) {
                img.setAttribute('src', 'images/fchild.jpg')
            } else if (age <= 13) {
                img.setAttribute('src', 'images/fpreteen.jpg')
            } else if (age <= 19) {
                img.setAttribute('src', 'images/fteen.jpg')
            } else if (age <= 33) {
                img.setAttribute('src', 'images/fyoungadult.jpg')
            } else if (age <= 49) {
                img.setAttribute('src', 'images/fadult.jpg')
            } else if (age <= 65) {
                img.setAttribute('src', 'images/f50s.jpg')
            } else if (age <= 75 ) {
                img.setAttribute('src', 'images/f60s.jpg')
            } else if (age < 100) {
                img.setAttribute('src', 'images/fgranny.jpg')
            } else {
                img.setAttribute('src', 'images/plus100.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>${gender} de ${age} anos.</p>` 
        if (age >= 100) {
            res.innerHTML += `<p id="end">Life is soooo shoooort.... now you're here... and now, you're not</p></small>`  
            body.style.background = 'black'
        } else {
            body.style.background = '#3b7fcf'
            // É preciso retorna a cor original, se não da m*
        }
        res.appendChild(img)

    }
}

/* CONSIDERAÇÕES:
Foi muito divertido resolver esse exercício. POr meio do método "innerHTML", dentro de crases, é bem fácil editar meu código HTML5 original. Inclusive é útil para combinar CSS com Js. Eu edito aqui, ponho tag diretamente aqui e lá no CSS eu faço outras modificações de interesse para a tag em específico.
IMPORTANTE: Sempre que usar uma tag em Js, ponha um "id" nela, porque do contrário, o Js poderá estragar todo o estilo da página. Este código inclusive enfrenta esse problema. A tag <p></p> usada para dar a mensagem de aviso lá no início... aliás, agora que vi, nem é ela. É que eu coloquei na "res" o padrão de color red. Enfim, é importante estar atento. Tags tem que ser específicas, porque se não quebram todo o estilo. */