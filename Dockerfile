FROM node:22

WORKDIR /app

COPY . /app

RUN npm ci
RUN npm install -g serve
RUN npm run build

EXPOSE 3000

CMD ["serve", "-l", "3000", "dist"]