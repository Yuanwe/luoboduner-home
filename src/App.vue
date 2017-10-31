<template>
  <div id="app">
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-md no-gutters">
          <div class="col-3 text-left">
            <a href="https://www.froala.com">
              <h2 id="title">萝卜墩儿</h2>
            </a>
            <small id="slogan">萝卜蹲，萝卜蹲，萝卜蹲完黄瓜蹲</small>
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-center col-md-6" id="navbarNav4">
            <ul class="navbar-nav justify-content-center">
              <li class="nav-item active">
                <a class="nav-link" href="https://www.froala.com">首页 <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.froala.com">blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.froala.com">简历</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.froala.com">作品</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.froala.com">关于</a>
              </li>
            </ul>
          </div>

          <ul class="navbar-nav col-3 justify-content-end d-none d-md-flex">
            <li class="nav-item">
              <a class="nav-link" href="https://www.froala.com"><i class="fa fa-facebook"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.froala.com"><i class="fa fa-google"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view/>

    <footer class="fdb-block footer-large">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <p>© 2017 萝卜墩儿</p>
            <p>I like Sunny</p>
            <p>zhoubochina@163.com</p>
            <p><a href="http://www.miitbeian.gov.cn/">京ICP备17030853号</a></p>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col text-center">
            <p class="text-h3">
              <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a> &nbsp; &nbsp;
              <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a> &nbsp; &nbsp;
              <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a> &nbsp; &nbsp;
              <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a> &nbsp; &nbsp;
              <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #title {
    color: #333;
  }

  #slogan {
    color: #777;
  }
</style>
