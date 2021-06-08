'use strict '

const openModal = () => document.querySelector('#modalAdicionar')
    .classList.add('active')

const openModal = () => document.querySelector('#modalPreco')
    .classList.add('active')

const openModal = () => document.querySelector('#modalComprovante')
    .classList.add('active')


    const createRow = (client, index) => {
        const recordClient = document.querySelector('#table-client tbody')
        const newTr = document.createElement('tr')
        newTr.innerHTML = `
            <td>${client.nome}</td>
            <td>${client.placa}</td>
            <td>${client.data}</td>
            <td>${client.hora}</td>
            <td>
            <button id="btnComprovante" class="btn blue">Comprovante</button>
            <button id="btnEditar" class="btn green">Editar</button>
            <button id="btnSair" class="btn red">Saida</button>
            </td>;
        `
        recordClient.appendChild(newTr) }
