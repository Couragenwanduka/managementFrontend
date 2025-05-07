"use client";
import { MessageSquare } from "lucide-react";

type Props = {
  comments: string[];
  onAdd: (comment: string) => void;
};

export default function CommentSection({ comments, onAdd }: Props) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold flex items-center gap-2">
        <MessageSquare size={18} className="text-gray-500" />
        Comments
      </h4>
      {comments.length > 0 ? (
        <ul className="list-disc ml-4 text-gray-700">
          {comments.map((c, i) => (
            <li key={i} className="text-sm">{c}</li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-400">No comments yet</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.comment as HTMLInputElement;
          onAdd(input.value);
          input.value = "";
        }}
        className="mt-2 flex gap-3"
      >
        <input
          name="comment"
          type="text"
          placeholder="Add a comment..."
          className="border px-3 py-2 rounded-md w-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="text-sm text-indigo-600 hover:text-indigo-800 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  );
}
