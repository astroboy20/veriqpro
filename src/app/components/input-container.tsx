"use client";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface InputType {
  variant:
    | "text"
    | "email"
    | "text-area"
    | "tel"
    | "select"
    | "link"
    | "password";
  label: string;
  value: string | any;
  name: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer = ({
  label,
  value,
  name,
  placeholder,
  variant,
  onChange,
}: InputType) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlepassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-[500]">{label}</span>
      {variant === "text" ? (
        <Input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          className="text-[#00000066] border border-[#00000033] rounded-[4px] h-12 p-3 text-[12px] bg-white "
          onChange={onChange}
          required
        />
      ) : variant === "email" ? (
        <Input
          type="email"
          name={name}
          value={value}
          placeholder={placeholder}
          className="text-[#00000066] border border-[#00000033] rounded-[4px] h-12 p-3 text-[12px] bg-white "
          onChange={onChange}
        />
      ) : variant === "select" ? (
        <Select>
          <SelectTrigger className="w-full border border-[#00000033] h-12 p-3 rounded-[4px] text-[12px] bg-white text-[#000000A3]">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Mr</SelectItem>
            <SelectItem value="dark">Mrs</SelectItem>
            <SelectItem value="system">Miss</SelectItem>
          </SelectContent>
        </Select>
      ) : variant === "text-area" ? (
        <Textarea placeholder={placeholder} className="border border-[#00000033] min-h-[100px] rounded-[8px]"/>
      ) : variant === "password" ? (
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name={name}
            value={value}
            placeholder={placeholder}
            className="text-[#00000066] border border-[#00000033] rounded-[4px] h-12 p-3 text-[12px] bg-white "
            onChange={onChange}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handlepassword}
          >
            {showPassword ? (
              <Eye className="w-[18px] h-[18px] text-[#292D3280]" />
            ) : (
              <EyeOff className="w-[18px] h-[18px] text-[#292D3280]" />
            )}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export { InputContainer };
