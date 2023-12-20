<div align="center">
<img 
  src="https://github.com/jefersoneiji/graphql-dataloaders-template/assets/44307139/b7dd2a91-4392-4e2f-ba04-a1583c48b7d9"
  alt="graphql image"
  height="150"
  width="150"
/>
</div>

<h1 align="center">
  Graphql Dataloaders Template
</h1>

<p align="center">
This template is meant to be used in back-end development. 
</p>

## Installation

1. Clone this repository

```cmd
https://github.com/jefersoneiji/graphql-typescript-template.git
```

2. Install dependencies

```cmd
yarn install
```

3. To run this project execute

```cmd
yarn start
```

## Accessing GraphiQL

Use this address

```
http://localhost:4000/graphql
```

### Docker

1. To build the image type

```cmd
docker build -t graphql-dataloaders-template .
```

2. Create and run containers from image

```cmd
docker run -dp 127.0.0.1:4000:4000 graphql-dataloaders-template
```

3. Open container in editor
   For vscode, you may use the dev containers extension

```cmd
https://code.visualstudio.com/docs/devcontainers/containers
```

## Known issues

Q: After the container is opened, git may show some files as modified although nothing was changed.

A: In this case, just discard all "changes" and you're good to go.
