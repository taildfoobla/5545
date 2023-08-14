import React,{useRef,useEffect} from 'react'
import { createChart, ColorType } from "lightweight-charts";

export default function ChartThree(props) {
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
    
      const chartThreeContainerRef = useRef();
    
      useEffect(() => {
        const handleResize = () => {
          chartThree.applyOptions({ width: chartThreeContainerRef.current.clientWidth });
        };
    
        const chartThree = createChart(chartThreeContainerRef.current, {
          layout: {
            background: { type: ColorType.Solid, color: backgroundColor },
            textColor,
          },
          width: chartThreeContainerRef.current.clientWidth,
          height: 400,
          priceFormat: {
            type: 'volume',
          },
          grid: {
            vertLines: { color: "#2D3748" },
            horzLines: { color: "#2D3748" },
          },
        });
        const lineSeries = chartThree.addLineSeries({ color: "#2962FF" });
        lineSeries.setData(data);
        const lineSeriesTwo = chartThree.addLineSeries({ color: "#2962FF" });
        lineSeriesTwo.setData(data);
    
        // const volumeSeries = chartThree.addHistogramSeries({
        //   color: '#26a69a',
        //   priceFormat: {
        //     type: 'volume',
        //   },
        //   priceScaleId: '', // set as an overlay by setting a blank priceScaleId
        //   // set the positioning of the volume series
        //   scaleMargins: {
        //     top: 0.7, // highest point of the series will be 70% away from the top
        //     bottom: 0,
        //   },
        // });
        // volumeSeries.priceScale().applyOptions({
        //   scaleMargins: {
        //     top: 0.7, // highest point of the series will be 70% away from the top
        //     bottom: 0,
        //   },
        // });
        // volumeSeries.setData(volumeData)
    
        chartThree.timeScale().fitContent();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
    
          chartThree.remove();
        };
      }, [
        data,
        backgroundColor,
        lineColor,
        textColor,
        areaTopColor,
        areaBottomColor,
      ]);
    
      return <div style={{margin:"0 40px",marginBottom:"40px",marginRight:"20px",position:"relative"}} ref={chartThreeContainerRef}>
         <div className="token-info">
        <p className="token-name">Bitcoin/U.S. Dollar, 1D, BITSTAMP <span>29424 +70 (+0.24%)</span> </p>
        <p className="token-volume">Vol BTC <span>189</span> </p>
        <p className="token-name">Bitcoin/U.S. Dollar, 1D, BITSTAMP <span>29424 +70 (+0.24%)</span> </p>
        <p className="token-volume">Vol BTC <span>189</span> </p>
      </div>
      </div>;
}
