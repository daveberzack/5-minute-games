const version = 1;

self.addEventListener("install", function (event) {
  console.log("WORKER: install event in progress.");
});

self.addEventListener("fetch", function (event) {
  // Get the request
  let request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") return;

  // HTML files
  // Network-first
  if (request.headers.get("Accept").includes("text/html")) {
    // Handle HTML files...
    return;
  }

  // // Images
  // // Offline-first
  // if (request.headers.get("Accept").includes("image")) {
  //   // Handle images...
  // }
});
