class TarefaBuilder {
  constructor() {
    this.tarefa = {};
  }

  setTitulo(titulo) {
    this.tarefa.titulo = titulo;
    return this;
  }

  setDescricao(descricao) {
    this.tarefa.descricao = descricao;
    return this;
  }

  setPrioridade(prioridade) {
    this.tarefa.prioridade = prioridade;
    return this;
  }

  build() {
    return this.tarefa;
  }
}

export default TarefaBuilder;
import TarefaBuilder from "./fluentExample";

const tarefa = new TarefaBuilder()
  .setTitulo("Estudar Clean Code")
  .setDescricao("Ler capítulo sobre nomes significativos")
  .setPrioridade("Alta")
  .build();

console.log(tarefa);
