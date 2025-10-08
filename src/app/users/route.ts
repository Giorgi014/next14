export const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export async function GET() {
  return Response.json(users);
}
export async function POST(request: Request,) {
  const user = await request.json();
  const newUser = {
    id: users.length + 1,
    name: users.name,
  };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "COntent-Type": "application/json",
    }["COntent-Type"],
    status: 201,
  });
}
