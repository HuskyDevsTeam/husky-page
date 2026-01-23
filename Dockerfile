# Usa la imagen oficial de Node 20
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación (necesario para ejecutar `node build` en producción)
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5173
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then node build; else npm run dev; fi"]
