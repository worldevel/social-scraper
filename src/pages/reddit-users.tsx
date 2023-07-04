// Components
import RedditUsersTable from "@/components/reddit-users/table";
import PageTitle from "@/components/ui/page-title";

// Config
import { app } from "@/config";

export default function RedditUsers() {
  return (
    <>
      <div className="container">
        <div className="mb-8">
          <PageTitle
            title="Reddit Users"
            description={`${app.name} shows all Reddit users.`}
          />
        </div>

        <RedditUsersTable />
      </div>
    </>
  );
}
