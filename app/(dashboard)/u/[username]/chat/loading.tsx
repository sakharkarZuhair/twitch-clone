import { Skeleton } from "@/components/ui/skeleton";

import { ToggelCardSkeleton } from "./_components/toggel-card";
const ChatLoading = () => {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-10 w-[200px]" />
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <ToggelCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default ChatLoading;
