# Remember to check ip!!
# docker-machine ip
# ip:<chosen_machine_port>
FROM node:8

# Directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose running port
EXPOSE 3000

# Run proj
CMD [ "npm", "start"]