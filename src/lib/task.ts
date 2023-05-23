type Task = {
  id?: number | bigint;
  subject: string;
  priority: string;
  status: string;
  dueDate?: string;
  comment?: string;
};

export default Task
