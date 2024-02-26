import { getRecommended } from "@/lib/recommended-service";
import { getFollowedUsers } from "@/lib/follow-service";

import { Wrapper } from "./wrapper";
import Following, { FollowingSkeleton } from "./following";
import Toggle, { ToggleSkeleton } from "./toggle";
import Recommended, { RecommendedSkeleton } from "./recommended";

const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};

export default Sidebar;
