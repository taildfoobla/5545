import { useEffect, useState } from "react";
import NextLink from "next/link";
import numeral from "numeral";
import PropTypes from "prop-types";
import { Chart } from "../../chart";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Breadcrumbs,
  CardContent,
} from "@mui/material";
import { getInitials } from "../../../utils/get-initials";
import { Scrollbar } from "../../scrollbar";
import Image from "next/image";
import Star from "../../../../public/static/icons/star.svg";
import { getScore } from "../../services/scoreApi";

export const TokenListTable = (props) => {
  const router = useRouter();
  const theme = useTheme();
  const {
    tokens,
    tokensCount,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    ...other
  } = props;
  const [selectedTokens, setSelectedTokens] = useState([]);

  // Reset selected customers when customers change
  useEffect(
    () => {
      if (selectedTokens.length) {
        setSelectedTokens([]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tokens]
  );

  const getDetailScore = async (symbol, variant) => {
    const res = await getScore(`symbol/${symbol}`);
    const reverseData = res.reverse();
    if(variant==="ats"){
      if(reverseData[0].accumulation_trend_score){
        return reverseData[0].accumulation_trend_score
      }else{
        return ""
      }
    }else{
      if(reverseData[0].price){
        return reverseData[0].price
      }else{
        return ""
      }
    }
  };

  const handleSelectAllTokens = (event) => {
    setSelectedTokens(
      event.target.checked ? customers.map((customer) => customer.id) : []
    );
  };

  const handleSelectOneToken = (event, customerId) => {
    if (!selectedTokens.includes(customerId)) {
      setSelectedTokens((prevSelected) => [...prevSelected, customerId]);
    } else {
      setSelectedTokens((prevSelected) =>
        prevSelected.filter((id) => id !== customerId)
      );
    }
  };

  const calcProgressIndex = (number) => {
    return (number / 100) * 180 + 180;
  };
  const calcProgressCex = (number) => {
    return number * 100;
  };

  const goToTokenDetail = (symbol, name) => {
    router.push(`/dashboard/tokens/${symbol}?name=${name}`);
  };

  const enableBulkActions = selectedTokens.length > 0;
  const selectedSomeTokens =
    selectedTokens.length > 0 && selectedTokens.length < tokens.length;
  const selectedAllTokens = selectedTokens.length === tokens.length;

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#7BC67E", "#6E7AD8"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: theme.palette.divider,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const chartSeries = [
    {
      name: "Up/Cross-Selling",
      data: [90, 32, 2, 22, 90, 33, 25, 8, 1, 21, 21, -100],
    },
  ];

  return (
    <div {...other}>
      <div className="token-filter-wrapper">
        <div className="token-filter">
          <img src="./static/token/star.png" alt="" />
          <p>Watchlist</p>
        </div>
        <div className="token-filter">
          <img src="./static/token/tune.png" alt="" />
          <p>Filter</p>
        </div>
        <TablePagination
          component="div"
          count={tokensCount}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </div>

      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead
            sx={{ visibility: enableBulkActions ? "collapse" : "visible" }}
          >
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell padding="0">#</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right" style={{ minWidth: "80px" }}>
                ATS{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />
              </TableCell>
              <TableCell align="right">
                RSI{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
              <TableCell align="center">Fear & Greed INDex</TableCell>
              <TableCell align="center">CEX RATIO</TableCell>
              <TableCell align="right">CEX INFLOW</TableCell>
              <TableCell align="right">CEX OUTFLOW</TableCell>
              <TableCell align="right">ATS LAST 7D</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens.map((token, index) => {
              const isTokenSelected = selectedTokens.includes(token.id);

              return (
                <TableRow hover key={token.id} selected={isTokenSelected}>
                  <TableCell align="center">
                    <Image
                      src="/static/token/star.png"
                      width={24}
                      height={24}
                    />
                  </TableCell>
                  <TableCell padding="checkbox">
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar
                        src={token.avatar}
                        sx={{
                          height: 40,
                          width: 40,
                        }}
                      >
                        {getInitials(token.name)}
                      </Avatar>
                      <Box sx={{ ml: 1 }}>
                        <p
                          href="/tokens/1"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            goToTokenDetail(token.symbol, token.name);
                          }}
                        >
                          {token.name}{" "}
                          <span className="link">{token.symbol}</span>
                        </p>
                        <div className="small-icon">
                          <Image
                            src="/static/token/image 5.png"
                            width={15}
                            height={15}
                          />
                          <Image
                            src="/static/token/image 4.png"
                            width={15}
                            height={15}
                          />
                        </div>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    ${token.price}
                    <p className="percent-price"></p>
                  </TableCell>
                  <TableCell padding={0} align="right">
                    <p className="ats"></p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="rsi-status"></p>
                  </TableCell>
                  <TableCell>
                    {/* <div className="fear-greed-index">
                      <div className="fear-greed-text fear"></div>
                      <div className="progress-wrapper">
                        <div
                          className="progress"
                          style={{
                            background: `conic-gradient(#D14343 ${calcProgressIndex(
                              12
                            )}deg,white 0deg)`,
                          }}
                        ></div>
                      </div>
                      <p className="fear">12</p>
                    </div> */}
                  </TableCell>
                  <TableCell align="center" width={200}>
                    {/* <div className="cex-progress-wrapper">
                      <div
                        className="cex-progress"
                        style={{ width: `${calcProgressCex(0.54)}%` }}
                      ></div>
                    </div>
                    <p className="cex-ratio">{0.54 * 100}%</p> */}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <p></p>
                    <p className="total"></p>
                  </TableCell>
                  <TableCell align="right">
                    <p></p>
                    <p className="total"></p>
                  </TableCell>
                  <TableCell align="right">
                    <Chart
                      width={300}
                      height={120}
                      options={chartOptions}
                      series={chartSeries}
                      type="area"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
};

TokenListTable.propTypes = {
  tokens: PropTypes.array.isRequired,
  tokensCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
