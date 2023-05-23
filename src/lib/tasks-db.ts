import Task from './task'
import BetterSqlite3 from 'better-sqlite3'
import path from 'node:path'
import {existsSync, mkdirSync} from 'node:fs'

class TasksDb {
  #client: BetterSqlite3.Database;
  constructor(dataDir: string) {
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, {recursive: true})
    }

    this.#client = new BetterSqlite3(path.join(dataDir, 'tasks.db'))
    this.setup()
  }

  setup(): void {
    this.#client.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT NOT NULL,
      comment TEXT NULL,
      priority TEXT NOT NULL,
      status TEXT NOT NULL
    )`)
  }

  async createTask(task: Task): Promise<Task> {
    const stmt = this.#client.prepare(`
    INSERT INTO tasks (subject, comment, priority, status)
    VALUES (@subject, @comment, @priority, @status)`)
    const info = stmt.run(task)
    return {...task, id: info.lastInsertRowid}
  }

  async listTask(): Promise<Task[]> {
    const stmt = this.#client.prepare(`
    SELECT * FROM tasks`)

    return stmt.all() as Task[]
  }
  // async getTask(id: number): Promise<Task> {}
  // async completeTask(id: number): Promise<Task> {}
}

export default TasksDb
