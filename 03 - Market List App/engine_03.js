let items = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    let nomeP = document.querySelector('input[name=nome_produto]');
    let valorP = document.querySelector('input[name=valor_produto]');

    items.push({
        nome: nomeP.value,
        valor: valorP.value
    });

    let listaP =  document.querySelector('.lista-produto');
    listaP.innerHTML = "";
    let total = 0;
    items.map(function(val){
        total+=parseFloat(val.valor);
        listaP.innerHTML+=`
        <div class="lista-produto-single">
          <h3>`+val.nome+`</h3>
          <h3 class="preçoP"><span>R$`+val.valor+`</span></h3>
        </div>
        `;
    })
    total = total.toFixed(2);
    nomeP.value = "";
    valorP.value = "";
    let elTotal = document.querySelector('.totalP h1');
    elTotal.innerHTML = 'R$'+total;
})

document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    items = [];

    document.querySelector('.lista-produto').innerHTML = "";

    
    document.querySelector('.totalP h1').innerHTML = "R$0,00";
})