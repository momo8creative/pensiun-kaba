<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let nik = "";

  $: nikLength = 16 - (nik ? nik.toString().slice().length : 0);

  const handleCari = (e = null) => {
    dispatch("cari", nik);
  };
</script>

<section>
  <p>Masukkan NIK Pensiunan</p>
  <form on:submit|preventDefault={handleCari}>
    <input
      bind:value={nik}
      type="number"
      required
      placeholder="Masukkan NIK Peserta.."
    />
    <button type="submit" disabled={nikLength != 0}>Cari</button>
  </form>

  {#if nikLength == 0}
    <small>Pastikan NIK benar !</small>
  {:else}
    <small>Sisa {nikLength} karakter !</small>
  {/if}
</section>

<style>
  section {
    padding: 0.5rem 1rem;
    background-color: var(--bg-1);
  }

  form {
    display: flex;
  }

  input {
    flex: 1;
  }

  input::placeholder {
    opacity: 0.5;
  }
</style>
