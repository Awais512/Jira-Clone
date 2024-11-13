import { getCurrent } from "@/features/auth/queries";
import JoinWorkspaceForm from "@/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdJoinPage = async ({ params }: Props) => {
  const user = await getCurrent();
  const initialValues = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!user) {
    redirect("/sign-in");
  }

  if (!initialValues) {
    redirect("/");
  }

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdJoinPage;
