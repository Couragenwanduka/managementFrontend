"use client";
type Props = {
  filter: string;
  setFilter: (filter: "All" | "To Do" | "Started" | "In Progress" | "Done") => void;
};

export default function UserTaskFilters({ filter, setFilter }: Props) {
  const filters = ["All", "To Do", "Started", "In Progress", "Done"];
  return (
    <div className="flex gap-4 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={() => setFilter(f as any)}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-200 ease-in-out ${
            filter === f
              ? "bg-indigo-500 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
