export default function BlogCardSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-56 bg-gray-200 rounded-xl" />

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-3 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
  );
}
