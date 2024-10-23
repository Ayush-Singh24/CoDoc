import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header({ children, className }: HeaderProps) {
  return (
    <div className={cn("header", className)}>
      <div className="md:flex-1 flex">
        <Link href="/" className="w-fit">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo with name"
            width={120}
            height={32}
            className="hidden md:block"
          />
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="logo"
            width={32}
            height={32}
            className="mr-2 md:hidden"
          />
        </Link>
      </div>
      {children}
    </div>
  );
}
