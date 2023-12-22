// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

/* Generate by ChatGPT (you.com) */
/*  ==== ==== ==== ==== ==== ====
use std::fs;
use std::io::{self, BufRead};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn select_file() {
    println!("請輸入目錄路徑：");
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let path = input.trim();

    // 列出目錄中的檔案
    let entries = fs::read_dir(path).unwrap();
    for entry in entries {
        if let Ok(entry) = entry {
            let file_name = entry.file_name();
            println!("{}", file_name.to_string_lossy());
        }
    }

    // 輸入檔案名稱
    println!("請輸入檔案名稱：");
    let mut input_2 = String::new();
    input_2.clear();
    io::stdin().read_line(&mut input_2).unwrap();
    let file_name = input_2.trim();

    // 處理選擇的檔案
    let file_path = format!("{}/{}", path, file_name);
    println!("選擇的檔案：{}", file_path);
    // 在這裡進行你要做的操作
}
    ==== ==== ==== ==== ==== ==== */

    // #[tauri::command]
// fn select_file() {

// }

fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![select_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


// fn main() {
//     let wa = 42;
//     let s1 = "word";

//     let mut s2: String = String::from("Hello ");
//     println!("s2: {s2}");
//     s2.push_str(s1);
//     println!("s2: {s2}");

//     let s3: &str = &s2[6..];
//     println!("s3: {s3}");

//     println!("{}", wa);
//     println!("hello world -v-");
// }
