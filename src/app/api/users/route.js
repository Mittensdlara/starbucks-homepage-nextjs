export async function GET(Request) {
  const users = [
    { id: 1, name: "Sara" },
    { id: 2, name: "Mina" },
  ];

  return new Response(JSON.stringify(users));
}
