import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import prisma from "@/lib/client";

const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth();

  let posts:any[] =[];
  posts = [
    {
      id: 1,
      desc: "This is a sample post",
      img: "https://picsum.photos/200/300",
      createdAt: new Date("2022-01-01T12:00:00.000Z"),
      updatedAt: new Date("2022-01-01T12:00:00.000Z"),
      user: {
        id: 1,
        username: "johnDoe",
      },
      comments: [
        {
          id: 1,
          text: "This is a sample comment",
        },
        {
          id: 2,
          text: "Another sample comment",
        },
      ],
      likes: [
        {
          id: 1,
          userId: 2,
        },
        {
          id: 2,
          userId: 3,
        },
      ],
      _count: {
        comments: 2,
      },
    },
    {
      id: 2,
      desc: "This is another sample post",
      img: "https://picsum.photos/200/300",
      createdAt: new Date("2022-01-02T12:00:00.000Z"),
      updatedAt: new Date("2022-01-02T12:00:00.000Z"),
      user: {
        id: 1,
        username: "johnDoe",
      },
      comments: [
        {
          id: 3,
          text: "This is a sample comment",
        },
      ],
      likes: [
        {
          id: 3,
          userId: 2,
        },
      ],
      _count: {
        comments: 1,
      },
    },
    // Add more dummy posts as needed
  ];

  // if (username) {
  //   posts = await prisma.post.findMany({
  //     where: {
  //       user: {
  //         username: username,
  //       },
  //     },
  //     include: {
  //       user: true,
  //       likes: {
  //         select: {
  //           userId: true,
  //         },
  //       },
  //       _count: {
  //         select: {
  //           comments: true,
  //         },
  //       },
  //     },
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });
  // }

  // if (!username && userId) {
  //   const following = await prisma.follower.findMany({
  //     where: {
  //       followerId: userId,
  //     },
  //     select: {
  //       followingId: true,
  //     },
  //   });

  //   const followingIds = following.map((f) => f.followingId);
  //   const ids = [userId,...followingIds]

  //   // posts = await prisma.post.findMany({
  //   //   where: {
  //   //     userId: {
  //   //       in: ids,
  //   //     },
  //   //   },
  //   //   include: {
  //   //     user: true,
  //   //     likes: {
  //   //       select: {
  //   //         userId: true,
  //   //       },
  //   //     },
  //   //     _count: {
  //   //       select: {
  //   //         comments: true,
  //   //       },
  //   //     },
  //   //   },
  //   //   orderBy: {
  //   //     createdAt: "desc",
  //   //   },
  //   // });

  // }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {posts.length ? (posts.map(post=>(
        <Post key={post.id} post={post}/>
      ))) : "No posts found!"}
    </div>
  );
};

export default Feed;
