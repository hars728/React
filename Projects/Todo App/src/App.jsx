import 'bootstrap/dist/css/bootstrap.min.css'
import Appname from './component/Appname'
import AddTodo from './component/AddTodo'
import "./App.css";

function App() {


  return (
    <div>
      <center className='todo-cont'>
        <Appname />
        <AddTodo />



        <div class="container">

          <div class="row my-row" >
            <div class="col-4">
              Milk
            </div>
            <div class="col-4">
              4/10/2025
            </div>
            <div class="col-2">
              <button class="btn btn-danger my-btn ">Remove</button>
            </div>

          </div>
        </div>
        <div class="container ">

          <div class="row my-row">
            <div class="col-4">
              souse
            </div>
            <div class="col-4">
              4/20/2025
            </div>
            <div class="col-2">
              <button class="btn btn-danger my-btn ">Remove</button>
            </div>

          </div>
        </div>

      </center>
    </div>
  )
}

export default App
