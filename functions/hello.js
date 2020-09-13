export.handler = async => {
  const subject = Event.queryStringParameters.name || 'World'
  return {
    statusCode:200,
    body: `Hello ${subject}!`,
  }
}
