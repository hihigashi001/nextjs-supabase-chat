import { Suspense } from "react"
import { PostNew } from "@/components/post/post-new"
import { PostList } from "@/components/post/post-list"
import { Loading } from "./loading"

const Page = () => {
  return (
    <div className="h-full">
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <PostList />
      </Suspense>
      <PostNew />
    </div>
  )
}

export default Page
