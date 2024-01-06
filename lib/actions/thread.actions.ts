import {connectToDB} from "@/lib/mongoose";
import {fetchUser} from "@/lib/actions/user.actions";

interface Params {
  text:string,
  author: string,
  communityId:string|null,
  path:string,
}
export async function createThread({text,author,communityId,path}: Params){
  await connectToDB();
  const createdThread = await Thread.create();

}