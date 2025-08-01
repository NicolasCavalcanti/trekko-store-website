# Guia de Deploy Permanente - Trekko Store

## 🚀 Visão Geral

Este guia detalha o processo para fazer o deploy permanente do site Trekko Store, garantindo que ele fique acessível publicamente com alta performance e segurança. O processo é dividido em três etapas principais:

1.  **Geração dos Arquivos de Build**
2.  **Upload para o HostGator**
3.  **Configuração do Domínio no HostGator**

## 1. Geração dos Arquivos de Build

O site Trekko Store é um aplicativo React/Vite. Antes de fazer o upload, você precisa gerar a versão otimizada para produção. Eu já fiz isso para você, e os arquivos estão na pasta `dist` (que você recebeu compactada como `dist.zip`).

**Conteúdo da pasta `dist`:**

-   `index.html`: O arquivo principal do seu site.
-   `assets/`: Uma pasta contendo todos os arquivos CSS, JavaScript e imagens otimizados.

## 2. Upload para o HostGator

Para fazer o upload dos arquivos para o seu plano de hospedagem HostGator, você pode usar o cPanel (Gerenciador de Arquivos) ou um cliente FTP (como FileZilla).

### **Opção 1: Usando o Gerenciador de Arquivos do cPanel (Recomendado para iniciantes)**

1.  **Acesse seu cPanel:** Faça login na sua conta HostGator e clique no ícone "cPanel".
2.  **Abra o Gerenciador de Arquivos:** Na seção "Arquivos", clique em "Gerenciador de Arquivos".
3.  **Navegue até a Pasta Pública:**
    -   Se o seu domínio `www.trekko.com.br` for o domínio principal da sua hospedagem, navegue até a pasta `public_html`.
    -   Se for um domínio adicional ou subdomínio, navegue até a pasta correspondente ao seu domínio (ex: `public_html/trekko.com.br`).
4.  **Faça o Upload do `dist.zip`:**
    -   Dentro da pasta pública, clique no botão "Carregar" (Upload) no menu superior.
    -   Selecione o arquivo `dist.zip` que você recebeu.
5.  **Extraia os Arquivos:**
    -   Após o upload, clique com o botão direito do mouse sobre o arquivo `dist.zip` e selecione "Extract" (Extrair).
    -   Certifique-se de extrair os arquivos diretamente na pasta pública (ex: `public_html/` ou `public_html/trekko.com.br/`).
    -   **Importante:** Se houver arquivos `index.html` ou outros arquivos padrão na pasta, você pode precisar substituí-los ou movê-los para uma subpasta antes de extrair os novos arquivos.
6.  **Verifique os Arquivos:** Após a extração, certifique-se de que todos os arquivos da pasta `dist` (especialmente o `index.html` e a pasta `assets`) estão diretamente na pasta pública do seu domínio.

### **Opção 2: Usando um Cliente FTP (FileZilla)**

1.  **Obtenha suas Credenciais FTP:** No seu cPanel HostGator, procure pela seção "Arquivos" e clique em "Contas FTP" para obter seu Host, Nome de Usuário e Senha FTP.
2.  **Conecte-se via FileZilla:**
    -   Abra o FileZilla e insira suas credenciais FTP.
    -   No painel "Site Remoto", navegue até a pasta `public_html` (ou a pasta do seu domínio adicional).
3.  **Faça o Upload da Pasta `dist`:**
    -   No painel "Site Local", navegue até a pasta `dist` do seu projeto Trekko Store.
    -   Arraste e solte todo o conteúdo da pasta `dist` (não a pasta `dist` em si, mas os arquivos e subpastas dentro dela) para a pasta `public_html` (ou a pasta do seu domínio) no "Site Remoto".
    -   Confirme a substituição de quaisquer arquivos existentes.

## 3. Configuração do Domínio no HostGator

Se o seu domínio `www.trekko.com.br` já estiver apontando para o HostGator (ou seja, os Nameservers do seu domínio já estão configurados para os da HostGator), você não precisará fazer nada aqui. O site já deve estar funcionando após o upload.

**Se o domínio ainda não estiver apontando para o HostGator:**

1.  **Acesse o Painel de Controle do seu Registrador de Domínio:** (Ex: Registro.br, GoDaddy, Namecheap, etc.)
2.  **Localize a Seção de DNS ou Nameservers:**
3.  **Atualize os Nameservers:** Altere os Nameservers para os da HostGator. Eles geralmente são algo como:
    -   `ns1.hostgator.com.br`
    -   `ns2.hostgator.com.br`
    *(Verifique os Nameservers exatos no seu painel HostGator ou no e-mail de boas-vindas da sua conta).* 

**Importante:** A propagação do DNS pode levar de 24 a 48 horas para ser concluída globalmente. Durante esse período, seu site pode não estar acessível para todos.

## 4. Verificação e Testes

Após o upload e a propagação do DNS (se aplicável), acesse `www.trekko.com.br` no seu navegador e verifique se:

-   Todas as páginas carregam corretamente.
-   As imagens e outros assets são exibidos.
-   As funcionalidades (carrinho, chatbot, etc.) estão operando como esperado.
-   O site está responsivo em diferentes dispositivos.

## 🚀 Conclusão

Seguindo estes passos, seu site Trekko Store estará publicado e acessível através do seu domínio próprio no HostGator. Se encontrar qualquer dificuldade, o suporte da HostGator pode auxiliar com questões específicas da plataforma deles.

**Equipe Manus**

