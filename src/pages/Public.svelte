<script>
  import { fetchData } from "../lib/FetchData";
  import DataPeserta from "../lib/public/DataPeserta.svelte";
  import Cari from "../lib/public/Cari.svelte";
  import Gretting from "../lib/public/Gretting.svelte";

  let searching;
  let valueSearch;

  const handleCari = (e = null) => {
    valueSearch = e.detail;
    searching = fetchData("search", { nik: e.detail.toString() });
  };
</script>

<Gretting />

<Cari on:cari={handleCari} />

{#await searching}
  <div>loading...</div>
{:then data}
  <DataPeserta {data} />
{:catch error}
  <section class="catch-error">
    <div>Pencarian : {valueSearch}</div>
    <div>{error.message}</div>
  </section>
{/await}
