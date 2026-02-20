//sidebar component
import React from "react";
import { Label } from "../ui/lable";
import { Input } from "../ui/input";
import Dropdown from "../ui/dropdown";
import Card from "../ui/card";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="mb-4">
        <Card.Content>
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search..." />
        </Card.Content>
      </Card>
      <Card className="mb-4">
        <Card.Content>
          <Label>Filter by Category</Label>
          <Dropdown />
        </Card.Content>
      </Card>
      {/* Add more sidebar content here */}
    </div>
  );
}