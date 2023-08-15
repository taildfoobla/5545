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
  { time: { year: 2018, month: 9, day: 22 }, value: 25.531816900940186 },
  { time: { year: 2018, month: 9, day: 23 }, value: 26.350850429478125 },
  { time: { year: 2018, month: 9, day: 24 }, value: 25.05218443850655 },
  { time: { year: 2018, month: 9, day: 25 }, value: 25.41022485894306 },
  { time: { year: 2018, month: 9, day: 26 }, value: 25.134847363259958 },
  { time: { year: 2018, month: 9, day: 27 }, value: 24.239250761300525 },
  { time: { year: 2018, month: 9, day: 28 }, value: 28.8673009313941 },
  { time: { year: 2018, month: 9, day: 29 }, value: 27.028082380884264 },
  { time: { year: 2018, month: 9, day: 30 }, value: 27.181577793470662 },
  { time: { year: 2018, month: 10, day: 1 }, value: 28.658957209998505 },
  { time: { year: 2018, month: 10, day: 2 }, value: 30.418392247817536 },
  { time: { year: 2018, month: 10, day: 3 }, value: 26.41825183552505 },
  { time: { year: 2018, month: 10, day: 4 }, value: 30.0951233353539 },
  { time: { year: 2018, month: 10, day: 5 }, value: 30.30985059775389 },
  { time: { year: 2018, month: 10, day: 6 }, value: 30.71612555943148 },
  { time: { year: 2018, month: 10, day: 7 }, value: 28.222424591003268 },
  { time: { year: 2018, month: 10, day: 8 }, value: 31.01149570947896 },
  { time: { year: 2018, month: 10, day: 9 }, value: 30.390225881550307 },
  { time: { year: 2018, month: 10, day: 10 }, value: 29.451733557312163 },
  { time: { year: 2018, month: 10, day: 11 }, value: 34.14376900459634 },
  { time: { year: 2018, month: 10, day: 12 }, value: 30.223333215683407 },
  { time: { year: 2018, month: 10, day: 13 }, value: 35.1548736041708 },
  { time: { year: 2018, month: 10, day: 14 }, value: 37.795223779011096 },
  { time: { year: 2018, month: 10, day: 15 }, value: 38.95966228546306 },
  { time: { year: 2018, month: 10, day: 16 }, value: 35.59132526195566 },
  { time: { year: 2018, month: 10, day: 17 }, value: 38.42249768195307 },
  { time: { year: 2018, month: 10, day: 18 }, value: 40.82520015585623 },
  { time: { year: 2018, month: 10, day: 19 }, value: 37.401446370157814 },
  { time: { year: 2018, month: 10, day: 20 }, value: 44.14728329801845 },
  { time: { year: 2018, month: 10, day: 21 }, value: 43.908512951087765 },
  { time: { year: 2018, month: 10, day: 22 }, value: 47.139711966410914 },
  { time: { year: 2018, month: 10, day: 23 }, value: 43.78495537329606 },
  { time: { year: 2018, month: 10, day: 24 }, value: 46.37910782721347 },
  { time: { year: 2018, month: 10, day: 25 }, value: 48.280192310089234 },
  { time: { year: 2018, month: 10, day: 26 }, value: 49.63767420501933 },
  { time: { year: 2018, month: 10, day: 27 }, value: 43.05752682224708 },
  { time: { year: 2018, month: 10, day: 28 }, value: 48.32708061157758 },
  { time: { year: 2018, month: 10, day: 29 }, value: 53.39600337663517 },
  { time: { year: 2018, month: 10, day: 30 }, value: 46.711006266435355 },
  { time: { year: 2018, month: 10, day: 31 }, value: 54.13809826985657 },
  { time: { year: 2018, month: 11, day: 1 }, value: 55.79021790616995 },
  { time: { year: 2018, month: 11, day: 2 }, value: 49.2873885580548 },
  { time: { year: 2018, month: 11, day: 3 }, value: 56.97009522871737 },
  { time: { year: 2018, month: 11, day: 4 }, value: 50.823930530973975 },
  { time: { year: 2018, month: 11, day: 5 }, value: 54.960060077375076 },
  { time: { year: 2018, month: 11, day: 6 }, value: 62.0222568413422 },
  { time: { year: 2018, month: 11, day: 7 }, value: 58.20081640960216 },
  { time: { year: 2018, month: 11, day: 8 }, value: 65.13004590769961 },
  { time: { year: 2018, month: 11, day: 9 }, value: 57.78891076252559 },
  { time: { year: 2018, month: 11, day: 10 }, value: 58.792896124952186 },
  { time: { year: 2018, month: 11, day: 11 }, value: 61.87890147945707 },
  { time: { year: 2018, month: 11, day: 12 }, value: 60.93156560716248 },
  { time: { year: 2018, month: 11, day: 13 }, value: 57.85928164082374 },
  { time: { year: 2018, month: 11, day: 14 }, value: 70.95139577968187 },
  { time: { year: 2018, month: 11, day: 15 }, value: 71.59735270974251 },
  { time: { year: 2018, month: 11, day: 16 }, value: 68.6730845432055 },
  { time: { year: 2018, month: 11, day: 17 }, value: 70.1298800651962 },
  { time: { year: 2018, month: 11, day: 18 }, value: 68.82963709012753 },
  { time: { year: 2018, month: 11, day: 19 }, value: 70.66316240517193 },
  { time: { year: 2018, month: 11, day: 20 }, value: 67.83320577283186 },
  { time: { year: 2018, month: 11, day: 21 }, value: 75.08486799785067 },
  { time: { year: 2018, month: 11, day: 22 }, value: 72.87979342888752 },
  { time: { year: 2018, month: 11, day: 23 }, value: 78.84973566116827 },
  { time: { year: 2018, month: 11, day: 24 }, value: 77.59573370643601 },
  { time: { year: 2018, month: 11, day: 25 }, value: 74.74726921909757 },
  { time: { year: 2018, month: 11, day: 26 }, value: 69.68128245039887 },
  { time: { year: 2018, month: 11, day: 27 }, value: 84.2489916330028 },
  { time: { year: 2018, month: 11, day: 28 }, value: 85.49947753269504 },
  { time: { year: 2018, month: 11, day: 29 }, value: 79.8486264148003 },
  { time: { year: 2018, month: 11, day: 30 }, value: 87.69287202402485 },
  { time: { year: 2018, month: 12, day: 1 }, value: 78.01690218289475 },
  { time: { year: 2018, month: 12, day: 2 }, value: 90.03789034980372 },
  { time: { year: 2018, month: 12, day: 3 }, value: 80.8840602849401 },
  { time: { year: 2018, month: 12, day: 4 }, value: 76.88131503723805 },
  { time: { year: 2018, month: 12, day: 5 }, value: 80.31060219295262 },
  { time: { year: 2018, month: 12, day: 6 }, value: 93.94619117220051 },
  { time: { year: 2018, month: 12, day: 7 }, value: 94.87133202008548 },
  { time: { year: 2018, month: 12, day: 8 }, value: 82.60328626838404 },
  { time: { year: 2018, month: 12, day: 9 }, value: 97.16768398118845 },
  { time: { year: 2018, month: 12, day: 10 }, value: 86.28219316727935 },
  { time: { year: 2018, month: 12, day: 11 }, value: 88.98768390749808 },
  { time: { year: 2018, month: 12, day: 12 }, value: 86.9799632094888 },
  { time: { year: 2018, month: 12, day: 13 }, value: 94.84612878449812 },
  { time: { year: 2018, month: 12, day: 14 }, value: 102.1160216124386 },
  { time: { year: 2018, month: 12, day: 15 }, value: 87.0646295567293 },
  { time: { year: 2018, month: 12, day: 16 }, value: 88.48802912330535 },
  { time: { year: 2018, month: 12, day: 17 }, value: 89.68490260440238 },
  { time: { year: 2018, month: 12, day: 18 }, value: 86.66224375818467 },
  { time: { year: 2018, month: 12, day: 19 }, value: 88.05916917094234 },
  { time: { year: 2018, month: 12, day: 20 }, value: 78.96513176162487 },
  { time: { year: 2018, month: 12, day: 21 }, value: 90.54239307317953 },
  { time: { year: 2018, month: 12, day: 22 }, value: 92.40550159209458 },
  { time: { year: 2018, month: 12, day: 23 }, value: 82.47365747958841 },
  { time: { year: 2018, month: 12, day: 24 }, value: 91.55327647717618 },
  { time: { year: 2018, month: 12, day: 25 }, value: 89.34790162747024 },
  { time: { year: 2018, month: 12, day: 26 }, value: 85.68927849920716 },
  { time: { year: 2018, month: 12, day: 27 }, value: 85.86795553966918 },
  { time: { year: 2018, month: 12, day: 28 }, value: 90.55358282944198 },
  { time: { year: 2018, month: 12, day: 29 }, value: 91.28939932554621 },
  { time: { year: 2018, month: 12, day: 30 }, value: 100.90495261248472 },
  { time: { year: 2018, month: 12, day: 31 }, value: 98.99348823473713 },
];

function TokenDetail() {
  const router = useRouter();
  const symbol = router.query.tokenId;
  const name = router.query.name;
  const { data: score } = useSWR(`symbol/${symbol}`, getScore);
  console.log(symbol);
  if (score) {
    console.log(score);
  }
  let scoreData = [];
  let atsData=[];
  if (score) {
   score.forEach((item) => {
      const itemTime = item.block_date.split("").slice(0, 10).join("");
      const itemValue = item.price;
      const atsValue= item.accumulation_trend_score;
      console.log(atsValue);
      if (itemTime !== undefined && itemValue !== null) {
        const scoreObject= {
          time: itemTime,
          value: itemValue,
        };
        scoreData.push(scoreObject)
      }
      if(itemTime!==undefined&& atsValue!==undefined){
        const atsObject= {
          time: itemTime,
          value: atsValue,
        };
        atsData.push(atsObject)
      }
    });
  }

  console.log(scoreData);
console.log(atsData);
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
                <Image width={45} height={45} src="/static/token/image 2.png" />
                <Typography variant="h4">
                  {name} <span className="link">{symbol}</span>{" "}
                </Typography>
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
                <ChartTwo
                  data={scoreData}
                  volumeData={volumeData}
                  atsData={atsData}
                  name={name}
                  symbol={symbol}
                />{" "}
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
