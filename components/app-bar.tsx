import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { NotificationIcon } from "./ui/Icon";

function AppBar() {
  return (
    <header className="bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Sidebar Trigger */}
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="text-[1.25rem] sm:text-[1.6rem] md:text-[2rem] font-semibold text-gray-900">
            Good morning, Sophia
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border-1 cursor-pointer"
          >
            <NotificationIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default AppBar;
