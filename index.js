// Função para calcular o saldo e o nível
function calcularRank(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  let saldo = vitorias - derrotas;

  // Determina o nível com base nas vitórias
  let nivel;
  if (vitorias <= 10) {
    nivel = 'Ferro';
  } else if (vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  // Retorna os resultados
  return { saldo, nivel };
}

// Função principal para interação com o usuário
function main() {
  // Solicita as entradas do usuário
  let vitorias = 10;
  let derrotas = 20;

  // Chama a função para calcular os resultados
  let { saldo, nivel } = calcularRank(vitorias, derrotas);

  // Exibe o resultado formatado
  console.log(
    `\nO Herói tem de saldo de ${saldo} e está no nível de ${nivel}.\n`
  );
}

// Executa a função principal
main();
