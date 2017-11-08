<template>
  <div id="app">
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-md no-gutters">
          <div class="col-8 text-left">
            <a href="https://www.froala.com">
              <h3 id="title">萝卜墩儿</h3>
            </a>
            <small id="slogan">萝卜蹲，萝卜蹲，萝卜蹲完黄瓜蹲</small>
          </div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end col-md-4" id="navbarNav4">
            <ul class="navbar-nav justify-content-center">
              <router-link class="nav-item" tag="li" to="/home" activeClass="active">
                <a class="nav-link">首页</a>
              </router-link>
              <router-link class="nav-item" tag="li" to="/blog" activeClass="active">
                <a class="nav-link">blog</a>
              </router-link>
              <router-link class="nav-item" tag="li" to="/resume" activeClass="active">
                <a class="nav-link">简历</a>
              </router-link>
              <router-link class="nav-item" tag="li" to="/effort" activeClass="active">
                <a class="nav-link">作品</a>
              </router-link>
              <router-link class="nav-item" tag="li" to="/photo" activeClass="active">
                <a class="nav-link">照片</a>
              </router-link>
              <router-link class="nav-item" tag="li" to="/poem" activeClass="active">
                <a class="nav-link">诗</a>
              </router-link>
              <router-link class="nav-item" tag="li" to="/about" activeClass="active">
                <a class="nav-link">关于</a>
              </router-link>
            </ul>
          </div>
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
