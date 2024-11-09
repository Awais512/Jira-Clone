import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Props {
  image?: string;
  name: string;
  className?: string;
}

export const WorkspaceAvatar = ({ image, name, className }: Props) => {
  if (image) {
    return (
      <div className={cn("relative size-10 rounded-md overflow-hidden")}>
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <Avatar className={cn("size-10 rounded-md", className)}>
      <AvatarFallback className="text-white bg-blue-600 font-semibold text-lg uppercase rounded-md">
        {name[0]}
      </AvatarFallback>
    </Avatar>
  );
};
