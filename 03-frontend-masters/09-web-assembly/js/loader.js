class WasmLoader {
  constructor() {
    this._imports = {
      env: {
        abort() {
          throw new Error("Abort called from wasm file");
        },
      },
      index: {
        log(n) {
          console.log(n);
        },
      },
    };
  }

  async wasm(path, imports = this._imports) {
    console.log(`Fetching ${path}`);

    // WebAssembly - loader.
    if (!loader.instantiateStreaming) {
      return this.wasmFallback(path, imports);
    }

    const { instance } = await loader.instantiateStreaming(
      fetch(path),
      imports
    );

    return instance?.exports;
  }

  async wasmFallback(path, imports) {
    console.log(`Fallback fetching ${path}`);

    const response = await fetch(path);
    const bytes = await response?.arrayBuffer();
    const { instance } = loader.instantiateStreaming(bytes, imports);

    return instance?.exports;
  }
}
