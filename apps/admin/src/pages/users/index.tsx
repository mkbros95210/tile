import { Card } from '@repo/ui/card'

// Placeholder data
const users = [
  { id: 1, email: 'user1@example.com', role: 'User' },
  { id: 2, email: 'user2@example.com', role: 'User' },
  { id: 3, email: 'admin@example.com', role: 'Admin' },
]

export default function UserManager() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">User Manager</h1>
      <Card>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
