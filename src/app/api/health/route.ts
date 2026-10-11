export async function GET() {
  return Response.json({
    status: "ok",
    app: "RedTrace",
    message: "Backend API is running",
    timestamp: new Date().toISOString(),
  });
}
