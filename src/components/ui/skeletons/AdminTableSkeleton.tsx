export default function AdminTableSkeleton() {
  return (
    <div className="bg-white rounded-xl border p-6 space-y-4 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/6" />
          <div className="h-4 bg-gray-200 rounded w-1/6" />
        </div>
      ))}
    </div>
  );
}
