exports.hello = async (event) => {
  console.log("aa");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Serverless BFFx!",
    }),
  };
};
