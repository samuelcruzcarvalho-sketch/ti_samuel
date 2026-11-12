// ex1
// Reprovam na régua de 4,5:1:
// - #888888 no #FFFFFF (cinza médio no branco tem contraste de ~3,5:1)
// - #CCCCCC no #FFFFFF (cinza claro no branco tem contraste ainda menor, ~1,6:1)
// (Os pares #FFFFFF no #1F4E79 e #FFFFFF no #C00000 passam, com 8,7:1 e 6,5:1).

// ex2
// (a) alt="Fila grande de estudantes na cantina dobrando o corredor durante o intervalo"
// (b) alt="Logotipo do CEEP Pedro Boaretto Neto"
// (c) alt="" (vazio, pois é apenas decoração e o leitor de tela deve pular)

// ex3
// Por quê: Pessoas com daltonismo (dificuldade para distinguir cores) ou que usam leitores de tela não saberão que o botão foi ativado, pois a informação depende apenas da mudança de cor. Cor nunca deve ser usada sozinha.
// Correção:
botao.addEventListener("click", function() {
    botao.style.backgroundColor = "green";
    botao.textContent = "Apoiado";
});

// ex4
// (Nota: faça essas alterações no seu index.html antes de entregar)
// 1. Adicionei um parágrafo (<p>) logo abaixo do <h1> no <header> explicando o propósito da página.
// 2. Adicionei a regra CSS .apoiar:focus com outline visível para destacar a navegação por teclado.
// 3. Garanti no JavaScript que o botão altera o texto para "Apoiado" (e atualiza a contagem) ao ser clicado.

// ex5
// (Nota: preencha a tabela no material conforme o estado atual do seu código. Abaixo vai um exemplo de resposta para as melhorias em ordem de prioridade):
// 1º (Alto impacto, baixo esforço): Adicionar textos alternativos (alt) descritivos em todas as imagens e ajustar o texto do botão ao clicar (Acessibilidade).
// 2º (Alto impacto, baixo esforço): Inserir o subtítulo explicativo no cabeçalho e garantir o contorno de foco (:focus) visível para quem usa teclado (Acessibilidade/UX).
// 3º (Médio/Alto impacto, maior esforço): Ajustar as cores de textos secundários que tinham pouco contraste para melhorar a leitura geral.
// Justificativa da ordem: Comecei pelas melhorias de alto impacto e baixo esforço (rápidas de resolver e que ajudam imediatamente quem usa leitor de tela ou teclado), deixando por último o que exige mais tempo para revisar no CSS.