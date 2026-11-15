# LiveReczz — Landing Page Oficial

Landing page institucional estática para o **LiveReczz** (`@livereczz_bot`), serviço de gravação de transmissões ao vivo do TikTok e Instagram operado exclusivamente via Telegram.

## Stack Tecnológica
- **React 18** + **Vite**
- **Tailwind CSS** (Dark Mode nativo)
- **Lucide React** (Ícones profissionais)
- **100% Estático** (Sem backend, sem banco de dados, sem autenticação, pronto para Netlify)

## 1. Como Executar Localmente
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado.

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## 2. Como Gerar o Build de Produção
```bash
npm run build
```
Os arquivos estáticos otimizados serão gerados na pasta `dist/`.

Para testar o build localmente:
```bash
npm run preview
```

## 3. Como Publicar na Netlify

### Opção A: Via Git (GitHub / GitLab)
1. Suba este projeto em um repositório Git.
2. No painel da **Netlify**, clique em **Add new site** → **Import an existing project**.
3. Selecione o repositório. A Netlify detectará automaticamente as configurações do arquivo `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Clique em **Deploy site**.

### Opção B: Deploy Manual (Drag & Drop)
1. Rode `npm run build` na sua máquina.
2. Acesse `https://app.netlify.com/drop`.
3. Arraste a pasta `dist` gerada para a área de upload.
