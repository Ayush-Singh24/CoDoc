import Image from "next/image";
import Link from "next/link";

export default function Header({ children }: HeaderProps) {
  return (
    <div className="header">
      <Link className="md:flex-1" href={"/"}>
        <Image
          src="/assets/icons/logo.svg"
          alt="logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assests/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
}