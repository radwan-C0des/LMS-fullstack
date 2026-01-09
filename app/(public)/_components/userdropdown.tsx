"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    LogOut,
    Home,
    BookOpenIcon,
    LayoutDashboardIcon,
} from "lucide-react"

import Link from "next/link";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"
import { useSignout } from "@/hooks/use-signout"
interface iappProps { 
    name: string;
    email: string;
    image: string;
}

export function UserDropdown({ name, email, image }: iappProps) {
    const handleSignOut = useSignout()
    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            {/* PUT YOUR IMAGE URL HERE */}
            <AvatarImage src={image} alt="User Image" />
            
            {/* Fallback text if image fails to load */}
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>


            <DropdownMenuContent className="w-56">


                <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />


                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/courses">
                            <BookOpenIcon className="mr-2 h-4 w-4" />
                            <span>Courses</span>
                        </Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard">
                            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </Link>

                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuSeparator />


                <DropdownMenuItem onClick={handleSignOut} className="text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>

                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}




