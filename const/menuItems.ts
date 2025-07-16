
import {
  DashboardIcon,
  BusinessIcon,
  WalletIcon,
  EmployeeIcon,
} from "@/components/ui/Icon";

export const menuItems = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    url: "/dashboard",
    key: "dashboard",
  },
  {
    title: "Payments",
    icon: BusinessIcon,
    url: "/payments",
    key: "payments",
  },
  {
    title: "Businesses",
    icon: WalletIcon,
    url: "/business",
    key: "businesses",
  },
  {
    title: "Employees",
    icon: EmployeeIcon,
    url: "/employee",
    key: "employees",
  },
];
