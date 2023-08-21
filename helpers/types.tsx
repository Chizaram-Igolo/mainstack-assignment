// Component Interfaces

interface IPageViewChart {
  graphData: IGraphData;
}

interface IPageViewStats {
  heading: string;
  statItems: IViewStatItem[];
  colors: string[];
}

interface IPageViewStatsSection {
  topLocations: ITopLocation[];
  topSources: ITopSource[];
}

// Types

interface IViewStatItem {
  source: string;
  count: number;
  percent: number;
  color: string;
  icon?: any;
}

interface IView {
  [key: string]: any;
}

interface IGraphData {
  views?: IView;
}

interface SeriesType {
  data: { x: string; y: number }[];
}

interface IViews {
  views: Object;
}

interface SeriesType {
  data: { x: string; y: number }[];
}

interface ITopLocation {
  country: string;
  count: number;
  percent: number;
}

interface ITopSource {
  source: string;
  count: number;
  percent: number;
}

interface IAPIData {
  graph_data: IAPIData;
  top_locations: ITopLocation[];
  top_sources: ITopSource[];
}
