# DynaPost App

Este é um aplicativo móvel desenvolvido com [Expo](https://expo.dev) e [React Native](https://reactnative.dev). O DynaPost App é uma plataforma para professores e alunos interagirem através de postagens e turmas.

## Estrutura do Projeto 📱

A estrutura do projeto é a seguinte:

- **Autenticação**: Login e registro de usuários.
- **Navegação**: Navegação por pilha e abas utilizando `@react-navigation/stack` e `@react-navigation/bottom-tabs`.
- **Postagens**: Professores podem criar, editar e deletar postagens.
- **Turmas**: Gerenciamento de turmas para professores e alunos.

## Instalação 🧑‍💻

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/dynapost-app.git

2. Navegue até o diretório do projeto:

   ```bash
   cd dynapost-app
   ``` 

3. Instale as dependências:

   ```bash
   npm install
   ```

### Executando o Projeto 🚀

Para iniciar o aplicativo, execute:

```bash
npx expo start
```

No output, você encontrará opções para abrir o app em um:

- build de desenvolvimento
- emulador Android
- simulador iOS
- Expo Go

### Estrutura de Pastas
- api: Configurações e chamadas para a API backend.
- app: Contém a navegação e as telas principais do aplicativo.
- navigation: Configurações de navegação.
- screens: Telas do aplicativo.
- components: Componentes reutilizáveis.
- contexts: Contextos do React Native para gerenciamento de estado.
- services: Serviços auxiliares, como autenticação.
- styles: Estilos globais e temas.