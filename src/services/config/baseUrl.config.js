export let BASE_URL;
export let MEDIA_URL;

const PORT = 8000;

if (window.location.hostname === "localhost") {
  BASE_URL = `http://localhost:${PORT}/api/`;
  MEDIA_URL = `http://localhost:${PORT}/`;
} else {
  BASE_URL = `http://dev74.onlinetestingserver.com:${PORT}/api/v1`;
  MEDIA_URL = `http://dev74.onlinetestingserver.com:${PORT}/`;
}
