export.handler = async => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode:200,
    body: `Hello ${subject}!`,
  }
}
