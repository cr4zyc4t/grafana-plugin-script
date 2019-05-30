import { PanelPlugin } from "@grafana/ui";
import { GanttChartPanel } from "./GanttChartPanel";
import { GanttChartPanelEditor } from "./components/GanttChartPanelEditor";

export const plugin = new PanelPlugin(GanttChartPanel);

plugin.setEditor(GanttChartPanelEditor);
plugin.setDefaults({
  test: 1,
});
