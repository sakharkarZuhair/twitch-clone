"use client";

import { format } from "date-fns";

import { stringToColor } from "@/lib/utils";
import { ReceivedChatMessage } from "@livekit/components-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

const ChatMessage = ({ data }: ChatMessageProps) => {
  const color = stringToColor(data.from?.name || "");
  return (
    <div className="flex gap-2 p-2 rounded-md hover:bg-white/5">
      <p className="text-sm text-white/10">{format(data.timestamp, "HH:MM")}</p>
      <div className="flex flex-wrap items-baseline gap-1 grow">
        <p className="text-sm font-semibold whitespace-nowrap">
          <span className="truncate" style={{ color: color }}>
            {data?.from?.name}
          </span>
          :
        </p>
        <p className="text-sm break-all">{data?.message}</p>
      </div>
    </div>
  );
};

export const ChatListSkeleton = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Skeleton className="w-1/2 h-6" />
    </div>
  );
};

export default ChatMessage;
