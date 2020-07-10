let aluno = (code, n1, n2, n3) => {
    if (code > 0) {
        let notas = [n1, n2, n3].sort((a, b) => a - b)
        let media = ((notas[2] * 4) + (notas[0] * 3) + (notas[1] * 3)) / 10
        let resp = media >= 5 ? 'APROVADO' : 'REPROVADO'
    
console.log(`
Código: ${code}

Nota 1: ${n1.toFixed(1)}
Nota 2: ${n2.toFixed(1)}
Nota 3: ${n3.toFixed(1)}

Média Final: ${media.toFixed(1)}
Resultado: ${resp}
`)
    }

    else console.log('Código Negativo!')
}

aluno(516, 8.5, 9.4, 7.9)
