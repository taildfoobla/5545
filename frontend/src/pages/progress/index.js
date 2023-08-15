import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
  Breadcrumbs,
  Link
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { ProgressListTable } from "../../components/dashboard/progress/progress-list-table";
import { useMounted } from "../../hooks/use-mounted";
import { Search as SearchIcon } from "../../icons/search";
import { gtm } from "../../lib/gtm";
import { getTokens as getList} from "../../components/services/tokensApi";
import { useDispatch,useSelector } from "../../store";
import { tokenActions } from "../../slices/token";


const sortOptions = [
  {
    label: "Last update (newest)",
    value: "updatedAt|desc",
  },
  {
    label: "Last update (oldest)",
    value: "updatedAt|asc",
  },
  {
    label: "Total orders (highest)",
    value: "totalOrders|desc",
  },
  {
    label: "Total orders (lowest)",
    value: "totalOrders|asc",
  },
];

const applyFilters = (customers, filters) =>
  customers.filter((customer) => {
    if (filters.query) {
      let queryMatched = false;
      const properties = ["email", "name"];

      properties.forEach((property) => {
        if (
          customer[property].toLowerCase().includes(filters.query.toLowerCase())
        ) {
          queryMatched = true;
        }
      });

      if (!queryMatched) {
        return false;
      }
    }

    if (filters.hasAcceptedMarketing && !customer.hasAcceptedMarketing) {
      return false;
    }

    if (filters.isProspect && !customer.isProspect) {
      return false;
    }

    if (filters.isReturning && !customer.isReturning) {
      return false;
    }

    return true;
  });

const descendingComparator = (a, b, sortBy) => {
  // When compared to something undefined, always returns false.
  // This means that if a field does not exist from either element ('a' or 'b') the return will be 0.

  if (b[sortBy] < a[sortBy]) {
    return -1;
  }

  if (b[sortBy] > a[sortBy]) {
    return 1;
  }

  return 0;
};

const getComparator = (sortDir, sortBy) =>
  sortDir === "desc"
    ? (a, b) => descendingComparator(a, b, sortBy)
    : (a, b) => -descendingComparator(a, b, sortBy);

const applySort = (customers, sort) => {
  const [sortBy, sortDir] = sort.split("|");
  const comparator = getComparator(sortDir, sortBy);
  const stabilizedThis = customers.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const newOrder = comparator(a[0], b[0]);

    if (newOrder !== 0) {
      return newOrder;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
};

const applyPagination = (customers, page, rowsPerPage) =>
  customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

const CustomerList = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.token)||"";
  const router=useRouter();
  console.log(search)
  const {data:tokens}=useSWR(`/tokens?search=${search}`,getList);
  const isMounted = useMounted();
  const queryRef = useRef(null);
  // const [tokens, setTokens] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sort, setSort] = useState(sortOptions[0].value);
  const [filters, setFilters] = useState({
    query: "",
    hasAcceptedMarketing: undefined,
    isProspect: undefined,
    isReturning: undefined,
  });
console.log(tokens)
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  useEffect(()=>{
    const {search}=router.query
    dispatch(tokenActions.changeSearch(search))
  },[])

let delay=null;

  const handleChangeSearch=(e)=>{
    const value = e.target.value
    clearTimeout(delay)
    delay=setTimeout(()=>{
      router.push({
        pathname:"/progress",
        query:{search:value}
      })
      dispatch(tokenActions.changeSearch(value))
    },500)
   
  }

  const handleTabsChange = (event, value) => {
    const updatedFilters = {
      ...filters,
      hasAcceptedMarketing: undefined,
      isProspect: undefined,
      isReturning: undefined,
    };

    if (value !== "all") {
      updatedFilters[value] = true;
    }

    setFilters(updatedFilters);
    setCurrentTab(value);
  };

  const handleQueryChange = (event) => {
    event.preventDefault();
    setFilters((prevState) => ({
      ...prevState,
      query: queryRef.current?.value,
    }));
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  // Usually query is done on backend with indexing solutions
  const filteredTokens = tokens?applyFilters(tokens, filters):[];
  const sortedTokens = applySort(filteredTokens, sort);
  const paginatedTokens = applyPagination(sortedTokens, page, rowsPerPage);

  return (
    <>
      <Head>
        <title>Progress</title>
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
              <Grid item>
                <Typography variant="h4">Progress</Typography>
              </Grid>
            </Grid>
            {/* <Breadcrumbs maxItems={2} aria-label="breadcrumb">
              <Link  underline="hover" color="#7582EB" href="/">
                Home
              </Link>
              <Typography color="text.primary">Tokens</Typography>
            </Breadcrumbs> */}
          </Box>
          <Card>
            <Divider />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                m: -1.5,
                p: 3,
              }}
            >
              <Box
                component="form"
                onSubmit={handleQueryChange}
                sx={{
                  flexGrow: 1,
                  m: 1.5,
                }}
              >
                <TextField
                  defaultValue=""
                  fullWidth
                  inputProps={{ ref: queryRef }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" >
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search tokens"
                  onChange={(e)=>{
                    console.log("dasdasdas")
                    handleChangeSearch(e)}}
                />
              </Box>
            </Box>
            <ProgressListTable
              tokens={paginatedTokens}
              tokensCount={filteredTokens.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          </Card>
        </Container>
      </Box>
    </>
  );
};

CustomerList.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default CustomerList;
