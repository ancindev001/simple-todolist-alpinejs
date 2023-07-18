document.addEventListener("alpine:init", () => {
    Alpine.data("todos", () => ({
      datas: [],
      editMode: null,
      todoForm: "",

      saveTodo() {
        if (this.todoForm == "") {
          alert("Can not empty");
          return;
        }

        if (this.editMode !== null) {
          // update
          const todo = this.datas.find((e) => e.id === this.editMode.id);
          todo.title = this.todoForm;
          const index = this.datas.findIndex((e) => e.id === todo.id);
          this.datas[index] = todo;
          this.editMode = null;
          this.todoForm = "";
          return;
        }

        this.datas.push({
          id: this.datas.length + 1,
          title: this.todoForm,
          done: false,
        });
        this.todoForm = "";
      },

      editTodo(id) {
        const todo = this.datas.find((e) => e.id == id);
        this.editMode = todo;
        this.todoForm = todo.title;
      },

      updateTodo(id) {
        this.datas = this.datas.map((e) => {
          if (e.id == id) {
            e.title = this.todoForm;
          }
          return e;
        });
      },
      doneTodo(id) {
        this.datas = this.datas.map((e) => {
          if (e.id == id) {
            e.done = true;
          }
          return e;
        });
      },

      undoneTodo(id) {
        this.datas = this.datas.map((e) => {
          if (e.id == id) {
            e.done = false;
          }
          return e;
        });
      },

      deleteTodo(id) {
        this.datas = this.datas.filter((e) => e.id != id);
      },
    }));
  });