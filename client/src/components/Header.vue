<template>
  <header class="p-3">
    <b-navbar collapseOnSelect expand="lg" toggleable="lg" bg="white">
      <b-container>
        <b-navbar-toggle target="navbar-toggle-collapse" float-xs-right bg="white" />
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="m-auto text-center">
            <ul>
              <li id="nav-logo">
                <router-link to="/" class="text-muted">
                  <img
                    src="@/assets/college-logo.png"
                    width="30"
                    class="d-inline-block align-top"
                    alt="logo"
                  />
                  Головна
                </router-link>
              </li>
              <li class="text-muted">
                Про коледж
                <ul>
                  <li>Розклад дзвінків</li>
                  <li>Розклад занять</li>
                </ul>
              </li>
              <li>
                <router-link class="text-muted" to="/news">
                  Новини
                </router-link>
              </li>
              <li class="text-muted">
                Абітурієнту
                <ul>
                  <li>
                    <router-link class="text-muted" to="#">
                      Розклад дзвінків
                    </router-link>
                  </li>
                  <li>
                    <router-link class="text-muted" to="#">
                      Розклад занять
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link class="text-muted" to="#">
                  Студенту
                </router-link>
                <ul class="mx-0">
                  <li>
                    <router-link class="text-muted" to="#">
                      Розклад дзвінків
                    </router-link>
                  </li>
                  <hr>
                  <li>
                    <router-link class="text-muted" to="#">
                      Розклад занять
                    </router-link>
                  </li>
                  <hr>
                  <li>
                    <router-link class="text-muted" to="#">
                      віаждвлаж івщалівд івждалівждалід дівлаівдлал  вдаоівлдаі вдаловалді вдаоівлд
                    </router-link>
                  </li>
                  
                </ul>
              </li>
            </ul>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
}
</script>

<style>
.header {
  align-self: center;
}
.navbar {
  font-weight: 600;
}

#nav-logo {
  margin-left: 0 !important;
}

.navbar ul {
  list-style: none;
  display: inherit;
  position: relative;
}

.navbar ul li {
  position: inherit;
  cursor: pointer;
  white-space: nowrap;
  margin-left: 3rem;
  margin-right: 3rem;
}

.navbar ul li ul {
  top: 55px;
  position: absolute;
  z-index: 1000;
  align-self: center;
  visibility: hidden;
  padding: 0;
  padding: 3px 15px;
  margin-left: 0 !important;
  background-color: #ffffff;
  border: 1px solid rgb(233, 233, 233);
  transition: top 0.3s;
  font-size: 14px;
  text-align: left;
}

.navbar ul li:hover > ul {
  visibility: visible;
  top: 30px;
}

.navbar ul li ul li {
  position: relative;
  z-index: 1000;
  margin: 0;
  width: 150px;
  white-space: normal;
  line-height: 1.75;
  padding: 6px 0;
}


.navbar-nav {
  font-weight: 600;
  line-height: 2em;
}

.navbar-nav a:hover {
  color: black !important;
  text-decoration: none;
}

hr {
  margin: 0;
}

@media (max-width: 992px) {
  #nav-logo{
    margin-top: 1.5rem;
    position: relative;
  }
  .navbar ul {
    text-align: left;
    padding: 0;
  }

  .navbar ul li {
    margin: 0;
    width: 100%;
    display: block;
    position: relative;
    margin-top: 1rem;
  }

  .navbar ul li ul {
    display: none;
  }

  .navbar ul li:hover > ul {
    visibility: visible;
    display: block;;
    top: 30px;
  }

  .navbar ul li ul li {
    position: relative;
    background-color: #f2f2f2;
    z-index: 1000;
    padding: 3px 15px;
  }
  .navbar ul li::after {
    content: "";
    position: absolute;
    margin-top: 0.5rem;
    width: 100%;
    height: 1px; 
    background: rgba(218, 218, 218, 0.527); 
    top: 100%;
    left: 0;
  }
}
</style>