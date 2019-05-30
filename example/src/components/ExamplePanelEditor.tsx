import React, { PureComponent } from "react";
import {
  PanelEditorProps,
  PanelOptionsGrid,
} from "@grafana/ui";
import "./ExamplePanelEditor.css";
import s from "./ExamplePanelEditor.module.css";

export class ExamplePanelEditor extends PureComponent<PanelEditorProps<{}>> {
  // onLayoutChange = layout =>
  //   this.props.onChange({ ...this.props.options, layout: layout });

  // onValueOptionsChanged = (valueOptions: SingleStatValueOptions) =>
  //   this.props.onChange({
  //     ...this.props.options,
  //     valueOptions,
  //   });

  // onThresholdsChanged = (thresholds: Threshold[]) => {
  //   this.props.onChange({
  //     ...this.props.options,
  //     thresholds,
  //   });
  // };

  // onValueMappingsChanged = (valueMappings: ValueMapping[]) =>
  //   this.props.onChange({
  //     ...this.props.options,
  //     valueMappings,
  //   });

  render() {
    // const { options } = this.props;

    return (
      <>
        <PanelOptionsGrid>
          <div className={s["gantt-chart"]}>Gantt Chart Editor</div>
        </PanelOptionsGrid>
      </>
    );
  }
}
