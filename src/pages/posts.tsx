// Components
import PostsTable from "@/components/posts/table";
import PageTitle from "@/components/ui/page-title";

// Config
import { app } from "@/config";

export default function Posts() {
  return (
    <>
      <div className="container">
        <div className="mb-8">
          <PageTitle
            title="Posts"
            description={`${app.name} shows all posts.`}
          />
        </div>

        <PostsTable />
      </div>
    </>
  );
}
