import AccountProfile from "@/components/forms/AccountProfile";
import {currentUser} from "@clerk/nextjs";
import {id} from "postcss-selector-parser";

async function Page() {
  const user = currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || userInfo?.imageUrl,
  };
  return (
    <main className="mx-auto flex max-w-3xl bg-dark-1
    flex-col justify-start px-10 py-20">
      <h1 className="head-text ">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        complete the onboarding to use the app
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile
          user={userData}
          btnTitle={"continue"}
        />
      </section>
    </main>
  );
}

export default Page;