FROM joseluisq/static-web-server:2-alpine
COPY . /pizza
RUN apk add --no-cache yarn;cd /pizza/src;yarn;yarn build;mkdir /app;cp -r /pizza/dist/* /app;
EXPOSE 80
CMD ["static-web-server", "--root", "/app", "--page-fallback", "/app/index.html"]
