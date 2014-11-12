var picList = [
{
	width: 300,
	height: 414,
	content: "pics/1.jpg",
},
{
	width: 300,
	height: 414,
	content: "pics/2.jpg",
},
{
 	width: 300,
	height: 414,
 	content: "pics/3.jpg",
},
{
	width: 300,
	height: 414,
	content:"pics/5.jpg"
},
{
	width: 300,
	height: 414,
	content:"pics/6.jpg"
},
{
	width: 300,
	height: 414,
	content:"pics/7.jpg"
},
{
	width: 300,
	height: 414,
	content:"pics/8.jpg"
},
{
	width: 300,
	height: 414,
	content:"pics/9.jpg"
}
];

var domList = [
{
	'height' : '100%',
	'width' : '100%',
	'content' : '<div><h1>Home</h1><h2>This is home page</h2><p>home is pretty awsome</p><div>'
},{
	'height' : '100%',
	'width' : '100%',
	'content' : '<div><h1>Page1</h1><h2>This is page1</h2><p>page1 is pretty awsome</p><div>'
},{
	'height' : '100%',
	'width' : '100%',
	'content' : '<div><h1>Page2</h1><h2>This is Page2</h2><p>Page2 is pretty awsome</p><div>'
},{
	'height' : '100%',
	'width' : '100%',
	'content' : '<div><h1>Page3</h1><h2>This is page3</h2><p>page3 is pretty awsome</p><div>'
}
];

// adjust image size based on window screen width
var outer = document.getElementById('iSlider-outer');
var show = document.getElementById('iSlider-show');
var canvas = document.getElementById('iSlider-canvas');
var imgH = 414;
var imgW = 300;
var winH = window.innerHeight;
var winW = window.innerWidth;
var imgRatio = imgH / imgW;
var screenRatio = false;
var Agent = window.navigator.userAgent || window.navigator.appVersion;
var menuList = document.getElementById('option-menu');
var optionMenuToggle = 0;
var optionSubMenu = document.getElementById('iSlider-option').children[0].children;


menuList.addEventListener('click', function() {
	if (optionMenuToggle === 0) {
		if (optionSubMenu[3].className === 'on') {
			canvas.style.marginTop = '-270px';
		}
		else {
			canvas.style.marginLeft = '340px';
		}
		optionMenuToggle = 1;
	}
	else {
		if (optionSubMenu[3].className === 'on') {
			canvas.style.marginTop = '2px';
		}
		else {
			canvas.style.marginLeft = '113px';
		}
		optionMenuToggle = 0;
	}
}, false);

//initialization
var islider = new iSlider({
    data: picList,
    dom: document.getElementById("iSlider-show"),
    duration: 2000,
   	onslidechange: function(idx){
   		var target = document.getElementById('iSlider-nav').children[1].innerText = 'Index: ' + idx;
   		target.innerText = idx;
   	}
});

//adapt image to screen
function adaptImageToScreen() {

	if (Agent.match(/(Android)\s+([\d.]+)/)) {
		setTimeout(function() {
			winH = window.innerHeight;
			winW = window.innerWidth;
			outer.style.height = winH + 'px';
			show.style.height = winH + 'px';
			outer.style.width = ((winH / imgH) * imgW) + 'px';
			show.style.width = ((winH / imgH) * imgW) + 'px';
			
			var marginLeft = (winW - show.clientWidth) / 2;
			outer.style.marginLeft = marginLeft + 'px';

			islider.reset();
		}, 200);
	}
	else {
		winH = window.innerHeight;
		winW = window.innerWidth;
		outer.style.height = winH + 'px';
		show.style.height = winH + 'px';
		outer.style.width = ((winH / imgH) * imgW) + 'px';
		show.style.width = ((winH / imgH) * imgW) + 'px';
		
		var marginLeft = (winW - show.clientWidth) / 2;
		outer.style.marginLeft = marginLeft + 'px';

		islider.reset();
	}
}

//adjust image at first time
if (window.innerWidth <= 1024) {
	adaptImageToScreen();
}

//adjust image when rotate the screen
window.addEventListener('orientationchange', function(event) {
	adaptImageToScreen();
}, false);

(function(){

	//menu setting
	var menu = document.getElementById('iSlider-menu');

	optionSubMenu[0].onclick = function(event){
		var target = event.target;
		if (target.className == 'on') {
			target.className = '';
			target.innerText = 'isLooping: false';
		} else {
			target.className = 'on';	
			target.innerText = 'isLooping: true';
		}

		islider._opts.isLooping = !islider._opts.isLooping 
		islider.reset();
	};

	optionSubMenu[1].onclick = function(){
		var target = event.target;
		if (target.className == 'on') {
			target.className = '';
			target.innerText = 'isVertical: false';
		} else {
			target.className = 'on';	
			target.innerText = 'isVertical: true';
		}

		islider._opts.isVertical = !islider._opts.isVertical;
		islider.reset();
	};

	optionSubMenu[2].onclick = function(){
		var target = event.target;
		if (target.className == 'on') {
			target.className = '';
			target.innerText = 'isAutoplay: false';
		} else {
			target.className = 'on';	
			target.innerText = 'isAutoplay: true';
		}

		islider._opts.isAutoplay = !islider._opts.isAutoplay;
		islider.reset();
	};

	optionSubMenu[3].onclick = function(){
		var target = event.target;
		var outer = document.getElementById('iSlider-outer');
		var content = document.getElementById('iSlider-content');
		var canvas = document.getElementById('iSlider-canvas');
		var show = document.getElementById('iSlider-show');
		var nav = document.getElementById('iSlider-nav');
		var hiddenDiv = document.getElementById('iSlider-hidden');
		var optionSubMenuWrap = document.getElementById('iSlider-option');

		if (target.className === 'on') {
			show.style.width = '';
			show.style.height = '';
			show.style.top = '';
	    	show.style.left = '';
			target.className = '';
			outer.className = 'iSlider-outer-pc';
			show.className = '';
			nav.className = '';
			optionSubMenuWrap.children[0].className = '';
			optionSubMenuWrap.children[0].style.marginTop = '';
			target.innerText = 'changeOrientation: 0';
			hiddenDiv.style.height= '100%';
			hiddenDiv.style.marginTop = '';
			optionSubMenuWrap.style.marginTop = '72px';
			canvas.style.marginTop = '72px';
			canvas.style.marginLeft = '';
			optionMenuToggle = 0;
			setTimeout(function(){
				islider.reset();
			}, 200);
		} else {
			target.className = 'on';
			show.style.width = '240px';
			show.style.height = '224px';
			show.style.top = '110px';
	    	show.style.left = '22px';
	    	hiddenDiv.style.height = '522px';
	    	hiddenDiv.style.marginTop = '70px';
	    	optionSubMenuWrap.style.marginTop = '2px';
	    	canvas.style.marginTop = '2px';
	    	canvas.style.marginLeft = '';
			outer.className = 'iSlider-rotated-outer';
			show.className = 'iSlider-rotated-show';
			nav.className = 'iSlider-rotated-nav';
			optionSubMenuWrap.children[0].className = 'iSlider-rotated-option';
			optionSubMenuWrap.children[0].style.marginTop = '210px';
			target.innerText = 'changeOrientation: 90';
			optionMenuToggle = 0;
			setTimeout(function(){
				islider.reset();
			}, 200);
		}
	};

	optionSubMenu[4].childNodes[1].onchange = function() {
		islider._opts.animateType = this.value;
		islider.reset();

	};

	optionSubMenu[5].childNodes[1].onchange = function() {
		
		var canvas = document.getElementById('iSlider-canvas');

		if (this.value === 'dom') {
			islider.sliderIndex = 0;
			islider._opts.data = domList;
			canvas.style.backgroundColor = '#ffffff';
		}
		else if(this.value === 'pic') {
			islider._opts.data = picList;
			canvas.style.backgroundColor = '#333';
		}
		
		islider._opts.type = this.value;

		islider.reset();
	};

	//menu if it is mobile
	var toggle = 0;

	// document.getElementById('iSlider-menu-tag').addEventListener('touchstart', menuSlide, false);
	// document.getElementById('iSlider-menu-tag').addEventListener('mousedown', menuSlide, false);

	function menuSlide(event) {

		event.preventDefault();

		if (toggle === 0) {
			window.document.getElementById('iSlider-menu-tag').style.marginLeft = '30px';
			window.document.getElementById('iSlider-menu').style.marginLeft = '0';
			toggle = 1;
		}
		else {
			window.document.getElementById('iSlider-menu-tag').style.marginLeft = '-200px';
			window.document.getElementById('iSlider-menu').style.marginLeft = '-230px';
			toggle = 0;
		}
		

	}

	if (navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)|(Android)\s+([\d.]+)/)) {
		var menu = document.getElementById('iSlider-menu');
		var tip = document.getElementById('iSlider-tip');
		var flag = false;
		var isChild = function (child, parent) {
			var target = child;
	        
	        while (target !== parent && target !== document.body) {
	            target = target.parentNode;
	        }
			
			return target === parent;
		}

		window.addEventListener('touchmove', function (evt) {
			flag = true;
		}, true);

		window.addEventListener('touchend', function (evt) {
			if (!flag) {
				if (isChild(evt.target, tip) || isChild(evt.target, menu)) {
					flag = false;
					return;
				}
				tip.className = (tip.className == 'show') ? '' : 'show';
			}
			flag = false;

			window.scrollTo(0, 1);
		}, true)
		
		menu.className = (menu.className == 'iSlider-rotated-menu') ?  'iSlider-rotated-menu show' : 'show';
		tip.className = 'show';
		setTimeout(function(){
			tip.className = '';
		}, 3000);
	}
})()