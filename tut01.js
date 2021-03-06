const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation bar</title>
      <style>
          body{
              background-color: rgb(158, 238, 234);
          }
          .navbar {
              background-color: black;
              border-radius: 30px;
          }
  
          .navbar {
              overflow: auto;
          }
  
          .navbar li {
              float: left;
              list-style: none;
              margin: 13px 20px;
          }
  
          .navbar li a {
              padding-top: 5px;
              padding-bottom: 5px;
              text-decoration: none;
              /* padding-top: 5px; */
              color: white;
          }
  
          .navbar li a:hover {
              color: yellow;
          }
  
          .search {
              float: right;
              color: white;
              padding: 12px 75px;
          }
  
          .navbar input {
              border: 2px solid black;
              border-radius: 14px;
              padding: 3px 15px;
              width: 135px;
          }
          #btn{
              padding: 10px 15px;
              background-color: darkblue;
              color: white;
              border-radius: 8px;
              font-weight: bold;
              cursor: pointer;
          }
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact us</a></li>
                  <div class="search">
                      <input type="text" name="search" id="search" placeholder="Search this website">
                  </div>
              </ul>
          </nav>
      </header>
      <div class="cont">
          <h1>My Heading</h1>
          <p id="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis doloribus sapiente molestias,
              assumenda accusamus debitis! Autem at cumque sunt aperiam impedit officia distinctio, quae dicta tempora
              saepe porro rerum molestias ex deserunt, nulla, temporibus soluta qui. Blanditiis, illum eligendi. Animi,
              reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sint voluptatum maiores aliquam
              sunt obcaecati unde veritatis perspiciatis perferendis fuga quisquam deleniti enim inventore, necessitatibus
              corporis, voluptas neque, iusto culpa praesentium quod. Magni quia dolorem doloremque, qui esse rerum
              voluptatum atque odio officia in soluta enim architecto mollitia eos unde iure asperiores cupiditate quod
              dignissimos deserunt quas, iusto voluptatibus obcaecati? Hic vero id non culpa odit laboriosam rerum a ex
              aliquid. Hic aliquid harum dolor exercitationem cumque tempora, quasi consequuntur qui? Sed magnam quae
              voluptatem veniam, amet ipsa laboriosam, neque eligendi maiores ullam, eos voluptatum recusandae provident
              sunt? Necessitatibus minima cupiditate voluptatum, reprehenderit sed asperiores pariatur quia ab voluptas
              aliquid sequi delectus aperiam, quo, eum expedita esse vitae rerum placeat recusandae ullam hic a. Autem
              exercitationem deleniti earum excepturi esse repudiandae inventore ipsam rem sed. Cupiditate harum,
              repudiandae neque praesentium adipisci, provident cumque tempora maiores laudantium fuga sapiente itaque
              doloremque laboriosam at dignissimos sed, vitae rem placeat consequatur expedita totam debitis dolores
              libero? Laudantium, quas error! Dignissimos illo ratione cupiditate repudiandae deleniti, tempore quae
              facilis voluptate labore praesentium, pariatur laborum in quis facere consequatur exercitationem. Inventore
              sint voluptatem quos consequuntur cumque odio rerum illum, eligendi sit et? Nulla, qui voluptates.</p>
      </div>
      <button id="btn" onclick="hide()">
          Hide
      </button>
      <script>
          function hide() {
              let btn = document.getElementById('btn');
              let para = document.getElementById('para');
              if (para.style.display != 'none') {
                  para.style.display = 'none';
              }
              else {
                  para.style.display = 'block';
              }
              if(btn.textContent != 'Show'){
                  btn.textContent = 'Show';
              }
              else{
                  btn.textContent= 'Hide';
              }
          }
      </script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});