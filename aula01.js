1) let visto = false;
2) 5 === 5; // true
"5" === 5; // false
"5" == 5; // true
true === false; // false
3) let apoiado = false;
document.querySelectorAll(".apoiar").forEach(function(botao) {
 let apoiado = false;
 botao.addEventListener("click", function() {
 });
});
4) if (apoiado === false) {
 botao.textContent = "Apoiado";
} else {
 botao.textContent = "Apoiar";
}
5) <div class="cartao">
 <h2>Banheiro feminino</h2>
 <p>Falta papel higiênico frequentemente.</p>
 <p>Apoios: <span class="contagem">0</span></p>
 <button class="apoiar">Apoiar</button>
</div>
6) let valor = 1;
display.textContent = valor;
botao.textContent = "Apoiado";