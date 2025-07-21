# 🌦️ Tempo atual - Aplicação de Previsão do Tempo

Uma aplicação web full-stack que exibe em tempo real a previsão do tempo para qualquer cidade do mundo.  
O projeto consome a API da **OpenWeatherMap** através de um back-end em **Java (Spring Boot)** e apresenta os dados em uma interface moderna e responsiva construída com **React** e **Tailwind CSS**.

Este projeto foi desenvolvido como um estudo prático para solidificar conceitos de desenvolvimento back-end, front-end e a integração entre eles por meio de uma API REST.

---

## 📸 Demonstração

<img width="1919" height="924" alt="image" src="https://github.com/user-attachments/assets/1f05ab45-f5cd-4f85-8d84-7e2fa8ddb28a" />


---

## ✨ Funcionalidades

- 🔎 **Busca Dinâmica**: Pesquise o clima de qualquer cidade do mundo pelo nome.
- 🌡️ **Dados Detalhados**: Exibe temperatura atual, mínima e máxima.
- 🌤️ **Ícones Dinâmicos**: Representam a condição climática atual (sol, chuva, nuvens etc.).
- 📝 **Informações Adicionais**: Descrição textual do clima e sensação térmica.
- 📱 **Interface Responsiva**: Experiência otimizada para celulares e desktops.
- 💬 **Feedback ao Usuário**: Mensagens de carregamento e tratamento amigável de erros.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Back-end (API)

![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3+-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-3+-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)

- Spring Web
- Spring WebFlux

### 🎨 Front-end (UI)

![React](https://img.shields.io/badge/React-18+-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

- Axios para requisições HTTP

---

## ⚙️ Pré-requisitos

Para executar este projeto localmente, instale:

- [Java JDK 17+](https://adoptium.net/)
- [Apache Maven 3.8+](https://maven.apache.org/)
- [Node.js v20+ (LTS)](https://nodejs.org/)
- Uma conta gratuita e chave de API da [OpenWeatherMap](https://openweathermap.org/api)

---

## 🔑 Configuração da Chave da API

1. Crie uma conta no OpenWeatherMap e gere sua chave em **My API Keys**.
2. Vá até a pasta: `backend/src/main/resources/`
3. Crie o arquivo `application.properties` (caso ainda não exista).
4. Insira a seguinte linha no arquivo:

```properties
openweathermap.api.key=SUA_CHAVE_API_AQUI
