import React from "react";
import { FizziLogo } from "./FizziLogo";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
};
