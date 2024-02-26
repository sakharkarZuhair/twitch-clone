import { notFound } from "next/navigation";

import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";

import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";

interface UserPgaePros {
  params: {
    username: string;
  };
}
export default async function UserPage({ params }: UserPgaePros) {
  const user = await getUserByUsername(params?.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-y-4">
      User {user.username}
      <div>Id : {user.id}</div>
      <div>is Following {JSON.stringify(isFollowing)}</div>
      <p>is blocked by {JSON.stringify(isBlocked)}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
}
