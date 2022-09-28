function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var img = document.getElementById('foto')
    var res = document.getElementById('res')


    if(fano.value.length == 0 || fano.value > ano){

        window.alert('[ERRO] verifique os dados inseridos, e tente novamente!!')

    }else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        if(fsex[1].checked){

            genero = 'Mulher'

            if(idade <= 10){

                img.src = 'bebeF.jpg'

            }else if(idade <=21){

                img.src = 'jovemF.jpg'

            }else if(idade <=60){

                img.src = 'adultoF.jpg'

            }else{

                img.src = 'idosoF.jpg'

            }

        }else{

            genero = 'Homem'

            if(idade <= 10){

                img.src = 'bebeM.jpg'

            }else if(idade <=21){

                img.src = 'jovemM.jpg'

            }else if(idade <=60){

                img.src = 'adultoM.jpg'

            }else{

                img.src = 'idosoM.jpg'

            }

        }
        
        res.innerHTML = `Detectamos ${genero} de ${idade} anos!`
        res.appendChild(img)


    }

}