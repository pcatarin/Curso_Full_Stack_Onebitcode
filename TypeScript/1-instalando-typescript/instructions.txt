# 8 - Como Instalar e Usar o Typescript

## Objetivos da Aula

- Mostrar como instalar o TypeScript por projeto (e talvez globalmente)
- Mostrar como executar o tsc
- Mostrar a compilação de arquivos TS em arquivos JS
- Mostrar o resultado JS padrão (ES3) criado pelo tsc

## Snippets

1. Caso não tenha iniciado um projeto Node.js crie a pasta, acesse-a e execute o comando:
    
    ```bash
    mkdir usando-typescript && cd usando-typescript
    npm init -y
    ```
    
2. Com o projeto iniciado, instale o Typescript como dependência de desenvolvimento:
    
    ```bash
    npm intall --save-dev typescript
    ```
    
3. Crie um arquivo index.ts:
    
    ```bash
    touch index.ts
    ```
    
4. Adicione o conteúdo do arquivo:
    
    ```tsx
    const setPilot = (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
      spaceship.pilot = newPilot;
    }
    
    const accelerate = (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
      spaceship.speed = targetSpeed;
    }
    
    const sendToMission = (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
      spaceship.inMission = true;
    }
    
    const spaceship = {
      name: '',
      pilot: '',
      speed: 0,
      inMission: false,
    }
    
    const pilot = "Han Solo";
    
    spaceship.name = "Millennium Falcon";
    
    setPilot(pilot, spaceship);
    accelerate(50, spaceship);
    sendToMission(spaceship);
    
    console.log(spaceship);
    ```
    
5. Utilize o comando abaixo para executar o compilador: (repare que ele converte as arrow functions para funções anônimas comuns)
    
    ```bash
    npx tsc index.ts
    ```
    
6. Atualize o arquivo package.json para que inclua o script abaixo:
    
    ```json
    {
      "name": "usando-typescript",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "build": "tsc index.ts"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "typescript": "^4.4.4"
      }
    }
    ```
    
7. Exclua o arquivo index.js e execute o compilador através do script:
    
    ```bash
    rm index.js
    npm run build
    ```