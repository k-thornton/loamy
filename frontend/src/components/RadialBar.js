import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function RadialBar( {data} ) {
  return (
    <div className="h-full">
      <ResponsiveRadialBar
        data={data}
        valueFormat=">.0%"
        padding={0.1}
        cornerRadius={2}
        // margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        // circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        enableTracks={false}
        enableRadialGrid={false}
        enableCircularGrid={false}
        // maxValue={1}
        circularAxisOuter={null}
        enableLabels={true}
        labelsRadiusOffset={0.5}
        innerRadius={.1}
        // legends={[
        //   {
        //     anchor: "bottom",
        //     direction: "row",
        //     justify: true,
        //     translateX: 0,
        //     translateY: 50,
        //     itemsSpacing: 1,
        //     itemDirection: "left-to-right",
        //     itemWidth: 70,
        //     itemHeight: 18,
        //     itemTextColor: "#999",
        //     symbolSize: 8,
        //     symbolShape: "square",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemTextColor: "#000",
        //         },
        //       },
        //     ],
        //   },
        // ]}
      />
    </div>
  );
}
export default RadialBar;
