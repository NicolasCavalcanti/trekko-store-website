# Guia de Deploy no GitHub Pages - Windows

## 🚀 Visão Geral

Este guia detalha como hospedar o site Trekko Store no GitHub Pages usando um computador Windows. O processo envolve baixar o projeto, instalar o Git, e fazer o upload para o GitHub.

## 1. Pré-requisitos

### **Instalar o Git no Windows:**

1. **Baixe o Git:** Acesse https://git-scm.com/download/win
2. **Execute o Instalador:** Baixe e execute o arquivo `.exe`
3. **Configuração da Instalação:**
   - Aceite as configurações padrão
   - **Importante:** Certifique-se de marcar "Git Bash Here" durante a instalação
4. **Verifique a Instalação:** Abra o Prompt de Comando (CMD) e digite:
   ```cmd
   git --version
   ```

### **Criar Conta no GitHub:**
- Se ainda não tem, crie uma conta gratuita em https://github.com

## 2. Baixar e Preparar o Projeto

1. **Baixe o Arquivo:** Baixe o arquivo `trekko-store-essencial.zip` que eu forneci
2. **Extraia o Projeto:** 
   - Clique com o botão direito no arquivo `.zip`
   - Selecione "Extrair Tudo..."
   - Escolha uma pasta fácil de lembrar (ex: `C:\Users\SeuUsuario\Documents\trekko-store`)
3. **Abra o Prompt de Comando:**
   - Pressione `Windows + R`
   - Digite `cmd` e pressione Enter
4. **Navegue até a Pasta do Projeto:**
   ```cmd
   cd C:\Users\SeuUsuario\Documents\trekko-store
   ```
   *(Substitua pelo caminho onde você extraiu o projeto)*

## 3. Configurar o Git

No Prompt de Comando, configure sua identidade:

```cmd
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

## 4. Instalar Dependências e Gerar Build

1. **Instalar Node.js:** 
   - Baixe e instale o Node.js de https://nodejs.org
   - Escolha a versão LTS (recomendada)

2. **Instalar pnpm:**
   ```cmd
   npm install -g pnpm
   ```

3. **Instalar Dependências do Projeto:**
   ```cmd
   pnpm install
   ```

4. **Gerar Build de Produção:**
   ```cmd
   pnpm run build
   ```

## 5. Criar Repositório no GitHub

1. **Acesse o GitHub:** Faça login em https://github.com
2. **Crie um Novo Repositório:**
   - Clique no botão "New" (verde)
   - Nome: `trekko-store` (ou outro nome de sua escolha)
   - Marque como "Public" (público)
   - **NÃO** marque "Add a README file"
   - Clique em "Create repository"

## 6. Conectar e Fazer Upload

1. **Inicializar Git no Projeto:**
   ```cmd
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Conectar ao GitHub:**
   ```cmd
   git remote add origin https://github.com/SEU_USUARIO/trekko-store.git
   ```
   *(Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub)*

3. **Criar Branch para GitHub Pages:**
   ```cmd
   git checkout -b gh-pages
   git add dist
   git commit -m "Add build files for GitHub Pages"
   ```

4. **Fazer Upload:**
   ```cmd
   git push -u origin gh-pages
   ```
   
   **Nota:** Você será solicitado a fazer login no GitHub. Use suas credenciais normais.

## 7. Ativar GitHub Pages

1. **Acesse seu Repositório:** Vá para https://github.com/SEU_USUARIO/trekko-store
2. **Clique em "Settings"** (Configurações)
3. **No menu lateral, clique em "Pages"**
4. **Em "Source":**
   - Selecione "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. **Clique em "Save"**

## 8. Acessar seu Site

Após alguns minutos, seu site estará disponível em:

`https://SEU_USUARIO.github.io/trekko-store/`

## 9. Configurar Domínio Personalizado (Opcional)

Para usar `www.trekko.com.br`:

1. **No GitHub Pages (seção Pages):**
   - Em "Custom domain", digite: `www.trekko.com.br`
   - Clique em "Save"

2. **No seu Provedor de Domínio:**
   - Crie um registro CNAME:
     - Nome: `www`
     - Valor: `SEU_USUARIO.github.io`

## 🚀 Conclusão

Seguindo estes passos, seu site Trekko Store estará hospedado gratuitamente no GitHub Pages e acessível pelo seu domínio personalizado.

**Dicas Importantes:**
- Mantenha o repositório público para usar GitHub Pages gratuitamente
- Toda vez que fizer alterações, repita os passos 4 e 6 para atualizar o site
- O GitHub Pages pode levar até 10 minutos para refletir mudanças

**Equipe Manus**

