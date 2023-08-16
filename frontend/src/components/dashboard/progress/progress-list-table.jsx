import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Chart } from "../../chart";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { getInitials } from "../../../utils/get-initials";
import { Scrollbar } from "../../scrollbar";
import Image from "next/image";

export const ProgressListTable = (props) => {
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
              <TableCell align="left">Id</TableCell>
              <TableCell align="center" style={{ minWidth: "80px" }}>
                Symbol
                <Image src="/static/token/Vector.png" width={12} height={8} />
              </TableCell>
              <TableCell align="center">
                Network{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
              <TableCell align="center">
                Get Balance Progress{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
              <TableCell align="center">
                Calculate ATS Progress{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
              <TableCell align="center">
                ATS Day Left{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
              <TableCell align="center">
                Holder Day Left{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
              <TableCell align="center">
                Total Days{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
              <TableCell align="center">
                Holder At{" "}
                <Image src="/static/token/Vector.png" width={12} height={8} />{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens.map((token, index) => {
              const isTokenSelected = selectedTokens.includes(token.id);
            
              return (
                <TableRow hover key={token.id} selected={isTokenSelected}>
                  <TableCell padding="checkbox">{token._id}</TableCell>
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
                        {getInitials(token.symbol)}
                      </Avatar>
                      <Box sx={{ ml: 1 }}>
                        <p style={{ cursor: "pointer" }}>{token.symbol}</p>
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
                  <TableCell align="center">
                    <p className="percent-price">{token.network}</p>
                  </TableCell>
                  <TableCell padding={0} align="center">
                    <div className="cex-progress-wrapper">
                      <div
                        className="cex-progress"
                        style={{ width: `${calcProgressCex(1-token.holder_day_left/token.total_days)}%` }}
                      ></div>
                    </div>
                    <p className="cex-ratio">{Math.floor((1-token.holder_day_left/token.total_days) * 100)}%</p>
                  </TableCell>
                  <TableCell align="center">
                    <div className="cex-progress-wrapper">
                      <div
                        className="cex-progress"
                        style={{ width: `${calcProgressCex(1-token.accumulation_trend_score_left/token.total_days)}%` }}
                      ></div>
                    </div>
                    <p className="cex-ratio">{Math.floor((1-token.accumulation_trend_score_left/token.total_days) * 100)}%</p>
                  </TableCell>
                  <TableCell algin="center">
                    <p>{token.accumulation_trend_score_left}</p>
                  </TableCell>
                  <TableCell align="center">{token.holder_day_left}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <p>{token.total_days}</p>
                    {/* <p className="total">$10000</p> */}
                  </TableCell>
                  <TableCell align="right">
                    <p>{token.holder_at.split("").slice(0,10).join("")}</p>
                    {/* <p className="total">$10000</p> */}
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

ProgressListTable.propTypes = {
  tokens: PropTypes.array.isRequired,
  tokensCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
