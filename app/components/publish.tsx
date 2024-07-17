"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { useState } from "react";

const PublishSwitch = ({ published }: { published: boolean | undefined }) => {
  const [state, setstatus] = useState(published);
  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch
          id="publish"
          checked={state}
          onCheckedChange={(v) => setstatus(v)}
        />
        <Label htmlFor="publish">{state ? "Unpublish" : "Publish"}</Label>
      </div>
    </>
  );
};

export default PublishSwitch;
