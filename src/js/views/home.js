import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import TaskContext from "../taskContext";

export const Home = () => {
	const { tasks } = useContext(TaskContext);
	console.log(tasks);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<Link to="/todo-list" className="btn btn-success">
				Go To TodoList
			</Link>
		</div>
	)
};
