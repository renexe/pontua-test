import { Skeleton } from "@/components/ui/atoms/skeleton"
import { cn } from "@/lib/utils";

const SkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-5 mx-9">
      {[...Array(10)].map((_, index) => (
        <div key={index} className={cn(index >= 8 ? "col-span-1 sm:col-span-2" : "col-span-1")}>
          <Skeleton className="rounded-2xl w-full h-[150px] bg-gray-200" />
        </div>
      ))}
    </div>
  )
};

export default SkeletonGrid;