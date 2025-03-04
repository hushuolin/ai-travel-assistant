# **AI-Powered Travel Assistant – Project Architecture (React Focused)**  

## **📌 Overview**  
The **AI-Powered Travel Assistant** is a **React-based web application** that enables users to interact with an AI-powered chatbot for travel recommendations. The project is built using **Next.js (React framework)**, **Tailwind CSS for styling**, and **React Query for data fetching & caching**. The goal of this documentation is to **highlight core React concepts** that are demonstrated in this project, making it an ideal showcase for a **mid-level React Developer interview**.

---

## **🛠️ Tech Stack**
### **Frontend: React & Next.js**
- **Next.js (14.2.24)** → Optimized performance with **App Router**, **Server Components**, and **Client Components**.
- **TypeScript** → Ensures strong typing and better developer experience.
- **Tailwind CSS** → Provides utility-based styling for modern UI design.
- **Framer Motion** → Enables smooth animations for UI elements.
- **React Query (TanStack Query)** → Manages API requests, caching, and server state.
- **NextAuth.js** → Handles user authentication (Google OAuth).
- **Socket.IO (WebSockets)** → Enables real-time messaging in the chatbot.

### **Backend**
- **Next.js API Routes** → Manages AI chatbot API endpoints.
- **OpenAI API** → Provides AI-based responses in the chat system.
- **WebSockets (Node.js & Express)** → Enables real-time message streaming.

### **Cloud & DevOps**
- **Vercel Deployment** → Ensures fast, serverless deployment for Next.js.
- **GitHub Actions** → Automates CI/CD pipeline.

---

## **📂 Project Structure (React Focused)**
```
📦 travel-ai
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┗ 📜 chat.ts (Handles AI chat API)
 ┃ ┃ ┣ 📂 auth
 ┃ ┃ ┃ ┗ 📜 route.ts (Handles Google Authentication Login and Logout)
 ┃ ┃ ┣ 📂 chat
 ┃ ┃ ┃ ┗ 📜 page.tsx (ChatPage Component)
 ┃ ┃ ┣ 📂 search
 ┃ ┃ ┃ ┗ 📜 page.tsx (SearchPage Component)
 ┃ ┃ ┣ 📜 layout.tsx (Root Layout with Providers)
 ┃ ┃ ┣ 📜 page.tsx (Home Page)
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 ChatInput.tsx (Handles message input)
 ┃ ┃ ┣ 📜 ChatHistory.tsx (Displays message history)
 ┃ ┃ ┣ 📜 Navbar.tsx (Global Navigation Bar)
 ┃ ┣ 📂 providers
 ┃ ┃ ┣ 📜 SessionProvider.tsx (Auth Context Provider)
 ┃ ┃ ┣ 📜 QueryProvider.tsx (React Query Provider)
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 globals.css (Global styles with Tailwind)
 ┃ ┣ 📂 assets
 ┃ ┃ ┣ 📜 ai-avatar.jpg, travel-bg.jpg, chat-bg.jpg, search-bg.jpg
 ┣ 📜 next.config.mjs (Next.js configuration)
 ┣ 📜 tailwind.config.ts (Tailwind customization)
 ┣ 📜 tsconfig.json (TypeScript configuration)
 ┗ 📜 package.json (Project dependencies)
```

---

## **⚛️ React Concepts Showcased**
### **1️⃣ React Components Architecture**
- **Functional Components with Hooks** (`useState`, `useEffect`, `useSession`).
- **Client vs Server Components** → Next.js **App Router** handles optimized rendering.
- **Component Reusability** → Modular design (ChatInput, ChatHistory, Navbar).

### **2️⃣ State Management & Data Fetching**
- **`useState` for Local State Management**
  ```tsx
  const [messages, setMessages] = useState<string[]>([]);
  ```
- **React Query for Asynchronous Data Fetching**
  ```tsx
  const { data, isLoading, error } = useQuery("chatHistory", fetchChatHistory);
  ```
- **Server-Side Rendering (SSR) & Static Site Generation (SSG)**
  ```tsx
  export async function getServerSideProps() {
    const chatData = await fetchChatHistory();
    return { props: { chatData } };
  }
  ```

### **3️⃣ Authentication & Context API**
- **NextAuth.js for Google OAuth authentication**
  ```tsx
  const { data: session } = useSession();
  ```
- **Context Providers for State Sharing**
  ```tsx
  <QueryProvider>
    <AuthProvider>
      <Navbar />
      {children}
    </AuthProvider>
  </QueryProvider>
  ```

### **4️⃣ UI Enhancements & Animations**
- **Tailwind CSS for UI Styling**
  ```tsx
  <button className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600">
    Click Me
  </button>
  ```
- **Framer Motion for Smooth Transitions**
  ```tsx
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    Welcome!
  </motion.div>
  ```

### **5️⃣ Real-time Features with WebSockets**
- **WebSocket Client Connection**
  ```tsx
  const socket = io("http://localhost:3001");
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => socket.off("receiveMessage");
  }, []);
  ```
- **WebSocket Server in `server/websocket.ts`**
  ```ts
  import { Server } from "socket.io";
  const io = new Server(3001);
  io.on("connection", (socket) => {
    socket.on("sendMessage", (msg) => io.emit("receiveMessage", msg));
  });
  ```

## **🚀 Deployment**
- **Hosting:** Vercel (`vercel deploy`)  
- **Environment Variables (`.env.local`):**
  ```
  NEXTAUTH_SECRET=your_secret_key
  NEXTAUTH_URL=http://localhost:3000
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  ```



