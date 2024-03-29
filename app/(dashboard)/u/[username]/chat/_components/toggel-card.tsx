"use client";

import { toast } from "sonner";
import { useTransition } from "react";

import { updateStream } from "@/actions/stream";
import { Switch } from "@/components/ui/switch";

import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggelCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

const ToggleCard = ({ field, label, value = false }: ToggelCardProps) => {
  const [isPending, startTransition] = useTransition();

  const onChange = async () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something gone wrong"));
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            onCheckedChange={onChange}
            disabled={isPending}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggelCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-10 w-full" />;
};

export default ToggleCard;
