import React from "react";
import { BsSearch } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
  } from "@/components/ui/input-group"

const Filter = () => {
  return (
    <div className="flex items-center justify-between relative z-20">
        <div className="w-2/4 ">
        <InputGroup className="rounded-full border-white/30 px-4 py-5">
        <InputGroupInput placeholder="Search professioals.." />
        <InputGroupAddon>
          <BsSearch />
        </InputGroupAddon>
      </InputGroup>
      </div>
      <div className="1/4">
      <Select>
        <SelectTrigger className="w-[180px] rounded-full border-white/30 py-5 px-4">
          <SelectValue placeholder="Availability"  />
        </SelectTrigger>
        <SelectContent className="bg-black/50 rounded-[34px] p-4 border-white/10 text-white hover:bg-black">
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="apple">Available</SelectItem>
            <SelectItem value="banana">Unavailable</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      </div>
      <div className="w-1/4">
      <Select>
        <SelectTrigger className="w-[180px] rounded-full border-white/30 py-5 px-4">
          <SelectValue placeholder="Specialty" />
        </SelectTrigger>
        <SelectContent className="bg-black/50 rounded-[34px] p-4 border-white/10 text-white hover:bg-black">
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="therapist">Therapist</SelectItem>
            <SelectItem value="software developer">Software Developer</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      </div>
    </div>
  );
};

export default Filter;
