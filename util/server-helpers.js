export function handleErrorResponse(response, message) {
  response.status(400).json({
    status: "Error",
    message,
  });
  return;
}

export function handleSuccessResponse(response, message, responseFields) {
  response.status(200).json({
    status: "Success",
    message,
    ...responseFields,
  });
  return;
}
