function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')
    if (fano.value.legth == 0 || fano.value > ano){
        window.alert('[ERRO] Verificar os dades e tente norvamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade < 4) {
                //Bebê
                img.setAttribute('src', 'bebeM.png')
            } else if (idade >= 4 && idade < 10) {
                //Criança
                img.setAttribute('src', 'CriançaM.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'JovemM.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'AdultoM.png')
            } else {
                //Idoso
                img.setAttribute('src', 'IdosoM.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade < 4) {
                //Bebê
                img.setAttribute('src', 'bebeF.png')
            } else if (idade >= 4 && idade < 10) {
                //Criança
                img.setAttribute('src', 'CriançaF.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'JovemF.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'AdultoF.png')
            } else {
                //Idoso
                img.setAttribute('src', 'IdosaF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade}.`
        res.appendChild(img)
    }
}