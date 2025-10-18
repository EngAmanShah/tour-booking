// app/api/test-env/route.ts
export async function GET() {
  return new Response(
    JSON.stringify({
      env: process.env.JWT_SECRET,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
