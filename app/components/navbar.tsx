"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import Image from "next/image";

import { LogOut } from "lucide-react";

import { logoutaction } from "@/app/actions/authaction";
import { UserData } from "../util/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavbarProps = {
  userdata: UserData;
};

const Navbar: React.FC<NavbarProps> = ({ userdata }) => {
  const handlelogout = () => {
    logoutaction();
  };

  return (
    <>
      <div className="h-full w-full border-b p-4 px-12 flex justify-between items-center shadow-sm bg-background">
        <div>
          <Image
            height={150}
            width={150}
            src="/learnquesttransparent.png"
            alt="logo"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-medium text-sm">
            {userdata?.first_name?.toUpperCase()}{" "}
            {userdata?.last_name?.slice(0, 1).toUpperCase()}
          </span>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2" asChild>
                <div className="cursor-pointer ">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {userdata?.first_name?.slice(0, 1).toUpperCase()}
                      {userdata?.last_name?.slice(0, 1).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={handlelogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
