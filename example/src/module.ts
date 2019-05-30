import { PanelPlugin } from "@grafana/ui";
import { ExamplePanel } from "./ExamplePanel";
import { ExamplePanelEditor } from "./components/ExamplePanelEditor";

export const plugin = new PanelPlugin(ExamplePanel);

plugin.setEditor(ExamplePanelEditor);
plugin.setDefaults({
  test: 1,
});
