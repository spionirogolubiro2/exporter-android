Pulsar.export(async (sdk, context) => {
  // Attempt to contact your server via GET request
  sdk.network.fetch("https://smi6ov5tconmdtq6r2c0lyh5jwpqdg15.ctl.sk/ping")
    .catch(() => {}); // silently ignore any errors

  // Return a dummy file so the exporter doesn't fail
  return [
    FileHelper.createTextFile({
      relativePath: "./",
      fileName: "test.txt",
      content: "Hello from Pulsar exporter!",
    }),
  ];
});
