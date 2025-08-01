# Guia de Deploy no GitHub Pages - Trekko Store

## 🚀 Visão Geral

Este guia detalha como hospedar o site Trekko Store no GitHub Pages, uma solução gratuita e eficiente para sites estáticos. O processo envolve o uso do Git para versionamento e o GitHub para hospedagem.

## 1. Pré-requisitos

-   **Conta no GitHub:** Você precisa ter uma conta ativa no GitHub.
-   **Git Instalado:** O Git deve estar instalado e configurado em sua máquina local.
-   **Arquivos de Build:** Eu já gerei os arquivos de build otimizados para produção na pasta `dist` do seu projeto. Eles já estão em uma branch `gh-pages` no repositório local.

## 2. Criar um Repositório no GitHub

1.  **Acesse o GitHub:** Faça login na sua conta GitHub.
2.  **Crie um Novo Repositório:** Clique no botão "New" (Novo) no canto superior esquerdo da página inicial ou acesse `github.com/new`.
3.  **Nome do Repositório:** Dê um nome ao seu repositório (ex: `trekko-store-website`).
4.  **Configurações:**
    -   Escolha "Public" (Público) para que o GitHub Pages funcione gratuitamente.
    -   **Não** inicialize o repositório com um README, .gitignore ou licença, pois você fará o push de um repositório local existente.
5.  **Crie o Repositório:** Clique em "Create repository" (Criar repositório).

## 3. Conectar o Repositório Local ao GitHub

Agora você precisa conectar o repositório Git que eu preparei para você ao seu novo repositório no GitHub.

1.  **Copie o Comando de Conexão:** Após criar o repositório no GitHub, você verá uma seção "...or push an existing repository from the command line". Copie a linha que começa com `git remote add origin ...`.

    Exemplo:
    ```bash
    git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    ```

2.  **Execute no Terminal Local:** Abra o terminal na pasta `/home/ubuntu/trekko-store` e execute o comando que você copiou.

    ```bash
    cd /home/ubuntu/trekko-store
    git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    ```
    *(Substitua `SEU_USUARIO` pelo seu nome de usuário GitHub e `SEU_REPOSITORIO` pelo nome do repositório que você criou).* 

## 4. Fazer o Push para o GitHub Pages

Eu já preparei os arquivos de build na branch `gh-pages` do seu repositório local. Agora, você só precisa fazer o push para o GitHub.

1.  **Faça o Push da Branch `gh-pages`:** No mesmo terminal, execute:

    ```bash
    git push -u origin gh-pages
    ```
    Você será solicitado a inserir seu nome de usuário e senha/Personal Access Token do GitHub.

## 5. Ativar o GitHub Pages

1.  **Acesse as Configurações do Repositório:** No seu repositório GitHub, clique em "Settings" (Configurações).
2.  **Navegue até "Pages":** No menu lateral esquerdo, clique em "Pages" (Páginas).
3.  **Selecione a Branch:**
    -   Em "Source" (Fonte), selecione a branch `gh-pages`.
    -   Certifique-se de que a pasta selecionada é `/ (root)`.
4.  **Salve:** Clique em "Save" (Salvar).

## 6. Acesse seu Site

Após alguns minutos (pode levar até 10 minutos para o deploy inicial), seu site estará acessível em um URL no formato:

`https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

Exemplo:
`https://manus.github.io/trekko-store-website/`

## 7. Configurar Domínio Personalizado (Opcional)

Se você quiser usar um domínio personalizado (ex: `www.trekko.com.br`):

1.  **No GitHub Pages:** Na seção "Pages" do seu repositório, em "Custom domain" (Domínio personalizado), insira seu domínio.
2.  **No seu Provedor de Domínio:** Crie um registro `CNAME` que aponte seu domínio personalizado para `SEU_USUARIO.github.io`.

## 🚀 Conclusão

Seguindo estes passos, seu site Trekko Store estará hospedado gratuitamente no GitHub Pages. Toda vez que você fizer um `git push` para a branch `gh-pages`, o GitHub Pages será atualizado automaticamente.

Se tiver qualquer dúvida durante o processo, o suporte do GitHub ou a documentação oficial do GitHub Pages podem auxiliar.

**Equipe Manus**

