"use client";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useRouter } from "next/navigation";

interface Props {
  initialValues: { name: string };
}

const JoinWorkspaceForm = ({ initialValues }: Props) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const { mutate, isPending } = useJoinWorkspace();
  const inviteCode = useInviteCode();

  const onSubmit = async () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
        <CardDescription>
          You've been invited to join <strong>{initialValues.name}</strong>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
        <CardContent className="p-7">
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
            <Button
              variant="secondary"
              size="lg"
              type="button"
              className="w-full lg:w-fit"
              disabled={isPending}
              asChild
            >
              <Link href="/">Cancel</Link>
            </Button>
            <Button
              size="lg"
              className="w-full lg:w-fit"
              type="button"
              onClick={onSubmit}
              disabled={isPending}
            >
              Join Workspace
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default JoinWorkspaceForm;
