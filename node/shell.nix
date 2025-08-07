{ packages ? import <nixpkgs> {} }:

packages.mkShell {
  buildInputs = with packages; [
    nodejs_22
    nodePackages.pnpm
  ];

  shellHook = ''
    echo "Node.js version: $(node --version)"
    echo "pnpm version: $(pnpm --version)" 
  '';
}
