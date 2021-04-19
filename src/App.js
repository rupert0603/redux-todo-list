import './App.css';
import { connect } from 'react-redux';
import TaskRow from './components/TaskRow';
import React from 'react';
import { addTask, markTaskAsDone, removeTask } from './actions';

class App extends React.Component {

  state = {
    task: '', 
  }

  resetStateTask = () => {
    this.setState({task: ''});
  }

  render() {
    return(
      <div className="App-header">
        <h1>To-Do List App</h1>
        <label htmlFor="new-task">New Task: </label>
        <input id="new-task" type="text" placeholder="Enter new task"
          onChange = {
            (e) => this.setState({task: e.target.value})
          }
          value = {this.state.task}
        />
        <button 
          onClick = {
            () => {
              this.props.addTask({name: this.state.task, status: 'pending'})
              this.resetStateTask()
            }
          }
        >Submit</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>All Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.tasks.map(
                function(task){
                  return <TaskRow 
                    key={task.name}
                    task={task}
                  />
                }
              )
            }
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th colSpan="2">Pending Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.tasks.filter((task) => {
                return task.status === "pending";
              }).map(
                (task) => {
                  return (
                    <tr key={task.name}>
                      <td>{task.name}</td>
                      <td>
                        <button 
                          onClick = {
                            () => this.props.markTaskAsDone(task.name)
                          }>Mark as Done
                        </button>
                      </td>
                    </tr>
                  );
                }
              )
            }
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th colSpan="2">Done Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.tasks.filter((task) => {
                return task.status === "done";
              }).map(
                (task) => {
                  return (
                    <tr key={task.name}>
                      <td>{task.name}</td>
                      <td>
                        <button 
                          onClick = {
                            () => this.props.removeTask(task.name)
                          }>Remove Task
                        </button>
                      </td>
                    </tr>
                  );
                }
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);

  return state;
}

export default connect(mapStateToProps, { addTask, markTaskAsDone, removeTask })(App);
/*short hand for addTask:addTask*/