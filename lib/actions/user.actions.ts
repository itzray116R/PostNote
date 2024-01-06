"use server"

import User from "../models/user.model";
import {connectToDB} from "@/lib/mongoose";
import {revalidatePath} from "next/cache";

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

export async function updateUser ({
                                    userId,
                                    bio,
                                    name,
                                    path,
                                    username,
                                    image,
                                  }: Params): Promise<void> {
  await connectToDB();

  try {
    await User.findOneAndUpdate(
      {id: userId},
      {
        bio,
        name,
        username: username.toLowerCase(),
        image,
        onboarded: true,
      },
      {upsert: true}
    );
    if (path === '/profile/edit') {
      revalidatePath(path);
    }

  } catch (error: any) {
    throw new Error(`Failed to create/Update user: ${error.message}`)
  }
}

export async function fetchUser(userId: string){
  try{
    connectToDB()
    return await User
      .findOne({id: userId})
      // .populate({
      //   path: 'community',
      //   model: Community
      // })
  } catch (error) {
    throw new Error(`Failed to fetch User: ${error}`)

  }

}