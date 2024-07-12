function AddTodo() {
    return (
        <div >

            <div class="row container">
                <div class="col-4">
                    <input type="text" placeholder='Enter the items' />
                </div>
                <div class="col-4">
                    <input type="date" />
                </div>
                <div class="col-2">
                    <button class="btn btn-primary my-btn ">Add</button>
                </div>

            </div>
        </div>

    );
}
export default AddTodo;