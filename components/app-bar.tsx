import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

function AppBar() {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Sidebar Trigger */}
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Good morning, Sophia
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default AppBar;
