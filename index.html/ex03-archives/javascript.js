function contador() {
    let f = document.querySelector('input#first').value
    let e = document.querySelector('input#end').value
    let p = document.querySelector('input#step').value
    let a = document.querySelector('div#answer')
    let footer = document.querySelector('footer#footer')
    let pNeg = -p
    a.style.color = 'black'
    footer.style.textAlign = 'center'
    a.innerHTML = '' // Garante que não se acumularão resultados 
    if (f === '' || e === '' || p === '') {
        a.style.color = 'red'
        a.innerHTML = 'Impossível contar'
    } else {
        f = Number(f.replace(',', '.'))
        e = Number(e.replace(',', '.'))
        p = Number(p.replace(',', '.'))
        var n = 0
        n = (e - f)/p 
        if (n > 500) {
            a.innerHTML = 'Não exagere.'
        } else {
            if (n > 67) {
                footer.style.textAlign = 'left'
            }
            if (f <= e && p > 0) {
                for (let c = f; c <= e; c += p) {
                    a.innerHTML += `👉${c.toFixed(2)} `
                    if (c == e) {
                        a.innerHTML += '🚩'
                    }
                }
            } else if (f > e && p > 0) {
                for (let c = f; c >= e; c += pNeg) {
                    a.innerHTML += `👉${c.toFixed(2)} `
                    if (c == e) {
                        a.innerHTML += '🚩'
                    }
                }
            } else if (p <= 0) {
                a.style.color = 'red'
                a.innerHTML = '<p>O passo deve ser positivo e maior que zero.</p>'
            }
        }
    }
}
// APRENDIZADOS:
/* Este exercício foi uma bosta de se fazer. Isso porque eu recebi alguns erros que ainda não entendo a natureza deles.
Por exemplo, se eu faço let f = document.querySelector('textaqui') e só depois
faço var f = Number(f), dá erro e o código trava completamente.
Por que essa bosta? Não tenha a menor ideia.
Então ou eu faço do jeito que está aí, colocando toda aqueala merda dentro da função Number(), ou eu crio novas variáveis, como fez o Guanabara, 
e coloco só a variável nela, assim: var nova = Number(f), por exemplo.
Enfim, é bem irritante */