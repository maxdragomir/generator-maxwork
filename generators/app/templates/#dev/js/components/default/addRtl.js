// RTL


if (is_rtl || hash === 'rtl') {
	ltr.parentNode.removeChild(ltr);
	direction = true;
} else {
	rtl.parentNode.removeChild(rtl);
}
