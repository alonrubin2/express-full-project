let tasks = [];
let taskCounter = 1;

class Tasks {
    // Get All Tasks
    static getAllTasks(req, res) {
        res.json(tasks);
    }
    // create task
    static createTask(req, res) {
        tasks.push({
            id: taskCounter,
            title: req.body.title
        });
        taskCounter++
        res.sendStatus(201);
    }
    // delete task
    static deleteTask(req, res) {
        const taskId = parseInt(req.params.id);
        const requestedTask = tasks.find(task => task.id === taskId)
        if (!requestedTask) {
            res.sendStatus(404);
            return;
        }
        else {
            let index = tasks.indexOf(requestedTask);
            tasks.splice(index, 1);
            res.send(`${requestedTask.title} deleted`)
        }
    }
    // find task
    static findTask(req, res) {
        const taskId = parseInt(req.params.id);
        const requestedTask = tasks.find(task => task.id === taskId)
        if (!requestedTask) {
            res.sendStatus(404);
            return;
        }
        else {
            res.send(requestedTask);
        }
    }
    // edit task
    static editTask(req, res) {
        const taskId = parseInt(req.params.id);
        const requestedTask = tasks.find(task => task.id === taskId)
        if (!requestedTask) {
            res.sendStatus(404);
            return;
        }
        requestedTask.title = req.body.title;
        res.send(`${requestedTask.title} has been updated`)
    }

}

module.exports = Tasks;