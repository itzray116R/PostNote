import {SignIn} from "@clerk/nextjs";

export default function Page () {
  return (
    <div className="origin-center">
      <SignIn/>
    </div>
  );
}