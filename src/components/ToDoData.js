class TodoData {

    constructor(text, id, isComplete) {
        this.toDoText = text;
        this.timestamp = new Date().toLocaleDateString();
        this.id = id;
        this.isComplete = isComplete;
    }

}

export default TodoData;