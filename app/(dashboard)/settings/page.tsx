import { SwitchForm } from "@/components/form/Switchform";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

const SettingsPage = () => {
  return (
    <section className="flex flex-col mt-10 min-w-[100vh] ">
      <SwitchForm />
    </section>
  );
};

export default SettingsPage;
