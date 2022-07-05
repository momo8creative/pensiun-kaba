<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Admin from "./pages/Admin.svelte";
  import Public from "./pages/Public.svelte";
</script>

<svelte:head>
  <style>
    :root {
      --bg-base: hsl(208, 50%, 97%);
      --bg-1: hsl(208deg 25% 90%);
      --color-base: hsl(208, 50%, 10%);
    }
  </style>
</svelte:head>

<Router>
  <!-- <nav>
    <Link to="/">Public</Link>
    <Link to="admin">Admin</Link>
  </nav> -->

  <main>
    <Route path="/" primary={false}>
      <Public />
    </Route>

    <Route path="admin" primary={false}>
      <Admin />
    </Route>

    <Route path="*" primary={false}>
      <Public />
    </Route>
  </main>
</Router>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }

  :global(*, *::before, *::after) {
    box-sizing: border-box;
  }

  :global(body) {
    font-family: sans-serif;
    background-color: var(--bg-base);
    color: var(--color-base);
  }

  :global(input) {
    font-family: inherit;
    color: inherit;
    font-size: 1rem;
    padding: 0.25rem 1rem;
  }

  :global(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 1rem;
  }
</style>
