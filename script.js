document.getElementById('bookBtn').addEventListener('click', function() {
    alert("Merci de votre intérêt ! Nous allons vous rediriger vers le formulaire de réservation.");
});

// Animation simple au défilement
const cards = document.querySelectorAll('.day-card');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
        }
    });
});

// Initialisation des cartes (pour le JS)
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateX(-20px)";
    card.style.transition = "all 0.5s ease-out";
});

// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
	(function () {
		function refreshCSS() {
			var sheets = [].slice.call(document.getElementsByTagName("link"));
			var head = document.getElementsByTagName("head")[0];
			for (var i = 0; i < sheets.length; ++i) {
				var elem = sheets[i];
				var parent = elem.parentElement || head;
				parent.removeChild(elem);
				var rel = elem.rel;
				if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
					var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
					elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
				}
					parent.appendChild(elem);
			}
		}
		var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
		var address = protocol + window.location.host + window.location.pathname + '/ws';
		var socket = new WebSocket(address);
		socket.onmessage = function (msg) {
			if (msg.data == 'reload') window.location.reload();
			else if (msg.data == 'refreshcss') refreshCSS();
		};
		if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
			console.log('Live reload enabled.');
			sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
		}
	})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}

