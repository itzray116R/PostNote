import Image from "next/image";
import Link from "next/link";
import {SignedIn, SignedOut,OrganizationSwitcher} from "@clerk/nextjs";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href ="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={36} height={36} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Threads
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignedOut>
              <div className="flex cursor-pointer">
                <Image src="/assets/logout.svg" alt="logout"
                       width={24} height={24}/>

              </div>
            </SignedOut>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger:
              "py-2 px-4"
            }
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
