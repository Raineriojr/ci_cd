# Teste de integração com github actions em github pages

Teste de integração contínua utilizando Github Actions para deploy em github pages.

## **Recursos utilizados**
- Aplicação React com vite
- github Actions
- github Pages

## **Etapas**

### **1. Criar aplicação React com vite** 
  * utilize o comando: `npm  create vite`

### **2. Configuração de repositório (secrets)** 
  - Criar repositório no github

  * Gerar token de aplicação no git
    *  Em sua conta, acesse o menu `Settings -> Developer Settings -> Personal Access Tokens -> Generate new Token`, dê um nome para seu token e adicione as permissões de leitura e escrita. Em seguida, copie seu token gerado, pois ele é exibido apenas uma vez.
  
  * Adicione o token gerado anteriormente nas configurações do seu repositório.
    * Para isso, acesse as configurações do seu repositório no menu: `Settings -> Secrets and variables -> Actions -> New Repository Secret`. Dê um nome a sua secret, cole o token e salve.

  **OBS:** Agora você pode usar o token em suas configurações no arquivo `main.yml` como uma variável. Abaixo é demonstrada a utilização em `secrets.TESTE_CI`, lembrando de alterar 'TESTE_CI' para o nome que você deu ao seu token.
  ```
  - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.TESTE_CI }}
          publish_dir: ./dist
  ```

### **Dicas** 
* Em caso de falha com **código 128**. Verifique as configurações no menu `Actions -> General`, vá até `Workflow permissions` e marque a gravação e leitura **`Read and write permissions`**.

* Caso a página de sua aplicação não carregue, fique apenas uma página em branco, verifique as configurações de build de sua aplicação. Adicionando a `base` com o nome do repositório. No meu caso: 
   ```
  export default defineConfig({
    plugins: [react()],
    build: {
      minify: true
    },
    base:"/ci_cd/"
  })
  ```
* Não utilizar branch master nas configurações de deploy, pois pode subscrever os arquivos do repositório, pelos arquivos gerados após a build.

Com essas configurações básicas é possível realizar o processo de deploy em outras plataformas, adicionando as keys e outras configurações da plataforma a ser utilizada, de acordo com a documentação de cada uma. No meu caso, deixei publicado na plataforma netlify: `https://cicd-my-test.netlify.app/`.

Com isso a cada push na branch master, o arquivo `main` é executado e caso não haja falha sua aplicação, ela será atualizada de forma automática no github pages. 
Podendo ser acessada em `https://USER.github.io/REPO/`. 

Você pode ver o arquivo de CI completo no diretório: `.github\workflows\main.yml`