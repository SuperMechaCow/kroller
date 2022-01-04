var masterUnits = [{
		name: 'Master',
		keywords: ['Emperors Children', 'HQ', 'Psyker'],
		rules: [{
			name: 'Reroll Spell',
			targets: ['Destroyer Cult']
		}, {
			name: 'Invuln Bonus',
			targets: ['Daemon']
		}]
	},
	{
		name: 'Sorcerer',
		keywords: ['HQ', 'Psyker'],
		rules: [{
			name: 'FNP Spell',
			targets: ['Emperors Children']
		}]
	},
	{
		name: 'Noise Marines',
		keywords: ['Emperors Children', 'Troops', 'Core'],
		rules: []
	},
	{
		name: 'Greater Possessed',
		keywords: ['Emperors Children', 'Elite', 'Daemon'],
		rules: [{
			name: '+1 Str',
			targets: ['Daemon']
		}]
	},
	{
		name: 'Obliberator',
		keywords: ['Emperors Children', 'Heavy', 'Daemon', 'Destroyer Cult'],
		rules: [],
		color: '#00FFFF'
	},
	{
		name: 'Havocs',
		keywords: ['Emperors Children', 'Heavy'],
		rules: []
	}
]

masterUnits = forceData.atkr_file[0].detachments[0].units
console.log(masterUnits);





var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// var width = canvas.width; // 500
// var height = canvas.height; // 300

// draw a rectangle with fill and stroke
// ctx.fillRect(50, 50, 150, 100);
// ctx.strokeRect(50, 50, 150, 100);


var unitPolyList = []

var colorTumbler = [
	'#FF0000', '#FFFF00', '#00FF00',
	'#00FFFF', '#0000FF', '#FF00FF',
	'#FF8800', '#FFFF88', '#00FF88',
	'#88FFFF', '#8800FF', '#FF88FF',
	'#FF0088', '#88FF00', '#0088FF', '#888888'
]
// Always square
// var columns = Math.floor(Math.sqrt(units.length))
// Always fit

function offsetDrawXCalc(boxI) {
	// return (((boxI / columns) % 2) * 25) + 50;
	return 50;
}

var offsetDrawX = 50;
var offsetDrawY = 50;
var boxW = 100;
var boxH = 50;

var columns = Math.floor((canvas.width - (offsetDrawX * 2)) / (boxW + offsetDrawX));

function collectBoxes(units) {
	// units = units.concat(Stratagems.deathguard)

	unitPolyList = []
	for (var unit in units) {
		let unitPoly = {
			x: (boxW + offsetDrawX) * (unit % columns),
			y: (offsetDrawY + boxH) * Math.floor(unit / columns),
			w: boxW,
			h: boxH,
		}
		unitPolyList.push(unitPoly);
	}
}
collectBoxes(masterUnits);

function drawUnits(units) {
	// units = units.concat(Stratagems.deathguard)
	for (var unit in units) {
		// set fill and stroke styles
		ctx.fillStyle = '#777777';
		ctx.fillRect(unitPolyList[unit].x + offsetDrawX, unitPolyList[unit].y + offsetDrawY, (unitPolyList[unit].w / 2), unitPolyList[unit].h);
		ctx.fillStyle = '#AAAAAA';
		ctx.fillRect(unitPolyList[unit].x + (unitPolyList[unit].w / 2) + offsetDrawX, unitPolyList[unit].y + offsetDrawY, (unitPolyList[unit].w / 2), unitPolyList[unit].h);
		ctx.strokeStyle = colorTumbler[unit % colorTumbler.length];
		ctx.strokeRect(unitPolyList[unit].x + offsetDrawX, unitPolyList[unit].y + offsetDrawY, unitPolyList[unit].w, unitPolyList[unit].h);

		// set fill and stroke styles
		ctx.fillStyle = '#FFFFFF';
		ctx.font = "10px Arial";
		ctx.fillText(units[unit].name, unitPolyList[unit].x + offsetDrawX + 10, unitPolyList[unit].y + offsetDrawY + 30);
		// ctx.strokeStyle = 'red';
		// ctx.strokeText(unit[unit].name, 10, 50);
		ctx.fillStyle = '#000000';
	}
}

drawUnits(masterUnits);

function drawLines(units, unit, reverse) {
	if (reverse) {
		for (var unitCheck in units) {
			for (var rule of units[unitCheck].rules) {
				for (var target of rule.targets) {
					for (var keyword of units[unit].keywords) {
						if (target.toLowerCase() == keyword.toLowerCase()) {
							oneLine(unit, unitCheck, rule.name, units[unitCheck].rules.indexOf(rule))
						}
					}
				}
			}
		}
	} else {
		for (var rule of units[unit].rules) {
			if (!rule.desc.includes("If every unit from your army has the")) {
				if (rule.targets) {
					for (var target of rule.targets) {
						for (var unitCheck in units) {
							for (var keyword of units[unitCheck].keywords) {
								if (target.toLowerCase().replaceAll(' ', '') == keyword.toLowerCase().replaceAll(' ', '')) {
									if (rule.desc.includes('friendly ')) {
										console.log(rule.desc);
										console.log(rule.desc.includes('friendly ' + target));
									}
									oneLine(unit, unitCheck, rule.name, units[unit].rules.indexOf(rule))
								}
							}
						}
					}
				}
			}
		}
	}
}


function oneLine(unit, unitCheck, caption, colorIndex) {
	ctx.strokeStyle = colorTumbler[colorIndex];
	ctx.beginPath();
	let abilOffset = colorIndex * 3
	// let abilOffset = 0
	let xStart = (unitPolyList[unit].x + unitPolyList[unit].w / 2) + offsetDrawX + abilOffset;
	let xEnd = (unitPolyList[unitCheck].x + unitPolyList[unitCheck].w / 2) + offsetDrawX + abilOffset;
	let yStart = (unitPolyList[unit].y + unitPolyList[unit].h / 2) + offsetDrawY + abilOffset;
	let yEnd = (unitPolyList[unitCheck].y + unitPolyList[unitCheck].h / 2) + offsetDrawY + abilOffset;
	let xMiddle = ((xEnd - xStart) / 3) * 2 + xStart
	let yMiddle = ((yEnd - yStart) / 3) * 2 + yStart
	ctx.moveTo(xStart, yStart);
	ctx.lineTo(xEnd, yEnd);
	ctx.stroke();
	ctx.font = "12px Arial";
	ctx.strokeStyle = 'black';
	ctx.strokeText(caption, xMiddle - ctx.measureText(caption).width / 2, yMiddle + abilOffset);
	ctx.fillStyle = colorTumbler[colorIndex % colorTumbler.length];
	ctx.fillText(caption, xMiddle - ctx.measureText(caption).width / 2, yMiddle + abilOffset);
}

function getMousePos(evtcanvas, evt) {
	var rect = evtcanvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

function handleMouseDown(e) {
	e.preventDefault();

	let canvasGrab = document.getElementById('canvas')

	// get the mouse position
	var mouse = getMousePos(canvasGrab, e);
	for (var i in unitPolyList) {
		if (mouse.y > unitPolyList[i].y + offsetDrawY && mouse.y < unitPolyList[i].y + unitPolyList[i].h + offsetDrawY) {

			if (mouse.x > unitPolyList[i].x + offsetDrawX && mouse.x < unitPolyList[i].x + (unitPolyList[i].w / 2) + offsetDrawX) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = 'black';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				drawUnits(masterUnits);
				drawLines(masterUnits, i);
			} else if (mouse.x > unitPolyList[i].x + (unitPolyList[i].w / 2) + offsetDrawX && mouse.x < unitPolyList[i].x + unitPolyList[i].w + offsetDrawX) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = 'black';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				drawUnits(masterUnits);
				drawLines(masterUnits, i, true);
			}
		}
	}
}

// listen for mousedown events
document.getElementById("canvas").addEventListener('click', function(e) {
	handleMouseDown(e);
});
