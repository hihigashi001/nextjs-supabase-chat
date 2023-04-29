import { notFound } from "next/navigation"
import { createClient } from "../../../utils/supabase-server"
import { PostItem } from "./post-item"

// 投稿一覧
export const PostList = async () => {
  const supabase = createClient()

  // 投稿リストを取得
  const { data: pastsData } = await supabase.from("posts").select().order("created_at", { ascending: true })

  // 投稿がない場合
  if (!pastsData || pastsData.length === 0) {
    return notFound()
  }

  return (
    <div className="mb-40">
      {pastsData.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
