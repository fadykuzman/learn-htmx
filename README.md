# Learn htmx

## Installing htmx-lsp for Neovim on NixOS using Home Manager and devenv
Neovim and its packages, plugins and options are managed globally by Home Manger
Add the `pkgs.htmx-lsp` to your neovim `programs.neovim.extraPackages`

I use devenv for directory-based development environment.
Add rust and cargo from the language support. (Docs)[https://devenv.sh/supported-languages/rust/]
```nix
languages.rust = {
  enable = true;
  toolchain.enable = true;
};
```
Run the following command from the root of the directory
```shell
cargo install htmx-lsp
```

