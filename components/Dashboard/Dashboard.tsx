import React, { useEffect, useState } from "react";
import GreetingBanner from "@/components/GreetingBanner/GreetingBanner";
import PillsBanner from "../PillsBanner/PillsBanner";
import PageViewChart from "../PageViewChart/PageViewChart";
import PageViewStatsSection from "../PageViewStatsSection/PageViewStatsSection";

function DashboardHeader() {
  return (
    <div className="pt-4 pb-4">
      <h1 className="text-[1.25rem] leading-6 tracking-[0.015rem] heading-semibold">
        Dashboard
      </h1>
    </div>
  );
}

export default function Dashboard() {
  const [graphData, setGraphData] = useState<IGraphData>({});
  const [topLocations, setTopLocations] = useState<ITopLocation[]>([]);
  const [topSources, setTopSources] = useState<ITopSource[]>([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await fetch(`https://fe-task-api.mainstack.io/`);
        const data: IAPIData = await res.json();

        setGraphData(data["graph_data"] as IGraphData);
        setTopLocations(data["top_locations"] as ITopLocation[]);
        setTopSources(data["top_sources"] as ITopSource[]);
      } catch (err) {
        console.log(err);
      }
    };

    callAPI();
  }, []);

  return (
    <div className="mainArea px-16 min-w-[800px]">
      <DashboardHeader />
      <GreetingBanner name="Blessing" />
      <PillsBanner />
      <PageViewChart graphData={graphData} />
      <PageViewStatsSection
        topLocations={topLocations}
        topSources={topSources}
      />
    </div>
  );
}
