<template>
  <div class="topPanel">
		<div class="container flex-s-c">
			<div class="menuBlock flex-c">
				<div class="menuButton" data-class="nav">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="menuBlock-logo">
					<a href="/"><img src="../assets/images/logo.png" alt="Logo"></a>
				</div>
				<nav class="nav">
					<ul class="menu flex">
						<li>
							<router-link to="/">
								Home <span>Main page</span>
							</router-link>
						</li>
						<li>
							<router-link to="/ranking">
								Top PLayers <span>Server player rating</span>
							</router-link>
						</li>
						<li>
							<router-link to="/download">Download <span>Files to start the game</span></router-link>
							
						</li>
						<li>
							<a href="#">
								Forum <span>Community of players</span>
							</a>
						</li>
						<li>
							<a href="#">
								Store <span>Inventory and weapons</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="langBlock">
				<div class="langBlock-active drop-button" data-tab="langBlock-content">
					<img src="../assets/images/ru-icon.png" alt="">
				</div>
				<div class="langBlock-content">
					<ul>
						<li><a href="#">Русский <img src="../assets/images/ru-icon.png" alt=""></a></li>
						<li><a href="#">English <img src="../assets/images/eng-icon.png" alt=""></a></li>
						<li><a href="#">Deutsche <img src="../assets/images/de-icon.png" alt=""></a></li>
						<li><a href="#">Polski <img src="../assets/images/pl-icon.png" alt=""></a></li>
					</ul>
				</div>
			</div>
		</div><!--container-->
	</div><!--topPanel-->
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
