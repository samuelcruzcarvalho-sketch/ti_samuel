// ex1
// O texto do link deve descrever exatamente o destino porque quem usa leitor de tela costuma listar apenas os links da página para navegar, fora do contexto do texto ao redor. Se houver vários "clique aqui", a pessoa não saberá para onde cada um leva. O mais prejudicado é o usuário de leitor de tela (deficientes visuais), embora links claros ajudem qualquer pessoa.

// ex2
// Visualmente ambos deixam o texto em negrito, mas o significado é diferente: <b> serve apenas para aparência estética ("deixar o texto grosso"), enquanto <strong> indica semântica de importância ("isto merece destaque"). Na prática, um leitor de tela muda a entonação da voz para dar ênfase ao ler um <strong>, mas não faz isso com o <b>.

// ex3
// O erro é empilhar vários <br> para criar espaçamento vertical. O <br> serve apenas para quebras de linha que fazem parte do texto; o espaçamento entre elementos deve ser feito no CSS com margin ou padding.
// Reescrita correta:
// No HTML:
// <p class="marca">Radar de Evasao<br>NRE Cascavel</p>
// (E no CSS, caso precise de espaço abaixo dele, usa-se margin-bottom: 24px;)

// ex4
// <a href="https://www.apoio.exemplo.org" target="_blank" rel="noopener">Canal de apoio</a>

// ex5
// (Nota: monte o index.html e o styles.css novos primeiro. Exemplo de resposta baseada nos erros mais comuns ao testar):
// Criei os arquivos novos com a barra lateral e os 6 links. A primeira coisa que não funcionou de primeira foi a remoção das bolinhas da lista e o sublinhado padrão dos links, o que resolvi aplicando list-style: none no .menu e text-decoration: none no .menu a. Conferi no navegador e o item ativo ("Mapa de risco") ficou destacado corretamente.

// ex6
// (Nota: declare os tokens no :root do seu styles.css e aplique-os. Exemplo de resposta):
// Trouxe os seguintes tokens do Figma para o :root: --bg-primary (#2D2A6E), --surface (#FFFFFF), --muted (#F1F5F9), --canvas (#F8FAFC) e --text-secondary (#64748B).
// Onde usei:
// - --surface: no background-color da barra lateral (.sidebar).
// - --bg-primary: na cor do texto do item ativo (.menu a.ativo) e no contorno de foco (.menu a