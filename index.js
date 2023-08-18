const matrizPura = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

function criaErro(coluna, linha, matriz) {
    matriz[coluna][linha] = 1;
    return matriz;
}

function imprimeMatriz( numCol, numLin, matriz) {
    console.log("   0 1 2 3");
    console.log(" ");
    for(let lin = 0; lin < numLin; lin++) {
        let linhaTemp = lin + " ";
        for(let col = 0; col < numCol; col ++) {
            linhaTemp = linhaTemp + " " + matriz[col][lin];
        }
        console.log(linhaTemp);
        linhaTemp = "";
    }
}

const matrizComUmErro = criaErro(2, 2, matrizPura.slice()); 
const matrizComDoisErros = criaErro(0, 0, matrizComUmErro.slice());

imprimeMatriz(4, 4, matrizComUmErro);
imprimeMatriz(4, 4, matrizComDoisErros);