// ex1
// O HTML continua funcionando, mas a página aparece "pelada" no navegador: sem cores de fundo, sem espaçamentos e sem bordas nos cartões, ficando tudo alinhado à esquerda em preto e branco. Mesmo que o styles.css exista na pasta, o navegador não sabe que precisa lê-lo sem a tag <link>.

// ex2
// Não, o defer não era desnecessário. O código funcionou porque, estando no fim do <body>, o navegador já tinha lido o HTML antes de chegar no script. Porém, se a tag <script> estivesse no <head> sem defer, o código falharia porque tentaria buscar botões que ainda não existem na tela. O atributo defer garante que o script espere toda a página carregar, independentemente de onde a tag seja colocada.

// ex3
/*
:root {
    --cor-urgente: #C00000;
}


.cartao-urgente {
    border: 3px solid var(--cor-urgente);
}

.titulo-urgente {
    color: var(--cor-urgente);
}
*/

// ex4
// (Nota: faça a separação nos seus arquivos reais primeiro. Exemplo de resposta caso tenha corrido tudo bem):
// Não encontrei erros graves, mas conferi se havia apagado as tags <style> e <script> antigas do index.html para o código não rodar duplicado, verifiquei se os nomes dos arquivos no href e no src estavam exatamente iguais aos da pasta e testei o clique no botão pelo navegador.

// ex5
// (Nota: crie essas variáveis no :root do seu styles.css. Exemplo de 4 variáveis baseadas no papel delas):
// 1. --cor-principal: #1F4E79 (define a cor dominante da identidade visual, usada no cabeçalho e destaques).
// 2. --cor-borda-cartao: #2E75B6 (define a cor padrão das bordas dos cartões).
// 3. --espaco-padrao: 16px (padroniza o espaçamento interno/padding dos elementos para manter o alinhamento visual).
// 4. --borda-arredondada: 8px (mantém o mesmo arredondamento de cantos nos cartões e botões).