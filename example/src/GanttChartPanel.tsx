import React, { PureComponent } from "react";
import {
  PanelProps,
  ThemeContext,
} from "@grafana/ui";
import styled from "styled-components/macro";
import "./GanttChartPanel.css";
import testImg from "assets/img/test.jpg";

const MyHello = styled.div`
  background-color: green;
  color: red;
`;

interface Props extends PanelProps<{}> { }

export class GanttChartPanel extends PureComponent<Props> {

  double(x: number) {
    return x * 2;
  }

  render() {
    // const {
    //   options,
    //   timeRange,
    //   width,
    //   height,
    // } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => {
          // console.log("ToanVQ: ComboPanel -> render -> theme",
          //   theme,
          //   options,
          //   timeRange,
          //   width,
          //   height
          // );
          return (
            <div>
              <MyHello className="gantt-chart-hello">Hello Granfana Panel</MyHello>
              <img src={testImg} alt="testimage"/>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
