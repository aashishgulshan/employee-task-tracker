import { useEffect, useState } from "react";
import api from "../api/axios";
import {CreateTask, TaskTable} from "../components"

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchEmployees();
    fetchTasks();
  }, []);

  const fetchEmployees = async () => {
    const res = await api.get("/users");
    setEmployees(res.data.data);
  };

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data.data);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <CreateTask employees={employees} onTaskCreated={fetchTasks} />
      <TaskTable tasks={tasks} />
    </div>
  );
};

export default AdminDashboard;