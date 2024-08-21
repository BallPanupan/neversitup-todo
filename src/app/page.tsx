import styles from "./page.module.css";
import LoginForm from "./components/Login/Login";


async function fetchTodo(): Promise<any[]> {
  try {
    const response: any = await fetch(`https://candidate-assignment.neversitup.com/todo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1PNG9KQjZUeEphbG9IZGtZR0o0IiwiaWF0IjoxNzI0MjM1Mzc0LCJleHAiOjE3MjQzMjE3NzR9.Na_vM8j0UwjxtZDgb7iAYMnQoS5iUqbqOFvyutRCT4E`
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const tasks: any = await response.json();
    const result = tasks.data
    return result;
  } catch {
    return []
  }
}

export default async function Home() {
  try {
    const tasks = await fetchTodo();
    console.log('Number of tasks:', tasks.length);
    return (
      <main className={styles.main}>
        Hello Main Page
        <LoginForm />
      </main>
    );
  } catch {
    return (
      <main className={styles.main}>
        Catch Hello Main Page
        <LoginForm />
      </main>
    );
  }
}
