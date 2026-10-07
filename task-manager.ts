
class Task {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public completed: boolean = false,
  ) {}
}

class TaskManager {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  markTaskComplete(id: number): void {
    const task = this.getTaskById(id);

    if (task) {
      task.completed = true;
    } else {
      console.log(`No task found with ID ${id}.`);
    }
  }

  listAllTasks(): void {
    if (this.tasks.length === 0) {
      console.log("There are no tasks yet.");
      return;
    }

    for (const task of this.tasks) {
      const status = task.completed ? "Complete" : "Not complete";
      console.log(`#${task.id} - ${task.title} (${status})`);
      console.log(`  ${task.description}`);
    }
  }
}

const manager = new TaskManager();

manager.addTask(new Task(1, "Learn TypeScript", "Practice classes and types."));
manager.addTask(new Task(2, "Build a task manager", "Add and complete tasks."));
manager.addTask(new Task(3, "Review the code", "Understand how each method works."));

console.log("Tasks before completing anything:");
manager.listAllTasks();

manager.markTaskComplete(1);
manager.markTaskComplete(3);

console.log("\nTasks after completing tasks 1 and 3:");
manager.listAllTasks();
