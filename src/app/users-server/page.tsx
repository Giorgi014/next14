type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((users: User) => (
        <li
          key={users.id}
          className="p-4 bg-white shadow-md rounded-l-lg text-gray-700"
        >
          {users.name} {users.email}
        </li>
      ))}
    </ul>
  );
}
