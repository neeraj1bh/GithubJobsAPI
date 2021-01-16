import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
  HAS_NEXT_PAGE: "has-next-page",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };

    case ACTIONS.HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };

    default:
      return state;
  }
}

const defaultURL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

export default function useFetchJobs(params, page) {
  //   console.log(params);

  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });
  //   const [loadedData, setLoadedData] = useState(false);
  //   console.log(loadedData);
  //   setLoadedData(true);
  //   let stateSaved = sessionStorage.getItem("stateGit");

  useEffect(() => {
    // if (stateSaved) {
    //   let state = sessionStorage.getItem("stateGit");
    //   if (state) {
    //     // console.log("I'm called");

    //     return JSON.parse(state);
    //   }
    // }
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(defaultURL, {
        cancelToken: cancelToken1.token,
        params: {
          markdown: true,
          page: page,
          full_time: localStorage.getItem("fulltime"),
          ...params,
        },
      })
      .then((res) =>
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
      )
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    const cancelToken2 = axios.CancelToken.source();

    axios
      .get(defaultURL, {
        cancelToken: cancelToken2.token,
        params: {
          markdown: true,
          page: page + 1,
          full_time: localStorage.getItem("fulltime"),
          ...params,
        },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.HAS_NEXT_PAGE,
          payload: { hasNextPage: res.data.length !== 0 },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]);
  //   sessionStorage.setItem("stateGit", JSON.stringify(state));
  return state;
}
