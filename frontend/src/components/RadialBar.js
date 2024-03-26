import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { BasicTooltip } from "@nivo/tooltip";

export const CustomTooltip = ({ datum }) => {
  return (
    <BasicTooltip
      id={datum.groupId}
      value={datum.formattedValue}
      enableChip={true}
      color={datum.color}
    />
  );
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function RadialBar({ data }) {
  // console.log(data);
  return (
    <ResponsiveRadialBar
      data={data}
      valueFormat=">.0%"
      padding={0.05}
      cornerRadius={10}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      enableTracks={false}
      enableRadialGrid={false}
      enableCircularGrid={false}
      circularAxisOuter={null}
      enableLabels={true}
      labelsRadiusOffset={0.5}
      innerRadius={0.08}
      labelsSkipAngle={60}
      startAngle={0}
      endAngle={270}
      tooltip={(datum) => <CustomTooltip datum={datum.bar} />}
    />
  );
}
export default RadialBar;
