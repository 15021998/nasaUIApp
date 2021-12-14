const GET_DEFAULT_ASTEROIDS_BROWSE_API = "/neo/rest/v1/neo/browse";
const GET_DATE_WISE_FEED_API = "/neo/rest/v1/feed";
// ?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY";
const GET_NEW_LOOKUP_API = "/neo/rest/v1/neo/";
const baseUrl = "https://api.nasa.gov";
const api_key = "SbNXdhHg64jPKX6plbsTLeUczR6zXwQ6Atok9VaJ";
const CUSTOM_ERROR_STATUS_CODE = -100;
const call = async (method, url, data, headers) => {
  const fullUrl = `${baseUrl}${url}`;
  const options = {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(headers ?? {}),
    },
  };
  console.log(fullUrl, data);

  if (data && Object.keys(data).length)
    options.body = JSON.stringify(data, null, 4);
  let response;
  try {
    response = await fetch(fullUrl, options);
    try {
      const json = await response.json();
      if (response.ok) {
        return json;
      } else if (response.status === 401) {
        return window.location.replace("/");
      }
      return Promise.reject(json);
    } catch (e) {
      const exceptionData = {
        statusCode: CUSTOM_ERROR_STATUS_CODE,
        statusMessage: `apiService: Failed to parse response json` + e.message,
      };
      return exceptionData;
    }
  } catch (e) {
    const exceptionData = {
      statusCode: CUSTOM_ERROR_STATUS_CODE,
      statusMessage: `apiService: Failed to make api call` + e.message,
    };
    return exceptionData;
  }
};

const getQueryString = (query) => {
  let queryString = "";
  Object.entries(query).map((item) => {
    queryString += `${item[0]}=${item[1]}&`;
  });
  queryString = queryString.slice(0, -1);
  return queryString;
};

export const getWithParams = (url, params, payload, headers) => {
  const query = getQueryString(params);
  console.log(url, query);
  return call("GET", `${url}?${query}`, payload, headers);
};

export const getAsteroids = (page, size) => {
  return getWithParams(GET_DEFAULT_ASTEROIDS_BROWSE_API, {
    api_key,
    page,
    size,
  });
};

export const getAsteroidById = (id) => {
  const url = GET_NEW_LOOKUP_API + id;
  return getWithParams(url, {
    api_key,
  });
};

export const getDateWise = (start_date, end_date) => {
  return getWithParams(GET_DATE_WISE_FEED_API, {
    api_key,
    start_date,
    end_date,
  });
};
