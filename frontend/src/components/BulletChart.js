import React, { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';


function BulletChart({ min, max, highlightStart, highlightEnd, marker, metricName, unit }) {
    const chartContainerRef = useRef(null); // Ref to the chart's container div
    const [chartSize, setChartSize] = useState({ width: null, height: 230 }); // Initial chart size

    useEffect(() => {
        const handleResize = () => {
            // Set chart width to container's width and maintain its height
            if (chartContainerRef.current) {
                setChartSize({
                    width: chartContainerRef.current.offsetWidth,
                    height: 230 // Keep the height fixed or adjust as needed
                });
            }
        };

        // Call resize handler once to set initial size
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array means this effect runs once on mount

    // Hard-coding the colors because plotly doesn't play nicely with the DaisyUI theme
    const colors = {
        "primary": "#1D8A99", // Munsell Blue
        "secondary": "#DECDF5", // Thistle (lavender)
        "accent": "#edf4f3", //Mint cream
        "neutral": "#534D56", //Davy's Gray
        "base-100": "#F8F1FF", //Magnolia (pale purple)
        "neutral-content": "#F5F5F5", //White Smoke
    }
    const primaryColor = colors["primary"];
    const textColor = colors["neutral"];
    const backgroundColor = colors["base-100"];

    const data = [{
        type: "indicator",
        mode: "gauge",
        domain: { x: [0, 1], y: [0, 1] },
        title: {
          text: `<br><span style='color: ${textColor}; font-size:1em'>${metricName}</span>`,
          font: { size: 14, family: 'Inter, sans-serif' } // Adjust font family to match your theme
        },
        gauge: {
          shape: "bullet",
          axis: { range: [min, max] },
          threshold: {
            line: { color: textColor, width: 2 },
            thickness: 0.75,
            value: marker
          },
          bgcolor: backgroundColor,
          steps: [{ range: [highlightStart, highlightEnd], color: primaryColor }]
        }
      }];

    const layout = { ...chartSize, paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)', annotations: [
        {
            x: ((highlightStart - min) + (highlightEnd - highlightStart) / 2) / (max - min),
            y: 1,
            xref: 'paper',
            yref: 'paper',
            text: `For women your age, the typical range is ${highlightStart} to ${highlightEnd} ${unit}`,
            showarrow: true,
            arrowhead: 1,
            ax: 0,
            ay: -40,
            font: {size: 12, color: textColor},
        }
    ] };
    const config = { responsive: true };

    return (<div ref={chartContainerRef}>
      <Plot
        data={data}
        layout={layout}
        config={config}
      /></div>
    );
};

export default BulletChart;
