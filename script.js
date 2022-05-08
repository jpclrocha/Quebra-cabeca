var tabuleiro = [];

function sortear(){
    tabuleiro.splice(0, tabuleiro.length)
    while(tabuleiro.length < 8){
        var aleatorio = String(Math.floor(Math.random() * 8 + 1))
        if (tabuleiro.indexOf(aleatorio) == -1)
            tabuleiro.push(aleatorio);
    }
    tabuleiro[8] = '&nbsp;'
    montarTabuleiro()
}

var ganhar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '&nbsp;'
]

function testeDeVitoria(){
    if(comparar(ganhar , tabuleiro)){
        document.getElementById('res') .innerHTML = 'Você ganhou!'
    }else{
        alert('Tente um pouco mais')
    }
}

function comparar(comparate, comparator) {
    let i = 0;
    for (x of comparate) {
        if (x !== comparator[i]) {
            return false;
        }
        i++
    }
    return true;
}

function montarTabuleiro() {
    document.getElementById('posicao0').innerHTML = tabuleiro[0];
    document.getElementById('posicao1').innerHTML = tabuleiro[1];
    document.getElementById('posicao2').innerHTML = tabuleiro[2];
    document.getElementById('posicao3').innerHTML = tabuleiro[3];
    document.getElementById('posicao4').innerHTML = tabuleiro[4];
    document.getElementById('posicao5').innerHTML = tabuleiro[5];
    document.getElementById('posicao6').innerHTML = tabuleiro[6];
    document.getElementById('posicao7').innerHTML = tabuleiro[7];
    document.getElementById('posicao8').innerHTML = tabuleiro[8];
}

function jogar(posicao) {
    switch (posicao) {
        case 0:
            // 1 , 3
            if (tabuleiro[1] == '&nbsp;' || tabuleiro[3] == '&nbsp;') {
                if (tabuleiro[1] == '&nbsp;') {
                    document.getElementById('posicao1').innerHTML = tabuleiro[0];
                    document.getElementById('posicao0').innerHTML = '&nbsp;';
                    tabuleiro[1] = tabuleiro[0]
                    tabuleiro[0] = '&nbsp;'
                    break
                } else if (tabuleiro[3] == '&nbsp;') {
                    document.getElementById('posicao3').innerHTML = tabuleiro[0];
                    document.getElementById('posicao0').innerHTML = '&nbsp;';
                    tabuleiro[3] = tabuleiro[0]
                    tabuleiro[0] = '&nbsp;'
                    break
                }
            } else {
                alert('Você não pode mover essa peça!');
            }
            break;

        case 1:
            // 0 , 2 , 4
            if (tabuleiro[0] == '&nbsp;' || tabuleiro[2] == '&nbsp;' || tabuleiro[4] == '&nbsp;') {
                if (tabuleiro[0] == '&nbsp;') {
                    document.getElementById('posicao0').innerHTML = tabuleiro[1];
                    document.getElementById('posicao1').innerHTML = '&nbsp;'
                    tabuleiro[0] = tabuleiro[1]
                    tabuleiro[1] = '&nbsp;'
                    break;
                } else if (tabuleiro[2] == '&nbsp;') {
                    document.getElementById('posicao2').innerHTML = tabuleiro[1];
                    document.getElementById('posicao1').innerHTML = '&nbsp;'
                    tabuleiro[2] = tabuleiro[1]
                    tabuleiro[1] = '&nbsp;'
                    break;
                } else if (tabuleiro[4] == '&nbsp;') {
                    document.getElementById('posicao4').innerHTML = tabuleiro[1];
                    document.getElementById('posicao1').innerHTML = '&nbsp;'
                    tabuleiro[4] = tabuleiro[1]
                    tabuleiro[1] = '&nbsp;'
                    break;
                }

            } else {
                alert('Você não pode mover essa peça!')
            }
            break;
        case 2:
            // 1 , 5
            if (tabuleiro[1] == '&nbsp;' || tabuleiro[5] == '&nbsp;') {
                if (tabuleiro[1] == '&nbsp;') {
                    document.getElementById('posicao1').innerHTML = tabuleiro[2];
                    document.getElementById('posicao2').innerHTML = '&nbsp;'
                    tabuleiro[1] = tabuleiro[2]
                    tabuleiro[2] = '&nbsp;'
                    break;
                } else if (tabuleiro[5] == '&nbsp;') {
                    document.getElementById('posicao5').innerHTML = tabuleiro[2];
                    document.getElementById('posicao2').innerHTML = '&nbsp;'
                    tabuleiro[5] = tabuleiro[2]
                    tabuleiro[2] = '&nbsp;'
                    break;
                }
            } else {
                alert('Você não pode mover essa peça!')
            }
            break;
        case 3:
            // 0 , 4 , 6
            if (tabuleiro[0] == '&nbsp;' || tabuleiro[4] == '&nbsp;' || tabuleiro[6] == '&nbsp;') {
                if (tabuleiro[0] == '&nbsp;') {
                    document.getElementById('posicao0').innerHTML = tabuleiro[3];
                    document.getElementById('posicao3').innerHTML = '&nbsp;'
                    tabuleiro[0] = tabuleiro[3]
                    tabuleiro[3] = '&nbsp;'
                    break;
                } else if (tabuleiro[4] == '&nbsp;') {
                    document.getElementById('posicao4').innerHTML = tabuleiro[3];
                    document.getElementById('posicao3').innerHTML = '&nbsp;'
                    tabuleiro[4] = tabuleiro[3]
                    tabuleiro[3] = '&nbsp;'
                    break;
                } else if (tabuleiro[6] == '&nbsp;') {
                    document.getElementById('posicao6').innerHTML = tabuleiro[3];
                    document.getElementById('posicao3').innerHTML = '&nbsp;'
                    tabuleiro[6] = tabuleiro[3]
                    tabuleiro[3] = '&nbsp;'
                    break;
                } else {
                    alert('Você não pode mover essa peça!')
                }
            } else {
                alert('Você não pode mover essa peça!')
            }
            break;
        case 4:
            // 1 , 3 , 5 , 7
            if (tabuleiro[1] == '&nbsp;' || tabuleiro[3] == '&nbsp;' || tabuleiro[5] == '&nbsp;' || tabuleiro[7] == '&nbsp;') {
                if (tabuleiro[1] == '&nbsp;') {
                    document.getElementById('posicao1').innerHTML = tabuleiro[4];
                    document.getElementById('posicao4').innerHTML = '&nbsp;'
                    tabuleiro[1] = tabuleiro[4]
                    tabuleiro[4] = '&nbsp;'
                    break;
                } else if (tabuleiro[3] == '&nbsp;') {
                    document.getElementById('posicao3').innerHTML = tabuleiro[4];
                    document.getElementById('posicao4').innerHTML = '&nbsp;'
                    tabuleiro[3] = tabuleiro[4]
                    tabuleiro[4] = '&nbsp;'
                    break;
                } else if (tabuleiro[5] == '&nbsp;') {
                    document.getElementById('posicao5').innerHTML = tabuleiro[4];
                    document.getElementById('posicao4').innerHTML = '&nbsp;'
                    tabuleiro[5] = tabuleiro[4]
                    tabuleiro[4] = '&nbsp;'
                    break;
                } else if (tabuleiro[7] == '&nbsp;') {
                    document.getElementById('posicao7').innerHTML = tabuleiro[4];
                    document.getElementById('posicao4').innerHTML = '&nbsp;'
                    tabuleiro[7] = tabuleiro[4]
                    tabuleiro[4] = '&nbsp;'
                    break;
                }
            } else {
                alert('Você não pode mover essa peça!');
            }
            break;
        case 5:
            // 4, 8, 2
            if (tabuleiro[4] == '&nbsp;' || tabuleiro[8] == '&nbsp;' || tabuleiro[2] == '&nbsp;') {
                if (tabuleiro[4] == '&nbsp;') {
                    document.getElementById('posicao4').innerHTML = tabuleiro[5];
                    document.getElementById('posicao5').innerHTML = '&nbsp;';
                    tabuleiro[4] = tabuleiro[5];
                    tabuleiro[5] = '&nbsp;';
                    break;
                }
                else if (tabuleiro[8] == '&nbsp;') {
                    document.getElementById('posicao8').innerHTML = tabuleiro[5];
                    document.getElementById('posicao5').innerHTML = '&nbsp;';
                    tabuleiro[8] = tabuleiro[5];
                    tabuleiro[5] = '&nbsp;';
                    break;
                }
                else if (tabuleiro[2] == '&nbsp;') {
                    document.getElementById('posicao2').innerHTML = tabuleiro[5];
                    document.getElementById('posicao5').innerHTML = '&nbsp;';
                    tabuleiro[2] = tabuleiro[5];
                    tabuleiro[5] = '&nbsp;';
                    break;
                }

            } else {
                alert('Você não pode mover essa peça!');
            }
            break;
        case 6:
            // 3, 7
            if (tabuleiro[3] == '&nbsp;' || tabuleiro[7] == '&nbsp;') {
                if (tabuleiro[3] == '&nbsp;') {
                    document.getElementById('posicao3').innerHTML = tabuleiro[6];
                    document.getElementById('posicao6').innerHTML = '&nbsp;';
                    tabuleiro[3] = tabuleiro[6];
                    tabuleiro[6] = '&nbsp;';
                    break;
                }
                else if (tabuleiro[7] == '&nbsp;') {
                    document.getElementById('posicao7').innerHTML = tabuleiro[6];
                    document.getElementById('posicao6').innerHTML = '&nbsp;';
                    tabuleiro[7] = tabuleiro[6];
                    tabuleiro[6] = '&nbsp;';
                    break;
                }
            } else {
                alert('Você não pode mover essa peça!');
            }
            break;
        case 7:
            // 4, 6, 8
            if (tabuleiro[4] == '&nbsp;' || tabuleiro[6] == '&nbsp;' || tabuleiro[8] == '&nbsp;') {
                if (tabuleiro[4] == '&nbsp;') {
                    document.getElementById('posicao4').innerHTML = tabuleiro[7];
                    document.getElementById('posicao7').innerHTML = '&nbsp;';
                    tabuleiro[4] = tabuleiro[7];
                    tabuleiro[7] = '&nbsp;';
                    break;
                }
                else if (tabuleiro[6] == '&nbsp;') {
                    document.getElementById('posicao6').innerHTML = tabuleiro[7];
                    document.getElementById('posicao7').innerHTML = '&nbsp;';
                    tabuleiro[6] = tabuleiro[7];
                    tabuleiro[7] = '&nbsp;';
                    break;
                }
                else if (tabuleiro[8] == '&nbsp;') {
                    document.getElementById('posicao8').innerHTML = tabuleiro[7];
                    document.getElementById('posicao7').innerHTML = '&nbsp;';
                    tabuleiro[8] = tabuleiro[7];
                    tabuleiro[7] = '&nbsp;';
                    break;
                }
            } else {
                alert('Você não pode mover essa peça!');
            }
            break;
        case 8:
            // 7 , 5
            if (tabuleiro[7] == '&nbsp;' || tabuleiro[5] == '&nbsp;') {
                if (tabuleiro[7] == '&nbsp;') {
                    document.getElementById('posicao7').innerHTML = tabuleiro[8];
                    document.getElementById('posicao8').innerHTML = '&nbsp;';
                    tabuleiro[7] = tabuleiro[8];
                    tabuleiro[8] = '&nbsp;';
                    break;
                }
                else if (tabuleiro[5] == '&nbsp;') {
                    document.getElementById('posicao5').innerHTML = tabuleiro[8];
                    document.getElementById('posicao8').innerHTML = '&nbsp;';
                    tabuleiro[5] = tabuleiro[8];
                    tabuleiro[8] = '&nbsp;';
                    break;
                }
            } else {
                alert('Você não pode mover essa peça!');
            }
            break;
    }
}
