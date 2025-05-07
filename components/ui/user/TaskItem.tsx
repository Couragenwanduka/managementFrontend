"use client";
import CommentSection from "./CommentSection";
import { Check } from "lucide-react";

type Task = {
  id: number;
  title: string;
  status: "To Do" | "Started" | "In Progress" | "Done";
  comments: string[];
};

type Props = {
  task: Task;
  addComment: (id: number, comment: string) => void;
  toggleStatus: (id: number) => void;
};

export default function UserTaskItem({ task, addComment, toggleStatus }: Props) {
    const statusStyles = {
      "To Do": "bg-gray-100 text-gray-700 border border-gray-300",
      Started: "bg-yellow-100 text-yellow-800 border border-yellow-300",
      "In Progress": "bg-blue-100 text-blue-700 border border-blue-300",
      Done: "bg-green-100 text-green-700 border border-green-300",
    };
  
    return (
      <div className={`rounded-lg p-4 shadow-sm transition-all duration-300 ${statusStyles[task.status]}`}>
        <div className="flex justify-between items-center mb-4">
          <h3
            className={`text-xl font-medium ${
              task.status === "Done" ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </h3>
          <div className="flex gap-3 items-center">
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyles[task.status]}`}
            >
              {task.status}
            </span>
            <button
              onClick={() => toggleStatus(task.id)}
              className="text-primary hover:text-primary/50"
            >
              <Check size={20} />
            </button>
          </div>
        </div>
        <CommentSection
          comments={task.comments}
          onAdd={(c) => addComment(task.id, c)}
        />
      </div>
    );
  }
  