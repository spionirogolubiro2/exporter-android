Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {

  // Create a static file and return it
  return [
    FileHelper.createTextFile({
      relativePath: "./",
      fileName: "colors.css",
      content: ":root {}",
    }),
  ]
})
