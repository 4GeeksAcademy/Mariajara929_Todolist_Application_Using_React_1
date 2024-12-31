import React, { useState } from "react";
import { ToDoInput } from "./ToDoInput";

const Home = () => {
	const [toDoList, setToDoList] = useState([])
	function deleteToDo(indexToBeDeleted) {
		setToDoList((currentToDoList) => {
			const newToDoList = currentToDoList.filter((_, index) => index != indexToBeDeleted)
			return newToDoList
		})
	}
	return (
		<div className="container d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
			<h1 className="alert text-info">To Do's</h1>
			<ToDoInput toDoList={toDoList} setToDoList={setToDoList} />
			{toDoList.map((value, index) => <div className="alert alert-info col-6 d-flex justify-content-between">
				<p>	{value} </p>
				<span onClick={() => deleteToDo(index)} className="deleteButton btn btn-info"> X </span>
			</div>)}
		</div>
	);
};

export default Home;
