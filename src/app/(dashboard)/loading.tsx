import { Loader } from "lucide-react";
import React from "react";

const DashboardLoadingh = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default DashboardLoadingh;
