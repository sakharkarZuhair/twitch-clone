import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

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

  return (
    <div className="flex flex-col gap-y-4">
      User {user.username}
      <div>Id : {user.id}</div>
      <div>is Following {JSON.stringify(isFollowing)}</div>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
}
