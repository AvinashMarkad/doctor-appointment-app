import React from "react";
import Image from "next/image";
import { Button } from "./button";

interface ButtonProps {
  isLoading: boolean;
  className: string;
  children: React.ReactNode;
}

export default function SubmitButton({
  isLoading,
  className,
  children,
}: ButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={`w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 disabled:opacity-50 disabled:cursor-not-allowed ${
        className ?? ""
      }`}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/loader.svg"
            alt="loading"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading ...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
