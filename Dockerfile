# Usa la imagen oficial de Bun
FROM oven/bun:1

# Establece el directorio de trabajo
WORKDIR /app

# Copia el manifiesto
COPY package.json ./

# Instala las dependencias
RUN bun install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5173

# Comando para iniciar la aplicación
# Nota: este Dockerfile está pensado para desarrollo (Vite dev server)
CMD ["sh", "-c", "bun run dev -- --host 0.0.0.0 --port ${SERVER_PORT:-5173}"]
