import {Args, Command, Flags} from '@oclif/core'
import cli from 'cli-ux'
import TasksDb from '../../lib/tasks-db'
import Task from '../../lib/task'

export default class TasksNew extends Command {
  #db = new TasksDb(this.config.dataDir);

  static description = 'create a new salesforce task';

  static examples = [
    '<%= config.bin %> <%= command.id %> "Email" --priority "Normal" --status "Not started"',
    '<%= config.bin %> <%= command.id %> "Call" "This is a comment" --priority "Urgent" -s "Not started"',
  ];

  static flags = {
    priority: Flags.string({
      char: 'p',
      description: 'priority of the task',
      default: 'Normal',
    }),
    status: Flags.string({
      char: 's',
      description: 'status of the task',
      default: 'Not started',
    }),
  };

  static args = {
    subject: Args.string({
      required: true,
      options: ['Call', 'Email', 'Send Letter', 'Send Quote', 'Other'],
    }),
    comment: Args.string({required: false}),
  };

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TasksNew)
    let subject = args.subject

    if (subject) {
      subject = await cli.prompt('What is the subject of your task?')
    }

    const task: Task = {
      subject,
      status: flags.status,
      priority: flags.priority,
      comment: args.comment,
    }

    const {id} = await this.#db.createTask(task)

    this.log(`Creating a new task with subject ${subject} and id ${id}`)
  }
}
