"use strict";
exports.__esModule = true;
exports.activate = function (oni) {
    console.log("config activated");
    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", function () { return console.log("Control+Enter was pressed"); });
    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")
};
exports.deactivate = function (oni) {
    console.log("config deactivated");
};
exports.configuration = {
    //add custom config here, such as
    "ui.colorscheme": "nord",
    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    "oni.loadInitVim": true,
    //"editor.fontSize": "12px",
    //"editor.fontFamily": "Monaco",
    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",
    "editor.fontFamily": "Source Code Pro for Powerline",
    "editor.fontSize": "13px",
    "terminal.shellCommand": "zsh",
    "language.rust.languageServer.command": "rustup",
    "language.rust.languageServer.arguments": ["run", "nightly", "rls"],
    "language.rust.languageServer.rootFiles": ["Cargo.toml"]
};
