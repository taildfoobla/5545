import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import { AuthGuard } from "../../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../../components/dashboard/dashboard-layout";
import {
  Box,
  Grid,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Card,
} from "@mui/material";
import { createChart, ColorType } from "lightweight-charts";
import { container } from "aws-amplify";
import { createElement } from "react";
import ChartOne from "../../../../components/dashboard/token/chart-one";
import ChartTwo from "../../../../components/dashboard/token/chart-two";
import ChartThree from "../../../../components/dashboard/token/chart-three";
import { getScore } from "../../../../components/services/scoreApi";


const initialData = [
  { time: "2016-07-18", value: 661.47 },
  { time: "2016-07-25", value: 623.83 },
  { time: "2016-08-01", value: 592.47 },
  { time: "2016-08-08", value: 568.76 },
  { time: "2016-08-15", value: 577.55 },
  { time: "2016-08-22", value: 573.2 },
  { time: "2016-08-29", value: 603.72 },
  { time: "2016-09-05", value: 606.32 },
  { time: "2016-09-12", value: 608.0 },
  { time: "2016-09-19", value: 598.98 },
  { time: "2016-09-26", value: 608.6 },
  { time: "2016-10-03", value: 613.06 },
  { time: "2016-10-10", value: 638.97 },
  { time: "2016-10-17", value: 648.74 },
  { time: "2016-10-24", value: 697.23 },
  { time: "2016-10-31", value: 709.93 },
  { time: "2016-11-07", value: 700.38 },
  { time: "2016-11-14", value: 727.09 },
  { time: "2016-11-21", value: 727.32 },
  { time: "2016-11-28", value: 762.0 },
  { time: "2016-12-05", value: 768.97 },
  { time: "2016-12-12", value: 788.67 },
  { time: "2016-12-19", value: 890.67 },
  { time: "2016-12-26", value: 997.75 },
  { time: "2017-01-02", value: 909.75 },
  { time: "2017-01-09", value: 821.86 },
  { time: "2017-01-16", value: 923.76 },
  { time: "2017-01-23", value: 912.01 },
  { time: "2017-01-30", value: 1011.07 },
  { time: "2017-02-06", value: 1000.73 },
  { time: "2017-02-13", value: 1051.8 },
  { time: "2017-02-20", value: 1179.05 },
  { time: "2017-02-27", value: 1273.0 },
  { time: "2017-03-06", value: 1226.62 },
  { time: "2017-03-13", value: 1017.97 },
  { time: "2017-03-20", value: 960.0 },
  { time: "2017-03-27", value: 1078.01 },
  { time: "2017-04-03", value: 1206.2 },
  { time: "2017-04-10", value: 1162.31 },
  { time: "2017-04-17", value: 1241.99 },
  { time: "2017-04-24", value: 1350.21 },
  { time: "2017-05-01", value: 1554.01 },
  { time: "2017-05-08", value: 1784.0 },
  { time: "2017-05-15", value: 2017.55 },
  { time: "2017-05-22", value: 2178.81 },
  { time: "2017-05-29", value: 2530.27 },
  { time: "2017-06-05", value: 2954.22 },
  { time: "2017-06-12", value: 2516.98 },
  { time: "2017-06-19", value: 2502.03 },
  { time: "2017-06-26", value: 2504.37 },
  { time: "2017-07-03", value: 2502.28 },
  { time: "2017-07-10", value: 1917.63 },
  { time: "2017-07-17", value: 2749.02 },
  { time: "2017-07-24", value: 2742.37 },
  { time: "2017-07-31", value: 3222.75 },
  { time: "2017-08-07", value: 4053.87 },
  { time: "2017-08-14", value: 4058.68 },
  { time: "2017-08-21", value: 4337.68 },
  { time: "2017-08-28", value: 4606.26 },
  { time: "2017-09-04", value: 4226.22 },
  { time: "2017-09-11", value: 3662.99 },
  { time: "2017-09-18", value: 3664.22 },
  { time: "2017-09-25", value: 4377.22 },
  { time: "2017-10-02", value: 4597.98 },
  { time: "2017-10-09", value: 5679.7 },
  { time: "2017-10-16", value: 5969.0 },
  { time: "2017-10-23", value: 6137.37 },
  { time: "2017-10-30", value: 7372.72 },
  { time: "2017-11-06", value: 5870.37 },
  { time: "2017-11-13", value: 8016.58 },
  { time: "2017-11-20", value: 9271.06 },
  { time: "2017-11-27", value: 11250.0 },
  { time: "2017-12-04", value: 14691.0 },
  { time: "2017-12-11", value: 18953.0 },
  { time: "2017-12-18", value: 14157.87 },
  { time: "2017-12-25", value: 13880.0 },
  { time: "2018-01-01", value: 16124.02 },
  { time: "2018-01-08", value: 13647.99 },
  { time: "2018-01-15", value: 11558.87 },
  { time: "2018-01-22", value: 11685.58 },
  { time: "2018-01-29", value: 8191.0 },
  { time: "2018-02-05", value: 8067.0 },
  { time: "2018-02-12", value: 10421.06 },
  { time: "2018-02-19", value: 9590.04 },
  { time: "2018-02-26", value: 11463.27 },
  { time: "2018-03-05", value: 9535.04 },
  { time: "2018-03-12", value: 8188.24 },
  { time: "2018-03-19", value: 8453.9 },
  { time: "2018-03-26", value: 6813.52 },
  { time: "2018-04-02", value: 7027.26 },
  { time: "2018-04-09", value: 8354.22 },
  { time: "2018-04-16", value: 8789.96 },
  { time: "2018-04-23", value: 9393.99 },
  { time: "2018-04-30", value: 9623.54 },
  { time: "2018-05-07", value: 8696.58 },
  { time: "2018-05-14", value: 8518.48 },
  { time: "2018-05-21", value: 7347.39 },
  { time: "2018-05-28", value: 7703.67 },
  { time: "2018-06-04", value: 6781.17 },
  { time: "2018-06-11", value: 6453.41 },
  { time: "2018-06-18", value: 6153.4 },
  { time: "2018-06-25", value: 6349.99 },
  { time: "2018-07-02", value: 6706.6 },
  { time: "2018-07-09", value: 6349.3 },
  { time: "2018-07-16", value: 7396.6 },
  { time: "2018-07-23", value: 8216.74 },
  { time: "2018-07-30", value: 7032.61 },
  { time: "2018-08-06", value: 6310.82 },
  { time: "2018-08-13", value: 6481.99 },
  { time: "2018-08-20", value: 6700.46 },
  { time: "2018-08-27", value: 7290.31 },
  { time: "2018-09-03", value: 6236.04 },
  { time: "2018-09-10", value: 6499.98 },
  { time: "2018-09-17", value: 6702.22 },
  { time: "2018-09-24", value: 6597.81 },
  { time: "2018-10-01", value: 6577.63 },
  { time: "2018-10-08", value: 6183.0 },
  { time: "2018-10-15", value: 6413.38 },
  { time: "2018-10-22", value: 6405.57 },
  { time: "2018-10-29", value: 6421.76 },
  { time: "2018-11-05", value: 6357.54 },
  { time: "2018-11-12", value: 5559.26 },
  { time: "2018-11-19", value: 3938.89 },
  { time: "2018-11-26", value: 4102.05 },
  { time: "2018-12-03", value: 3529.75 },
  { time: "2018-12-10", value: 3193.78 },
  { time: "2018-12-17", value: 3943.83 },
  { time: "2018-12-24", value: 3835.79 },
  { time: "2018-12-31", value: 4040.71 },
  { time: "2019-01-07", value: 3515.95 },
  { time: "2019-01-14", value: 3536.72 },
  { time: "2019-01-21", value: 3533.23 },
  { time: "2019-01-28", value: 3414.82 },
  { time: "2019-02-04", value: 3650.37 },
  { time: "2019-02-11", value: 3625.6 },
  { time: "2019-02-18", value: 3730.68 },
  { time: "2019-02-25", value: 3789.52 },
  { time: "2019-03-04", value: 3897.92 },
  { time: "2019-03-11", value: 3965.5 },
  { time: "2019-03-18", value: 3969.99 },
  { time: "2019-03-25", value: 4096.08 },
  { time: "2019-04-01", value: 5190.85 },
  { time: "2019-04-08", value: 5162.72 },
  { time: "2019-04-15", value: 5295.65 },
  { time: "2019-04-22", value: 5160.98 },
  { time: "2019-04-29", value: 5709.32 },
  { time: "2019-05-06", value: 6974.35 },
  { time: "2019-05-13", value: 8200.0 },
  { time: "2019-05-20", value: 8733.26 },
  { time: "2019-05-27", value: 8702.43 },
];

const volumeData = [
  { time: "2018-10-19", value: 19103293.0, color: "#26a69a" },
  { time: "2018-10-22", value: 21737523.0, color: "#26a69a" },
  { time: "2018-10-23", value: 29328713.0, color: "#26a69a" },
  { time: "2018-10-24", value: 37435638.0, color: "#26a69a" },
  { time: "2018-10-25", value: 25269995.0, color: "#ef5350" },
  { time: "2018-10-26", value: 24973311.0, color: "#ef5350" },
  { time: "2018-10-29", value: 22103692.0, color: "#26a69a" },
  { time: "2018-10-30", value: 25231199.0, color: "#26a69a" },
  { time: "2018-10-31", value: 24214427.0, color: "#ef5350" },
  { time: "2018-11-01", value: 22533201.0, color: "#ef5350" },
  { time: "2018-11-02", value: 14734412.0, color: "#26a69a" },
  { time: "2018-11-05", value: 12733842.0, color: "#26a69a" },
  { time: "2018-11-06", value: 12371207.0, color: "#26a69a" },
  { time: "2018-11-07", value: 14891287.0, color: "#26a69a" },
  { time: "2018-11-08", value: 12482392.0, color: "#26a69a" },
  { time: "2018-11-09", value: 17365762.0, color: "#26a69a" },
  { time: "2018-11-12", value: 13236769.0, color: "#26a69a" },
  { time: "2018-11-13", value: 13047907.0, color: "#ef5350" },
  { time: "2018-11-14", value: 18288710.0, color: "#26a69a" },
  { time: "2018-11-15", value: 17147123.0, color: "#26a69a" },
  { time: "2018-11-16", value: 19470986.0, color: "#26a69a" },
  { time: "2018-11-19", value: 18405731.0, color: "#26a69a" },
  { time: "2018-11-20", value: 22028957.0, color: "#ef5350" },
  { time: "2018-11-21", value: 18482233.0, color: "#ef5350" },
  { time: "2018-11-23", value: 7009050.0, color: "#ef5350" },
  { time: "2018-11-26", value: 12308876.0, color: "#26a69a" },
  { time: "2018-11-27", value: 14118867.0, color: "#26a69a" },
  { time: "2018-11-28", value: 18662989.0, color: "#ef5350" },
  { time: "2018-11-29", value: 14763658.0, color: "#ef5350" },
  { time: "2018-11-30", value: 31142818.0, color: "#26a69a" },
  { time: "2018-12-03", value: 27795428.0, color: "#ef5350" },
  { time: "2018-12-04", value: 21727411.0, color: "#ef5350" },
  { time: "2018-12-06", value: 26880429.0, color: "#ef5350" },
  { time: "2018-12-07", value: 16948126.0, color: "#ef5350" },
  { time: "2018-12-10", value: 16603356.0, color: "#26a69a" },
  { time: "2018-12-11", value: 14991438.0, color: "#26a69a" },
  { time: "2018-12-12", value: 18892182.0, color: "#ef5350" },
  { time: "2018-12-13", value: 15454706.0, color: "#ef5350" },
  { time: "2018-12-14", value: 13960870.0, color: "#ef5350" },
  { time: "2018-12-17", value: 18902523.0, color: "#ef5350" },
  { time: "2018-12-18", value: 18895777.0, color: "#ef5350" },
  { time: "2018-12-19", value: 20968473.0, color: "#26a69a" },
  { time: "2018-12-20", value: 26897008.0, color: "#ef5350" },
  { time: "2018-12-21", value: 55413082.0, color: "#ef5350" },
  { time: "2018-12-24", value: 15077207.0, color: "#ef5350" },
  { time: "2018-12-26", value: 17970539.0, color: "#26a69a" },
  { time: "2018-12-27", value: 17530977.0, color: "#26a69a" },
  { time: "2018-12-28", value: 14771641.0, color: "#26a69a" },
  { time: "2018-12-31", value: 15331758.0, color: "#26a69a" },
  { time: "2019-01-02", value: 13969691.0, color: "#ef5350" },
  { time: "2019-01-03", value: 19245411.0, color: "#26a69a" },
  { time: "2019-01-04", value: 17035848.0, color: "#26a69a" },
  { time: "2019-01-07", value: 16348982.0, color: "#26a69a" },
  { time: "2019-01-08", value: 21425008.0, color: "#26a69a" },
  { time: "2019-01-09", value: 18136000.0, color: "#ef5350" },
  { time: "2019-01-10", value: 14259910.0, color: "#26a69a" },
  { time: "2019-01-11", value: 15801548.0, color: "#26a69a" },
  { time: "2019-01-14", value: 11342293.0, color: "#26a69a" },
  { time: "2019-01-15", value: 10074386.0, color: "#26a69a" },
  { time: "2019-01-16", value: 13411691.0, color: "#ef5350" },
  { time: "2019-01-17", value: 15223854.0, color: "#ef5350" },
  { time: "2019-01-18", value: 16802516.0, color: "#26a69a" },
  { time: "2019-01-22", value: 18284771.0, color: "#ef5350" },
  { time: "2019-01-23", value: 15109007.0, color: "#26a69a" },
  { time: "2019-01-24", value: 12494109.0, color: "#ef5350" },
  { time: "2019-01-25", value: 17806822.0, color: "#ef5350" },
  { time: "2019-01-28", value: 25955718.0, color: "#ef5350" },
  { time: "2019-01-29", value: 33789235.0, color: "#ef5350" },
  { time: "2019-01-30", value: 27260036.0, color: "#26a69a" },
  { time: "2019-01-31", value: 28585447.0, color: "#26a69a" },
  { time: "2019-02-01", value: 13778392.0, color: "#ef5350" },
  { time: "2019-02-04", value: 15818901.0, color: "#ef5350" },
  { time: "2019-02-05", value: 14124794.0, color: "#26a69a" },
  { time: "2019-02-06", value: 11391442.0, color: "#ef5350" },
  { time: "2019-02-07", value: 12436168.0, color: "#ef5350" },
  { time: "2019-02-08", value: 12011657.0, color: "#26a69a" },
  { time: "2019-02-11", value: 9802798.0, color: "#26a69a" },
  { time: "2019-02-12", value: 11227550.0, color: "#26a69a" },
  { time: "2019-02-13", value: 11884803.0, color: "#26a69a" },
  { time: "2019-02-14", value: 11190094.0, color: "#ef5350" },
  { time: "2019-02-15", value: 15719416.0, color: "#26a69a" },
  { time: "2019-02-19", value: 12272877.0, color: "#26a69a" },
  { time: "2019-02-20", value: 11379006.0, color: "#26a69a" },
  { time: "2019-02-21", value: 14680547.0, color: "#26a69a" },
  { time: "2019-02-22", value: 12534431.0, color: "#26a69a" },
  { time: "2019-02-25", value: 15051182.0, color: "#ef5350" },
  { time: "2019-02-26", value: 12005571.0, color: "#ef5350" },
  { time: "2019-02-27", value: 8962776.0, color: "#26a69a" },
  { time: "2019-02-28", value: 15742971.0, color: "#26a69a" },
  { time: "2019-03-01", value: 10942737.0, color: "#26a69a" },
  { time: "2019-03-04", value: 13674737.0, color: "#ef5350" },
  { time: "2019-03-05", value: 15749545.0, color: "#ef5350" },
  { time: "2019-03-06", value: 13935530.0, color: "#ef5350" },
  { time: "2019-03-07", value: 12644171.0, color: "#26a69a" },
  { time: "2019-03-08", value: 10646710.0, color: "#26a69a" },
  { time: "2019-03-11", value: 13627431.0, color: "#26a69a" },
  { time: "2019-03-12", value: 12812980.0, color: "#ef5350" },
  { time: "2019-03-13", value: 14168350.0, color: "#26a69a" },
  { time: "2019-03-14", value: 12148349.0, color: "#26a69a" },
  { time: "2019-03-15", value: 23715337.0, color: "#26a69a" },
  { time: "2019-03-18", value: 12168133.0, color: "#ef5350" },
  { time: "2019-03-19", value: 13462686.0, color: "#ef5350" },
  { time: "2019-03-20", value: 11903104.0, color: "#26a69a" },
  { time: "2019-03-21", value: 10920129.0, color: "#26a69a" },
  { time: "2019-03-22", value: 25125385.0, color: "#26a69a" },
  { time: "2019-03-25", value: 15463411.0, color: "#26a69a" },
  { time: "2019-03-26", value: 12316901.0, color: "#26a69a" },
  { time: "2019-03-27", value: 13290298.0, color: "#26a69a" },
  { time: "2019-03-28", value: 20547060.0, color: "#ef5350" },
  { time: "2019-03-29", value: 17283871.0, color: "#26a69a" },
  { time: "2019-04-01", value: 16331140.0, color: "#ef5350" },
  { time: "2019-04-02", value: 11408146.0, color: "#ef5350" },
  { time: "2019-04-03", value: 15491724.0, color: "#26a69a" },
  { time: "2019-04-04", value: 8776028.0, color: "#26a69a" },
  { time: "2019-04-05", value: 11497780.0, color: "#26a69a" },
  { time: "2019-04-08", value: 11680538.0, color: "#26a69a" },
  { time: "2019-04-09", value: 10414416.0, color: "#ef5350" },
  { time: "2019-04-10", value: 8782061.0, color: "#26a69a" },
  { time: "2019-04-11", value: 9219930.0, color: "#ef5350" },
  { time: "2019-04-12", value: 10847504.0, color: "#26a69a" },
  { time: "2019-04-15", value: 7741472.0, color: "#ef5350" },
  { time: "2019-04-16", value: 10239261.0, color: "#26a69a" },
  { time: "2019-04-17", value: 15498037.0, color: "#ef5350" },
  { time: "2019-04-18", value: 13189013.0, color: "#26a69a" },
  { time: "2019-04-22", value: 11950365.0, color: "#26a69a" },
  { time: "2019-04-23", value: 23488682.0, color: "#ef5350" },
  { time: "2019-04-24", value: 13227084.0, color: "#ef5350" },
  { time: "2019-04-25", value: 17425466.0, color: "#ef5350" },
  { time: "2019-04-26", value: 16329727.0, color: "#26a69a" },
  { time: "2019-04-29", value: 13984965.0, color: "#26a69a" },
  { time: "2019-04-30", value: 15469002.0, color: "#26a69a" },
  { time: "2019-05-01", value: 11627436.0, color: "#ef5350" },
  { time: "2019-05-02", value: 14435436.0, color: "#26a69a" },
  { time: "2019-05-03", value: 9388228.0, color: "#26a69a" },
  { time: "2019-05-06", value: 10066145.0, color: "#ef5350" },
  { time: "2019-05-07", value: 12963827.0, color: "#ef5350" },
  { time: "2019-05-08", value: 12086743.0, color: "#ef5350" },
  { time: "2019-05-09", value: 14835326.0, color: "#26a69a" },
  { time: "2019-05-10", value: 10707335.0, color: "#26a69a" },
  { time: "2019-05-13", value: 13759350.0, color: "#ef5350" },
  { time: "2019-05-14", value: 12776175.0, color: "#ef5350" },
  { time: "2019-05-15", value: 10806379.0, color: "#26a69a" },
  { time: "2019-05-16", value: 11695064.0, color: "#26a69a" },
  { time: "2019-05-17", value: 14436662.0, color: "#26a69a" },
  { time: "2019-05-20", value: 20910590.0, color: "#26a69a" },
  { time: "2019-05-21", value: 14016315.0, color: "#26a69a" },
  { time: "2019-05-22", value: 11487448.0, color: "#ef5350" },
  { time: "2019-05-23", value: 11707083.0, color: "#ef5350" },
  { time: "2019-05-24", value: 8755506.0, color: "#26a69a" },
  { time: "2019-05-28", value: 3097125.0, color: "#26a69a" },
];

function TokenDetail() {
  const router = useRouter();
  const symbol = router.query.tokenId
  const name = router.query.name
  const { data:score}=useSWR(`symbol/${symbol}`,getScore)
  console.log(symbol)
  if(score){
   console.log(score)
  }
  let scoreData=[]

  if(score){
   scoreData=score.map(item=>{
      const itemTime= item.block_date.split("").slice(0,10).join("")
      const itemValue=item.price
      return{
        time:itemTime,
        value:itemValue
      }
    })
  scoreData=scoreData.reverse()
  }
  
console.log(scoreData)

  const backToPrevPage = (link) => {
    router.push(link);
  };
  return (
    <>
      <Head>
        <title>Token: {symbol}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item display={"flex"} alignItems={"center"} gap={"5px"}>
                <Image width={45} height={45} src="/static/token/image 2.png"/>
                <Typography variant="h4">{name} <span className="link">{symbol}</span> </Typography>
              </Grid>
            </Grid>
            <Breadcrumbs maxItems={3} aria-label="breadcrumb">
              <Link
                underline="hover"
                color="#7582EB"
                href="#"
                onClick={() => {
                  backToPrevPage("/dashboard");
                }}
              >
                Home
              </Link>
              <Link
                underline="hover"
                color="#7582EB"
                href="#"
                onClick={() => {
                  backToPrevPage("/dashboard");
                }}
              >
                Tokens
              </Link>
              <Typography color="text.primary">{name}</Typography>
            </Breadcrumbs>
          </Box>

          <Card className="chart-container">
            <Grid container spacing={0} paddingBottom={4}>
              <Grid
                item
                xs={12}
                marginTop={1}
                marginBottom={2}
                padding={4}
                borderBottom={1}
                borderColor={"#2D3748"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="h5" color="text.primary" padding={2}>
                  Chart
                </Typography>
                <img
                  src="/static/token/Icon.png"
                  width={25}
                  height={25}
                  style={{ marginRight: "20px" }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <ChartOne data={initialData} volumeData={volumeData} />
              </Grid> */}
              <Grid item xs={12}>
                {" "}
                <ChartTwo data={scoreData} volumeData={volumeData} name={name} symbol={symbol} />{" "}
              </Grid>
              {/* <Grid item xs={12}>
                <ChartThree data={initialData} volumeData={volumeData}/>
              </Grid> */}
            </Grid>
          </Card>
        </Container>
      </Box>
    </>
  );
}

TokenDetail.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default TokenDetail;
