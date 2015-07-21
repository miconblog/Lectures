function MoveBox(elEl, oOptions) {

	this._elEl = elEl;
	this._oOptions = oOptions;

	this._bindEvents();

}

MoveBox.prototype = {

	_addEvent : function(elEl, sEvent, fpHandler) {

		elEl.addEventListener ? elEl.addEventListener(sEvent, fpHandler, true)
				: elEl.attachEvent('on' + sEvent, fpHandler);

	},

	_bindEvents : function() {

		var self = this;

		this._addEvent(document, 'keydown', function(eEvent) {

			eEvent = eEvent || window.event;

			var oldKeyCode = self._oldEvent && self._oldEvent.keyCode;
			var curKeyCode = eEvent.keyCode;

			var nPx = 1;

			if (oldKeyCode == 189) {
				nPx = -1;
			}

			if (48 <= curKeyCode && curKeyCode <= 57) {

				nPx *= curKeyCode - 48;
				self._elEl.style.left = parseInt(self._elEl.style.left, 10)
						+ nPx + "px";

				self._oOptions.onMove && self._oOptions.onMove(nPx);

			}

			self._oldEvent = eEvent;

		});

	}

};
