var robot = (function () {

    var COMMANDS = {
        PLACE: 'PLACE',
        LEFT: 'LEFT',
        RIGHT: 'RIGHT',
        MOVE: 'MOVE',
        REPORT: 'REPORT',
    };

    var FACES = {
        NORTH: 'NORTH',
        SOUTH: 'SOUTH',
        EAST: 'EAST',
        WEST: 'WEST',
    };

    var DEFAULT_XBOUND = 5;
    var DEFAULT_YBOUND = 5;

    var x;
    var y;
    var f;

    var xBound = DEFAULT_XBOUND;
    var yBound = DEFAULT_YBOUND;

    var place = function (posX, posY, face) {
        if (face != FACES.NORTH && face != FACES.SOUTH && face != FACES.WEST && face != FACES.EAST) {
            console.error("Invalid face value, the face should be one of these : NORTH, SOUTH, EAST, WEST");
            return;
        }

        f = face;

        if (isPositionValid(posX, posY)) {
            x = posX;
            y = posY;
        }
    };

    var left = function () {
        if (f == FACES.NORTH) {
            f = FACES.WEST;
        } else if (f == FACES.SOUTH) {
            f = FACES.EAST;
        } else if (f == FACES.EAST) {
            f = FACES.NORTH;
        } else if (f == FACES.WEST) {
            f = FACES.SOUTH;
        }
    };

    var right = function () {
        if (f == FACES.NORTH) {
            f = FACES.EAST;
        } else if (f == FACES.SOUTH) {
            f = FACES.WEST;
        } else if (f == FACES.EAST) {
            f = FACES.SOUTH;
        } else if (f == FACES.WEST) {
            f = FACES.NORTH;
        }
    };

    var move = function () {
        if (f == FACES.NORTH) {
            if (isPositionValid(x, y + 1)) {
                y += 1;
            }
        } else if (f == FACES.SOUTH) {
            if (isPositionValid(x, y - 1)) {
                y -= 1;
            }
        } else if (f == FACES.EAST) {
            if (isPositionValid(x + 1, y)) {
                x += 1;
            }
        } else if (f == FACES.WEST) {
            if (isPositionValid(x - 1, y)) {
                x -= 1;
            }
        }
    };

    var report = function () {
        var msg = x + ", " + y + ", " + f;
        console.log(msg);

        var reportDiv = document.getElementById("reportDiv");

        if (reportDiv) {
            var displayElement = document.createElement("p");
            displayElement.innerHTML = msg;
            reportDiv.appendChild(displayElement);
        }

        return {
            posX: x,
            posY: y,
            face: f,
        };
    };

    var isPositionValid = function (posX, posY) {
        return posX >= 0 && posY >= 0 && posX < xBound && posY < yBound;
    };

    var setBounds = function (xRange = 5, yRange = 5) {
        xBound = xRange;
        yBound = yRange;
    };

    var getBounds = function () {
        return {
            xBound,
            yBound,
        };
    };

    var reset = function () {
        x = undefined;
        y = undefined;
        f = undefined;

        xBound = DEFAULT_XBOUND;
        yBound = DEFAULT_YBOUND;
    }

    var issueCommand = function (commands) {
        var parsedCommands = commands.split(/\r?\n/);
        var i;
        for (i = 0; i < parsedCommands.length; i++) {
            var parsedCommand = parsedCommands[i].trim().split(' ');
            switch (parsedCommand[0]) {
                case COMMANDS.PLACE:
                    var args = parsedCommand[1].split(',');
                    place(parseInt(args[0]), parseInt(args[1]), args[2].trim());
                    break;
                case COMMANDS.LEFT:
                    left();
                    break;
                case COMMANDS.RIGHT:
                    right();
                    break;
                case COMMANDS.MOVE:
                    move();
                    break;
                case COMMANDS.REPORT:
                    return report();
                default:
                    console.error('Invalid Command');
            }
        }
    };

    return {
        issueCommand,
        setBounds,
        getBounds,
        reset,
    };
})();