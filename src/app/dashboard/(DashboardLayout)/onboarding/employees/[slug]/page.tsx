"use client";
import { useState } from "react";
import { Tabs } from "flowbite-react";
import ProfileCard from "@/app/components/resuable/cards/employeeData/ProfileCard";
import EditEmployeeForm from "@/app/components/Forms/EditEmployeeForm";

const EmployeeProfilePage = () => {
  return (
    <div className="p-6 flex gap-6">
      {/* Left Sidebar - Profile Card */}
      <ProfileCard />

      {/* Right Section - Tabs & Dynamic Forms */}
      <div className="flex-1">
        <Tabs>
          <Tabs.Item title="General">
            <EditEmployeeForm />
          </Tabs.Item>
          <Tabs.Item title="Salary">
            <div className="">No Salary Yet</div>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;
