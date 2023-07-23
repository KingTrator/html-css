function abrir() {
    let cont = document.querySelector('div#conteudo')
    let cpf = document.getElementById('CPF')
    let rg = document.getElementById('RG')
    cont.style = ''

    if (cpf && rg) {
        // cpfCPF.remover() ou rgRG.remove() remove só os inputs é mais fácil remover tudo como feito abaixo:
        cont.innerHTML = ''
    } else {
    // Antes, eu havia feito "let cpf", o que é um erro sintático, pois "let", teoricamente, não permite redeclarações de suas variáveis. OBS!!
    cpf = document.createElement('input')
    cpf.type = 'number'
    cpf.id = 'CPF'

    rg = document.createElement('input') 
    rg.type = 'number'
    rg.id = 'RG'

    cont.append('CPF:  ', cpf, document.createElement('br'), 'RG:  ', rg)
    cont.style.backgroundColor = '#678ac4'
    cpf.style.marginBottom = '6px'
    cont.style.padding = '9px'
    }
}

/* OBS: Conforme o ChaGPT-4.0, é sim possível usar o let neste contexto, no sentido de que {} permitem uma redeclaração
do escopo da variável, logo, no primeiro momento, "cpf" e "rg" estariam em um escopo acima daquele que se encontra no bloco if.
Mas não estou tão certo disso. */


/* Por alguma o document.querySelector('div#conteudo).value não funciona, enquanto ele (sem . value) funciona.
Acho que é porque no começo eu só pego o valor. No outro caso eu pego a estrutura em si e eu consigo alterá-la. */ 
