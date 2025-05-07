"use client";
import { useState, useEffect } from "react";
import UserTaskItem from "@/components/ui/TaskItem";
import UserTaskFilters from "@/components/ui/user/TaskFilters";
import Text from "@/components/text";

export interface Task {
  id: number;
  title: string;
  status: "To Do" | "Started" | "In Progress" | "Done";
  comments: string[];
}

const UserTaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Fetch tasks assigned to user
  const [filter, setFilter] = useState<"All" | "To Do" | "Started" | "In Progress" | "Done">("All");

  useEffect(() => {
    // Simulate fetching tasks assigned to the user
    const fetchedTasks: Task[] = [
      { id: 1, title: "Complete the report", status: "To Do", comments: [] },
      { id: 2, title: "Attend the meeting", status: "In Progress", comments: [] },
      { id: 3, title: "Submit the project", status: "Done", comments: [] },
    ];
    setTasks(fetchedTasks);
  }, []);

  const filteredTasks = tasks.filter(
    (task) => filter === "All" || task.status === filter
  );

  const addComment = (id: number, comment: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, comments: [...task.comments, comment] }
          : task
      )
    );
  };

  const toggleStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          if (task.status === "To Do") return { ...task, status: "Started" };
          if (task.status === "Started") return { ...task, status: "In Progress" };
          if (task.status === "In Progress") return { ...task, status: "Done" };
          return task;
        }
        return task;
      })
    );
  };

  return (
    <div className="h-screen p-8">
    <div className=" bg-white rounded-xl overflow-auto max-h-screen mt-8">
        <Text className="text-3xl font-semibold text-gray-800 mb-6" variant={'heading'}>
            My Tasks
        </Text>
      <UserTaskFilters filter={filter} setFilter={setFilter} />
      <div className="space-y-6 mt-4 overflow-y-auto max-h-[calc(100vh-200px)] hide-scrollbar">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 text-sm">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <UserTaskItem
              key={task.id}
              task={task}
              addComment={addComment}
              toggleStatus={toggleStatus}
            />
          ))
        )}
      </div>
    </div>
  </div>
  );
};

export default UserTaskPage;
