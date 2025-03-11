import CardBox from "@/app/components/shared/CardBox";
import { Dropdown } from "flowbite-react";

const ProfileCard = () => {
  return (
    <div className="w-80">
      <CardBox>
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="w-24 h-24 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 flex items-center justify-center rounded-full text-2xl font-semibold">
            VF
          </div>

          {/* User Info */}
          <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
            Victor Frank
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Victor@elabsuite.com
          </p>
          <p className="text-gray-500 dark:text-gray-400">2348066347621</p>

          {/* Dropdown Actions */}
          <Dropdown label="Actions" color="blue" className="mt-4">
            <Dropdown.Item>Edit Profile</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown>
        </div>
      </CardBox>
    </div>
  );
};

export default ProfileCard;
