import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  semTarefas: boolean = false
  tarefa:string = ""
  tarefas: any[] = []
  numeroDias:number = 0

  verificaTarefas = () => {
    if(this.tarefas.length <= 0){
      this.semTarefas = true
    } else {
      this.semTarefas = false
    }
  }

  recuperaDados = () =>{
    let tarefasStorage:any = localStorage.getItem("tarefas")
    if(tarefasStorage.length > 0){
      this.tarefas = JSON.parse(tarefasStorage)
    }
  }

  adicionarTarefa(x:string){
    if(x === "" || x === " "){
      this.tarefa=""
      alert("Invalid Task!")
    } else {
      this.tarefas.push({
        name: x,
        dias: 0,
        ultimaConlusão: ""
      })
    this.tarefa=""
    localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
    }
    this.verificaTarefas()
  }

  adicionarDias(i:number){
    this.tarefas[i].dias += 1
    localStorage.setItem("tarefas", JSON.stringify(this.tarefas))

  }

  removerTarefa(x:number){
    this.tarefas.splice(x, 1)
    localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
    this.verificaTarefas()
  }

  constructor(){

    this.recuperaDados()

    this.verificaTarefas()
  }

}
