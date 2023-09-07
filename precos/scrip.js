function verificar() {
    var data = new Date()
    var ano = Number('1')
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano * Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Baixada Santitas'
            if (ano >= 0 && idade < 10){
            //criança
                var idade = (`tem valor médio de R$${idade*10+300},00 a R$${idade*10+700},00`)
                img.setAttribute('src','imagem/h1.jpg')
            }else if (idade < 30){
            //jovem
                var idade = (`tem valor médio de R$${idade*9+300},00 a R$${idade*10+700},00`)
                img.setAttribute('src','imagem/h2.jpg')
            }else if(idade < 50){
            //adulto
                var idade = (`tem valor médio de R$${idade*8+300},00 a R$${idade*9+700},00`)
                img.setAttribute('src','imagem/h3.jpg')
            } else {
            //idoso
                var idade = (`tem valor médio de R$${idade*7+300},00 a R$${idade*8+700},00`)
                img.setAttribute('src','imagem/h4.jpg')
            }
     } else if(fsex[1].checked){
            genero = 'Outros' 
            if (idade >= 0 && idade < 1000000000000){
            //criança
                 var idade = (`Solicito que `)
                img.setAttribute('src','imagem/001.jpeg')
            }/*else if (idade < 80){
            //jovem
                 var idade = (`R$${idade*6+500},00 a R$${idade*7+900},00`)
                img.setAttribute('src','imagem/m2.jpg')
            }else if(idade < 150){
            //adulto
                 var idade = (`R$${idade*5+500},00 a R$${idade*6+900},00`)
                img.setAttribute('src','imagem/m3.jpg')
            } else {
            //idoso
                var idade = (`R$${idade*4+500},00 a R$${idade*5+900},00`)
                img.setAttribute('src','imagem/m4.jpg')
        }*/
    }
        res.innerHTML = `Transporte com caminhão baú de Baixada Santista x ${genero}, ${idade} para melhor avaliação entre em contato<br>(13) 99724-5567<br>Obrigado pela compreensão<br>`
        res.appendChild(img).style.borderRadius = '10%'
        img.style.padding = '5px'
        img.style.width = '280px'
    }
}
