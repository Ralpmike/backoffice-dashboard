"use client";

import { X } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { menuItems } from "@/const/menuItems";
import { CheckIcon } from "./ui/Icon";

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();
  return (
    <Sidebar className="border-r-0  !bg-[#032900]">
      <SidebarHeader className="p-6 flex">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/images/jeffery.jpg"
                alt="Jeffery's image"
                width={48}
                height={48}
                className="object-cover w-full h-full object-[100%_5%]"
              />
            </div>

            <div className="text-white">
              <p className="font-semibold text-lg flex items-center gap-1">
                PiggyCanvas Inc <CheckIcon className="w-4 h-4" />
              </p>
              <p className="text-sm text-lighter-green">Sophia Williamson</p>
            </div>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpenMobile(false)}
              className="text-white hover:bg-green-600 md:hidden"
              aria-label="Close sidebar"
            >
              <X className="w-8 h-8" />
            </Button>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 bg-">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const isActive = pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="text-sidebar-primary hover:bg-transparent  hover:text-nav data-[active=true]:bg-transparent data-[active=true]:text-nav active:bg-transparent active:text-nav py-6 "
                    >
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 font-medium px-3 py-6"
                      >
                        <item.icon className={`!w-6 !h-6 `} />
                        <span className="text-[18px]">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
