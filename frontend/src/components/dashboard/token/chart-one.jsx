import React, { useRef, useEffect } from "react";
import { createChart, ColorType } from "lightweight-charts";
import CircleIcon from '@mui/icons-material/Circle';
export default function ChartOne(props) {
  const {
    data,
    volumeData,
    colors: {
      backgroundColor = "#171B26",
      lineColor = "#2962FF",
      textColor = "#A0AEC0",
      areaTopColor = "transparent",
      areaBottomColor = "transparent",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      priceFormat: {
        type: "volume",
      },
      grid: {
        vertLines: { color: "#2D3748" },
        horzLines: { color: "#2D3748" },
      },
    });
    const lineSeries = chart.addLineSeries({ color: "#2962FF" });
    lineSeries.setData(data);

    const volumeSeries = chart.addHistogramSeries({
      color: "#26a69a",
      // priceFormat: {
      //   type: 'volume',
      // },
      priceScaleId: "", // set as an overlay by setting a blank priceScaleId
      // set the positioning of the volume series
      scaleMargins: {
        top: 0.7, // highest point of the series will be 70% away from the top
        bottom: 0,
      },
    });
    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.7, // highest point of the series will be 70% away from the top
        bottom: 0,
      },
    });
    volumeSeries.setData(volumeData);

    chart.timeScale().fitContent();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <div
      style={{ margin: "0 40px", marginTop: "20px",position:"relative" }}
      ref={chartContainerRef}
    >
      <div className="token-info">
        <p className="token-name">Bitcoin/U.S. Dollar, 1D, BITSTAMP <span>29424 +70 (+0.24%)</span> </p>
        <p className="token-volume">Vol BTC <span>189</span> </p>
        <p className="token-name">Bitcoin/U.S. Dollar, 1D, BITSTAMP <span>29424 +70 (+0.24%)</span> </p>
        <p className="token-volume">Vol BTC <span>189</span> </p>
      </div>
    </div>
  );
}
