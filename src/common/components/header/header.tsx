import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="w-full h-20 px-4 flex items-center justify-between sticky top-0 bg-gray-100 border-b border-gray-200">
      <Link to="/" className="text-2xl">
        LOGO
      </Link>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
