
FROM node:18


WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install


COPY . .


COPY tsconfig.json tsconfig.app.json tsconfig.node.json ./


RUN npm run build


CMD ["npm", "run", "preview"]


EXPOSE 4173
