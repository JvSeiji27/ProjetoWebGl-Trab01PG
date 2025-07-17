ProjetoWebGl-Trab01PG
Sistema Solar Interativo com Three.js
Uma demonstração interativa de um sistema solar simplificado, construída com a biblioteca Three.js para renderização 3D em tempo real com WebGL.

📜 Sobre o Projeto
Este projeto é uma aplicação web que renderiza uma cena 3D de um sistema solar estilizado. Foi desenvolvido como um exercício para explorar os fundamentos do WebGL através da poderosa biblioteca Three.js.
A cena inclui um sol animado com shaders customizados, planetas com texturas e órbitas, um fundo de estrelas imersivo e múltiplas câmeras interativas que permitem ao usuário explorar a cena de diferentes perspectivas.

✨ Features
Cena 3D Completa: Renderização de uma cena espacial com fundo estrelado imersivo.
Múltiplos Objetos: Inclui 4 objetos principais (Sol, Terra, Lua, Marte), cada um com tamanho e posição únicos.
Texturização: Aplicação de textura de alta resolução no planeta Terra para um visual mais realista.
Shader Customizado: O Sol utiliza um shader GLSL próprio para criar um efeito de superfície animada e vibrante, sem depender de texturas.
Animação e Movimento: Todos os planetas e a lua orbitam seus corpos celestes pais em velocidades diferentes, criando uma cena dinâmica.
Múltiplas Câmeras: O usuário pode alternar entre uma câmera de visão geral e uma câmera que segue o planeta Terra.
Interatividade: A troca de câmeras é feita de forma simples através de um comando de teclado.
Design Responsivo: A cena se adapta automaticamente ao tamanho da janela do navegador.

🚀 Começando
Para executar este projeto em sua máquina local, siga os passos abaixo.

Pré-requisitos
Você precisa apenas de um navegador web moderno com suporte a WebGL (Chrome, Firefox, Edge, Safari).

Instalação
Clone o repositório:
git clone git@github.com:JvSeiji27/ProjetoWebGl-Trab01PG.git

Navegue até o diretório do projeto:
cd seu-repositorio (criado)

Inicie um servidor local:
Devido às políticas de segurança dos navegadores (CORS), carregar texturas diretamente do sistema de arquivos (file:///...) não funciona. Você precisa servir os arquivos a partir de um servidor local. No HTML mesmo (Go Live!)

Opção A: Usando a extensão "Live Server" no VS Code
Instale a extensão Live Server.
Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

Opção B: Usando Python (se você tiver Python instalado)
Abra o terminal no diretório do projeto e execute:

# Para Python 3
python -m http.server

# Para Python 2
python -m SimpleHTTPServer

Acesse a aplicação:
Abra seu navegador e acesse o endereço fornecido pelo servidor (geralmente http://localhost:8000 ou http://127.0.0.1:5500 para o Live Server).

🎮 Controles
Pressione a tecla C: Alterna entre a câmera de visão geral do sistema e a câmera que segue o planeta Terra.

📂 Estrutura do Projeto
Generated code
/
├── 📁 textures/       # Contém as imagens de textura usadas nos objetos
│   ├── 🖼️ 2k_earth_daymap.jpg
│   └── 🖼️ 8k_stars_milky_way.jpg
├── 📄 .gitignore     # (Opcional) Para ignorar arquivos como node_modules
├── 📄 index.html      # Estrutura principal da página e importação dos scripts
├── 📄 main.js        # Lógica da cena, objetos e animação com Three.js
└── 📄 README.md       # Este arquivo
Use code with caution.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura da página web.
CSS3: Estilização mínima para a sobreposição de informações.
JavaScript (ES6 Modules): Linguagem principal para a lógica da aplicação.
Three.js: Biblioteca 3D para simplificar o uso de WebGL.

👥 Equipe e Contribuições
Este projeto foi desenvolvido pela seguinte equipe:
Pessoa 1: João Vitor Seiji Sato Calvaro - Arquiteto da Cena: Responsável pela configuração inicial, renderizador, iluminação e fundo estrelado.
Pessoa 2: Gustavo Andreas - Especialista em Shaders: Implementou o Sol com seu shader GLSL customizado e animação.
Pessoa 3: Bruna Scarpelli - Construtor de Mundos: Adicionou o sistema Terra-Lua, aplicando texturas e implementando a hierarquia e movimento orbital.
Pessoa 4: Nicolas Benitiz - Finalizador de Features: Adicionou o planeta Marte e implementou a funcionalidade de múltiplas câmeras interativas.

📄 Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

🙏 Agradecimentos
À comunidade Three.js por sua excelente documentação e exemplos.
Aos criadores das texturas de uso livre que tornaram esta cena mais rica.
