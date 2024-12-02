// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Diana', nota: 4 },
    { nome: 'Eduardo', nota: 6 },
    { nome: 'Fernanda', nota: 9 },
    { nome: 'Gabriel', nota: 3 },
    { nome: 'Hugo', nota: 2},
    { nome: 'Isabela', nota: 10 },
    { nome: 'João', nota: 1 }
];

// Função que retorna alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Testando a função
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
