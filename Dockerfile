# Use a imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Gere o build do projeto Next.js
RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]
