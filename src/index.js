const db = require('./db/models');

// Promises
function getTasksPromise() {
  db.Task.findAll()
    .then((tasks) => {
      tasks.forEach((task) => {
        console.log(task.taskName);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Async Await
async function getTasksAsync()  {
  try {
    const tasks = await db.Task.findAll();
    tasks.forEach((task) => {
      console.log(task.taskName);
    });
  } catch (err) {
    console.log(err);
  }
};

// Async Await
async function getUsersAsync()  {
  try {
    const users = await db.User.findAll();
    users.forEach((user) => {
      console.log(user.name);
    });
  } catch (err) {
    console.log(err);
  }
};

async function createUser(name) { // String
  const user = await db.User.create({ name });

  return user
}

async function getUser(name) {  //String
  const user = await db.User.findOne({ where: { name } });

  return user
}

async function getTask(id) {  //String
  const user = await db.Task.findOne({ where: { id } });

  return user
}

async function assignTaskToUser(task, user) { // Task Object // user = String || object || int
  await task.setUser(user)
}

async function listAllUserTasks(user) { // user object
  tasks = await user.getTasks()
  tasks.forEach((task) => {
    console.log(task.taskName)
  })
}

// getTasksPromise();
// getTasksAsync();
// getUsersAsync();

(async () => {
  try {
    const createdUser1 = await createUser('Temi')
    // const createdUser2 = await createUser('Setemi')
    const createdUser2 = await getUser('Setemi');
    const task1 = await getTask(10)
    const task2 = await getTask(11)
    await assignTaskToUser(task1, createdUser1)
    await assignTaskToUser(task2, createdUser2)
    console.log('done')
    await listAllUserTasks(createdUser1)
    await listAllUserTasks(createdUser2)
  } catch (error) {
    console.log(error.message)
  }
})()
