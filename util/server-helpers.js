export function handleErrorResponse(response, err) {
  response.status(400).json({
    status: "Error",
    message: err,
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
