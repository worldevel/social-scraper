// Components
import SubredditsDataTable from "@/components/subreddits-data/table";
import PageTitle from "@/components/ui/page-title";

// Config
import { app } from "@/config";

export default function Subreddits() {
  return (
    <>
      <div className="container">
        <div className="mb-8">
          <PageTitle
            title="Subreddits Data"
            description={`${app.name} shows all Subreddits data.`}
          />
        </div>

        <SubredditsDataTable />
      </div>
    </>
  );
}
