<script>
  export let data = {};
  $: copyActive = {
    peserta: "",
    pin: "",
  };

  const convertDate = (type = null, value = null) => {
    console.log(type, value);
    if (type == "date") {
      let d = new Date(value);
      let d1 = new Intl.DateTimeFormat("id").format(d);
      return d1;
    }
    return value;
    // return d;
  };

  const _isEmpty = (val = {}) => Object.keys(val).length < 1;

  const copyTo = (e = null, type = null) => {
    e.currentTarget.select();
    document.execCommand("copy");
    copyActive[type] = "active";
    setTimeout(() => {
      copyActive[type] = "";
    }, 3000);
  };

  let field = [
    { label: "Nama Peserta", type: "text", name: "nama_peserta" },
    { label: "Tanggal Lahir", type: "date", name: "tgl_lahir_peserta" },
    { label: "Alamat", type: "text", name: "alamat" },
  ];
</script>

{#if _isEmpty(data)}
  <div class="kosong">
    <p>Tidak ada data</p>
    <p>Silakan masukkan pencarian !</p>
  </div>
{:else}
  <section>
    <div class="header">
      <h2>Untuk Aplikasi Dapenbun</h2>
      <p>Nomor peserta dan pin untuk masuk aplikasi dapenbun</p>
    </div>

    <main class="body">
      <div class={`text-copy ${copyActive.peserta}`}>
        <label for="">No Peserta</label>
        <input
          type="text"
          value={data.no_peserta}
          readonly
          on:click={(e) => copyTo(e, "peserta")}
        />
      </div>
      <div class={`text-copy ${copyActive.pin}`}>
        <label for="">PIN</label>
        <input
          type="text"
          value={data.pin}
          readonly
          on:click={(e) => copyTo(e, "pin")}
        />
      </div>
    </main>

    <div class="header">
      <h2>Data Peserta</h2>
    </div>

    <div class="body data">
      {#each field as { label, name, type }, i}
        <article>
          <div>{label}</div>
          <h4>{convertDate(type, data[name])}</h4>
        </article>
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    padding: 1rem 0;
  }
  section .header {
    padding: 0.5rem 1rem;
    background-color: var(--bg-1);
  }

  section .body {
    padding: 0.5rem 1rem;
  }

  main.body > div {
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
  }

  main.body > div label {
    width: 40%;
  }
  main.body > div input {
    width: 60%;
  }

  .body.data {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .kosong {
    padding: 2rem 1rem;
  }

  .text-copy {
    position: relative;
  }
  .text-copy::before {
    display: none;
    content: "ter-Copy";
    position: absolute;
    z-index: 1;
    top: -50%;
    right: 0;
    width: max-content;
    background-color: black;
    color: white;
    padding: 0.2rem 1rem;
    border-radius: 4px;
  }

  .text-copy.active::before {
    display: block;
  }
</style>
