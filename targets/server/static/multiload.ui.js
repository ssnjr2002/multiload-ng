/*
 * Copyright (C) 2017 Mario Cianciolo <mr.udda@gmail.com>
 *
 * This file is part of Multiload-ng.
 *
 * Multiload-ng is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Multiload-ng is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Multiload-ng.  If not, see <http://www.gnu.org/licenses/>.
 */

var MultiloadUi = {

	makeNumericControl: function(options) {
		/* options = { id, label, value, min, max, step, onSpin, onChange } */

		if (!options.id) {
			console.error('Required id!');
			return null;
		}

		var o = $('<div id="'+options.id+'_container">');
		o.append('<label for="'+options.id+'">' + options.label + '</label>');

		var ctl = $('<input type="text" id="'+options.id+'" value="' + options.value + '" />');
		o.append(ctl);

		ctl.spinner({
			min: options.min,
			max: options.max,
			step: options.step,
			spin: options.onSpin,
			change: options.onChange,
		});

		return o;
	}

}