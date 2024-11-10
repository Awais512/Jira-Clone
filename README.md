# Jira Clone

A modern project management tool inspired by Jira, built with cutting-edge technologies. This application provides a robust platform for task management, team collaboration, and project tracking.

## 🚀 Tech Stack

- **Frontend Framework:** Next.js 14 (App Router)
- **API Framework:** Hono
- **Styling:** TailwindCSS
- **UI Components:** Shadcn UI
- **Type Safety:** TypeScript
- **Backend/Database:** Appwrite

## ✨ Features

- Drag-and-drop task management
- Real-time updates
- Custom board views
- Project and sprint management
- User authentication and authorization
- Rich text editor for task descriptions
- File attachments
- Activity tracking
- Search and filter capabilities
- Type-safe API endpoints with Hono
- Middleware support for authentication and validation
- Edge-ready API routes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Appwrite instance (local or cloud)

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/jira-clone.git
cd jira-clone
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```

Fill in your Appwrite credentials:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
NEXT_PUBLIC_APPWRITE_DATABASE_ID=
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 🔗 API Routes (Hono)

The project uses Hono for type-safe API routes. Here's an example of how the API is structured:

```typescript
// app/api/hono.ts
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

app.use('/*', async (c, next) => {
  // Common middleware (auth, logging, etc.)
  await next()
})

app.get('/projects', async (c) => {
  // Handle GET projects
})

app.post('/tasks', async (c) => {
  // Handle POST tasks
})

export const GET = handle(app)
export const POST = handle(app)
```


## 🔐 Authentication

This project uses Appwrite Authentication for user management. Supported methods include:
- Email/Password
- Google OAuth
- GitHub OAuth



## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Hono](https://hono.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Appwrite](https://appwrite.io)

## 📞 Support

For support, please create an issue in the repository or reach out to the maintainers.
