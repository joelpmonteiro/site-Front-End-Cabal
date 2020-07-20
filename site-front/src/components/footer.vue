<template>
  <footer>
		<div class="container">
			<div class="buttonTop"></div>
			<div class="socBlock flex-s-c">
				<div class="socIcons flex-c-c">
					Follow us: <a href="" class="tw"></a> <a href="" class="fb"></a> <a href="" class="vk"></a>
				</div>
				<div class="voteBlock flex-c-c">
					Vote us: <a href=""><img src="../assets/images/mmotop.png" alt=""></a>
				</div>
			</div><!--socBlock-->
			<div class="footerInfoBlock">
				<div class="copyBlock">
					<h3>© 2019 rizeoftheendor.com</h3>
					<p>This is only a test server for Lineage 2. All rights reserved by Ncsoft.</p>
					<a href="">Terms of use</a>
				</div>
				<div class="dkLogo">
					<a href="https://dkarts.studio" target="_blank"><img src="../assets/images/dkarts.png" alt=""></a>
					<p>Design and styling of the site by <a href="https://dkarts.studio" target="_blank">DKarts.Studio</a> studio</p>
				</div>
				<div class="footerMenuBlock flex">
					<div class="footerMenu">
						<h3>Main</h3>
						<ul>
							<li><router-link to="/download">Download</router-link></li>
							<li><a href="">News</a></li>
							<li><a href="">About server</a></li>
						</ul>
					</div>
					<div class="footerMenu">
						<h3>Community</h3>
						<ul>
							<li><router-link to="/register">Registration</router-link></li>
							<li><a href="">Forum</a></li>
							<li><router-link to="/ranking">Top players</router-link></li>
						</ul>
					</div>
					<div class="footerMenu">
						<h3>Help</h3>
						<ul>
							<li><a href="">Online support</a></li>
							<li><a href="">Contacts</a></li>
						</ul>
					</div>
				</div><!--footerMenuBlock-->
			</div><!--footerInfoBlock-->
			<div class="logosBlock flex-s-c">
				<img src="../assets/images/lineage-logo.png" alt="">
				<img src="../assets/images/g2a-logo.png" alt="">
				<img src="../assets/images/ncsoft-logo.png" alt="">
			</div>
		</div><!--container-->
	</footer><!--footer-->
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style>

</style>