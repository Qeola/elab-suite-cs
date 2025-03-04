import { Avatar } from "flowbite-react";
import React from "react";

const UserAvatar = ({
  avatar,
  name,
  email,
}: {
  avatar: string;
  name: string;
  email: string;
}) => {
  return (
    <div className="flex gap-3 items-center">
      <Avatar
        img={avatar || undefined}
        rounded
        size="md"
        placeholderInitials={name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()}
      />
      <div className="truncate line-clamp-2 max-w-56">
        <h6 className="text-base">{name}</h6>
        <p className="text-sm text-darklink dark:text-bodytext">{email}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
