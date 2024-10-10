import { getUserColor } from "@/lib/liveblocks";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/sign-in");


  const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;

  //Get current user from database
  const user = {
    id: clerkUser.id,
    info: {
      id,
      name,
      name: `${firstName} ${lastName}`,
      email: emailAddresses[0].emailAddress
      avatar: imageUrl,
      color: getUserColor(id)
    }
  }

  //Identify User
  const {status, body} = await liveblocks.identifyUser({
    userId: user.info.email
    groupIds: [],
  },{
      userInfo: user.info
    })

  return new Response(body, {status})
}
