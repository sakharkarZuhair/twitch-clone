import { currentUser } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();
  
  if (!self || !self.username) {
    throw new Error("Unathorized!");
  }
  
  const user = await db.user.findUnique({
    where: { externalUserId: self.id },
  });
  // console.log("SELF", user)

  if (!user) {
    throw new Error("Not Found");
  }

  return user;
};
