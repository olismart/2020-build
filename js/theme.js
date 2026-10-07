/*
 * Light/dark theme switcher.
 *
 * - Defaults to the visitor's system preference (prefers-color-scheme).
 * - An explicit choice made via the toggle is kept in sessionStorage, so it
 *   persists while navigating the site, but each new visit starts fresh
 *   from the system preference.
 * - <html data-theme="light|dark"> is set before first paint (this script
 *   is loaded synchronously in <head>), so the page never flashes the
 *   wrong scheme and the toggle renders in the correct state.
 */
(function () {
	'use strict';

	var STORAGE_KEY = 'theme';
	var root = document.documentElement;

	function storedTheme() {
		try {
			return sessionStorage.getItem(STORAGE_KEY);
		} catch (err) {
			return null; // storage unavailable (e.g. some privacy modes)
		}
	}

	function systemPrefersDark() {
		return !!(window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches);
	}

	/* Reflect the current theme on <html> and keep every toggle in sync */
	function applyTheme() {
		var stored = storedTheme();
		var dark = stored !== null ? stored === 'dark' : systemPrefersDark();
		root.dataset.theme = dark ? 'dark' : 'light';
		syncToggles(dark);
	}

	function syncToggles(dark) {
		var toggles = document.querySelectorAll('.theme-toggle');
		for (var i = 0; i < toggles.length; i++) {
			toggles[i].setAttribute('aria-checked', String(dark));
		}
	}

	/* Runs before first paint: mark JS as available and set the theme */
	root.classList.add('js');
	applyTheme();

	/* Keep following live system changes until the visitor chooses explicitly
	   (a stored choice means the toggle, not the OS, is in charge) */
	var media = window.matchMedia ?
		window.matchMedia('(prefers-color-scheme: dark)') : null;
	function onSystemChange() {
		if (storedTheme() === null) {
			applyTheme();
		}
	}
	if (media) {
		if (media.addEventListener) {
			media.addEventListener('change', onSystemChange);
		} else if (media.addListener) { // older Safari
			media.addListener(onSystemChange);
		}
	}

	/* One delegated listener covers the toggle wherever it appears */
	document.addEventListener('click', function (event) {
		var toggle = event.target.closest ?
			event.target.closest('.theme-toggle') : null;
		if (!toggle) {
			return;
		}
		var dark = root.dataset.theme !== 'dark';
		try {
			sessionStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
		} catch (err) {
			/* persistence unavailable — the choice still applies to this page */
		}
		root.dataset.theme = dark ? 'dark' : 'light';
		syncToggles(dark);
	});

	/* The toggle isn't parsed yet when this runs — sync its state once the
	   DOM is ready (a synchronous head script always runs before that) */
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyTheme);
	} else {
		applyTheme();
	}
})();