"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";
import { Navitem, NavitemSkeleton } from "./navitem";

const Navigation = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const routes = [
    { label: "Stream", href: `/u/${user?.username}`, icon: Fullscreen },
    { label: "Keys", href: `/u/${user?.username}/keys`, icon: KeyRound },
    { label: "Chat", href: `/u/${user?.username}/chat`, icon: MessageSquare },
    { label: "Community", href: `/u/${user?.username}/community`, icon: Users },
  ];

  if (!user?.username) {
    return (
      <ul className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <NavitemSkeleton key={i} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-2 px-2 pt-4 lg:py-0">
      {routes.map((route) => (
        <Navitem
          key={route.href}
          label={route.label}
          icon={route.icon}
          href={route.href}
          isActive={pathname === route.href}
        />
      ))}
    </ul>
  );
};

export default Navigation;
