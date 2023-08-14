import React,{useRef,useEffect} from 'react'
import { createChart, ColorType } from "lightweight-charts";

export default function ChartTwo(props) {
    const {
        data,
        volumeData,
        name,
        symbol,
        colors: {
          backgroundColor = "#171B26",
          lineColor = "#2962FF",
          textColor = "#A0AEC0",
          areaTopColor = "transparent",
          areaBottomColor = "transparent",
        } = {},
      } = props;
    
      const chartTwoContainerRef = useRef();
    
      useEffect(() => {
        const handleResize = () => {
          chartTwo.applyOptions({ width: chartTwoContainerRef.current.clientWidth });
        };
    
        const chartTwo = createChart(chartTwoContainerRef.current, {
          layout: {
            background: { type: ColorType.Solid, color: backgroundColor },
            textColor,
          },
          width: chartTwoContainerRef.current.clientWidth,
          height: 400,
          priceFormat: {
            type: 'volume',
          },
          grid: {
            vertLines: { color: "#2D3748" },
            horzLines: { color: "#2D3748" },
          },
        });
        const lineSeries = chartTwo.addLineSeries({ color: "#2962FF" });
        lineSeries.setData(data);
    
        // const volumeSeries = chartTwo.addHistogramSeries({
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
    
        chartTwo.timeScale().fitContent();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
    
          chartTwo.remove();
        };
      }, [
        data,
        backgroundColor,
        lineColor,
        textColor,
        areaTopColor,
        areaBottomColor,
      ]);
    
      return <div style={{margin:"0 40px",position:"relative"}} ref={chartTwoContainerRef}>
         <div className="token-info">
        <p className="token-name">{name}/U.S. Dollar, 1D, {symbol} <span>29424 +70 (+0.24%)</span> </p>
        <p className="token-volume">Vol {symbol} <span>189</span> </p>
        <p className="token-name">{name}/U.S. Dollar, 1D, {symbol} <span>29424 +70 (+0.24%)</span> </p>
        <p className="token-volume">Vol {symbol} <span>189</span> </p>
      </div>
      </div>;
}
