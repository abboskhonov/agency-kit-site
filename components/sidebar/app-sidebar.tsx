import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthOperations } from "@/hooks/use-auth";
import {
  Bell,
  CreditCard,
  EllipsisVertical,
  Folders,
  HelpCircle,
  HospitalIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCircle,
  Users,
} from "lucide-react";
import type * as React from "react";
import { Link, useLocation } from "react-router";

// Define all possible navigation items
const allNavItems = {
  dashboard: {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  cases: {
    title: "Cases",
    url: "/cases",
    icon: Folders,
  },
  labs: {
    title: "Labs",
    url: "/labs",
    icon: HospitalIcon,
  },
  designers: {
    title: "Designers",
    url: "/designers",
    icon: Users,
  },
  services: {
    title: "Services",
    url: "/services",
    icon: Users,
  },
};

// Define secondary navigation items
const navSecondary = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Get Help",
    url: "/help",
    icon: HelpCircle,
  },
];

// Define role-based navigation access
const roleBasedNavigation = {
  SUPER_ADMIN: ["dashboard", "cases", "labs", "designers"],
  LAB_ADMIN: ["dashboard", "cases", "designers"],
  DESIGNER: ["cases"],
  CLIENT: ["cases", "services"],
};

// Function to get navigation items based on user role
const getNavItemsByRole = (role: string | undefined) => {
  if (!role) return [allNavItems.cases]; // Default to only cases if no role

  // Get allowed navigation keys for the role or default to cases only
  const allowedNavKeys = roleBasedNavigation[role as keyof typeof roleBasedNavigation] || ["cases"];

  // Return only the navigation items allowed for this role
  return allowedNavKeys.map((key) => allNavItems[key as keyof typeof allNavItems]);
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile } = useSidebar();
  const location = useLocation();
  const { user } = useAuth();
  const { logout } = useAuthOperations();

  // Get user initials for avatar fallback
  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  // Function to check if a menu item is active
  const isActive = (url: string) => {
    // For dashboard, only match exact path
    if (url === "/dashboard" && location.pathname === "/dashboard") {
      return true;
    }
    // For other items, match if the pathname starts with the URL
    // This ensures that sub-routes also highlight the parent menu item
    return url !== "/dashboard" && location.pathname.startsWith(url);
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link to="/dashboard" className="flex items-center gap-2 font-medium">
                <img src="/logo.png" alt="Logo" className="h-8 w-fit object-contain" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {getNavItemsByRole(user?.role).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="font-light data-[active=true]:font-medium"
                    asChild
                    tooltip={item.title}
                    data-active={isActive(item.url)}
                  >
                    <Link to={item.url}>
                      {item.icon && <item.icon className="data-[active=true]:font-medium" />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild data-active={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  {/* <Avatar className="h-8 w-8 rounded-lg grayscale">
                                        <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar> */}
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user?.name || "User"}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user?.email || "No email"}
                    </span>
                  </div>
                  <EllipsisVertical className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="" alt={user?.name || "User"} />
                      <AvatarFallback className="rounded-lg">{userInitials}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{user?.name || "User"}</span>
                      <span className="text-muted-foreground truncate text-xs">
                        {user?.email || "No email"}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserCircle />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
