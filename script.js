// Função para adicionar uma tarefa
function adicionarTarefa() {
    const novaTarefaInput = document.getElementById("novaTarefa");
    const tarefaTexto = novaTarefaInput.value.trim(); // Remove espaços extras

    if (tarefaTexto !== "") {  // Se a tarefa não estiver vazia
        const listaTarefas = document.getElementById("listarTarefas");
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `${tarefaTexto} <button class="remove" onclick="removerTarefa(this)" aria-label="Remover tarefa">Remover</button>`;
        novaTarefa.onclick = function() {
            marcarConcluido(novaTarefa);
        };
        listaTarefas.appendChild(novaTarefa);  // Adiciona a tarefa à lista
        novaTarefaInput.value = ""; // Limpa o campo de input
    } else {
        alert("Por favor, digite uma tarefa.");  // Alerta caso a tarefa esteja vazia
    }
}

// Função para remover uma tarefa
function removerTarefa(button) {
    const li = button.parentElement;  // Pega o elemento <li> que contém o botão
    li.remove();  // Remove a tarefa
}
// Marcar como concluído
function marcarConcluido(_tarefa) {
    li.classList.toggle("completed");
  };
  