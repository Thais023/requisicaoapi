

document.querySelector('#btCadastrar').addEventListener('click', () => {
            
    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value
    }

    fetch('http://localhost:3002/produtos', {
        method :'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => {
        if(resposta.ok) {
            alert('Produto cadastrado');
            location.reload();

        }
    });


});



// fetch('http://localhost:3002/produtos',{
//     method:'GET',
//     headers:{
//         'Content-type': 'application/json'
//     }
// })     
//     .then(resposta => resposta.json())
//     .then(resposta => {

//         for(let i = 0;i < resposta.length; i++){

//             const ul = document.createElement('ul');

//             ul.appendChild(document.createElement('li')).
//             innerHTML = resposta[i].id;
//             ul.appendChild(document.createElement('li')).
//             innerHTML = resposta[i].descricao;
//             ul.appendChild(document.createElement('li')).
//             innerHTML = resposta [i].preco;
        

//             document.querySelector('#listaProdutos').appendChild
//             (ul);
//         }
//         })
fetch('http://localhost:3002/produtos',{
    method:'GET',
    headers:{
        'Content-type': 'application/json'
    }
})
    .then(resposta => resposta.json())
    .then(resposta =>{

        document.querySelector('#listaProdutos').innerHTML = '';
        const tituloProdutos = document.createElement('h2');
        tituloProdutos.classList.add('titulo-lista');
        tituloProdutos.innerHTML = 'Lista de Produtos';
        document.querySelector('#listaProdutos').appendChild(tituloProdutos)


        for(let i = 0;i < resposta.length; i++){

            const ul = document.createElement('ul');
            ul.classList.add('produto');

             const liId = document.createElement('li');
             liId.setAttribute('data-produto','id');
             liId.innerHTML = resposta[i].id;

             const liDescricao = document.createElement('li');
             liDescricao.setAttribute('data-produto','descricao');
             liDescricao.innerHTML = resposta[i].descricao;

             const liPreco = document.createElement('li');
             liPreco.setAttribute('data-produto','preco');
             liPreco.innerHTML = resposta[i].preco;

             ul.append(liId, liDescricao, liPreco);


            document.querySelector('#listaProdutos').appendChild
            (ul);
        }
       
  
});
     
    