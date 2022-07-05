import { writable } from "svelte/store";

const call = () => {
  const { subscribe, update, set } = writable();

  return {
    search: () => {},
  };
};
