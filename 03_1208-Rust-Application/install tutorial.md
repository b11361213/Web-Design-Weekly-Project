# install tutorial

```
    File tree
 ---- = ---- = ---- = ---- = ----
    rust_application
      + tauri-rust-app
        + src
          + assets
          - index.html
          - main.js
          - styles.css
        + src-tauri
          + src
            - main.rs
```

1. Node.js  
    [Node.js Downlaod](https://nodejs.org/en/download)  
2. Rust (Visual Studio C++ Build tools required)  
    [Rust Download](https://www.rust-lang.org/zh-TW/tools/install)  
3. Tauri  
    ```bat
    mkdir rust_application
    cd rust_application
    cargo install create-tauri-app --locked
    ```

    ```bat
    cargo create-tauri-app
    ```

    ```bat
    cd tauri-rust-app
    npm install
    npm run tauri dev
    ```

- suggest extension  
[rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
- ref  
[03 rust 跑起來!，建立第一支 tauri 程式 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10319765)  