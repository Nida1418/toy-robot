describe('Toy Robot Test', () => {
    beforeEach(() => {
        robot.reset();
    });

    describe('Place Command', () => {
        it('should place the robot in specified position', () => {
            robot.issueCommand('PLACE 0,0,NORTH');
            const result = robot.issueCommand('REPORT');
            expect(result).not.toBeUndefined();
            expect(result.posX).toBe(0);
            expect(result.posY).toBe(0);
            expect(result.face).toBe('NORTH');
        });
        it('should not place the robot outside bounds', () => {
            robot.issueCommand('PLACE 5,5,NORTH');
            const result = robot.issueCommand('REPORT');
            expect(result).not.toBeUndefined();
            expect(result.posX).toBe(undefined);
            expect(result.posY).toBe(undefined);
            expect(result.face).toBe('NORTH');
        });
    });

    describe('Left Command', () => {
        it('should turn west when facing north', () => {
            robot.issueCommand('PLACE 0,0,NORTH');
            robot.issueCommand('LEFT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('WEST');
        });
        it('should turn south when facing west', () => {
            robot.issueCommand('PLACE 0,0,WEST');
            robot.issueCommand('LEFT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('SOUTH');
        });
        it('should turn east when facing south', () => {
            robot.issueCommand('PLACE 0,0,SOUTH');
            robot.issueCommand('LEFT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('EAST');
        });
        it('should turn north when facing east', () => {
            robot.issueCommand('PLACE 0,0,EAST');
            robot.issueCommand('LEFT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('NORTH');
        });
    });

    describe('Right Command', () => {
        it('should turn east when facing north', () => {
            robot.issueCommand('PLACE 0,0,NORTH');
            robot.issueCommand('RIGHT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('EAST');
        });
        it('should turn south when facing east', () => {
            robot.issueCommand('PLACE 0,0,EAST');
            robot.issueCommand('RIGHT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('SOUTH');
        });
        it('should turn west when facing south', () => {
            robot.issueCommand('PLACE 0,0,SOUTH');
            robot.issueCommand('RIGHT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('WEST');
        });
        it('should turn north when facing west', () => {
            robot.issueCommand('PLACE 0,0,WEST');
            robot.issueCommand('RIGHT');
            const result = robot.issueCommand('REPORT');
            expect(result.face).toBe('NORTH');
        });
    });

    describe('Move Command', () => {
        it('should move up when facing north', () => {
            robot.issueCommand('PLACE 0,0,NORTH');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posY).toBe(1);
        });
        it('should move left when facing west', () => {
            robot.issueCommand('PLACE 2,0,WEST');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posX).toBe(1);
        });
        it('should move down when facing south', () => {
            robot.issueCommand('PLACE 0,2,SOUTH');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posY).toBe(1);
        });
        it('should move right when facing east', () => {
            robot.issueCommand('PLACE 0,0,EAST');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posX).toBe(1);
        });
        it('should not go out of bounds when facing north', () => {
            robot.issueCommand('PLACE 0,4,NORTH');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posY).toBe(4);
        });
        it('should not go out of bounds when facing west', () => {
            robot.issueCommand('PLACE 0,0,WEST');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posX).toBe(0);
        });
        it('should not go out of bounds when facing south', () => {
            robot.issueCommand('PLACE 0,0,SOUTH');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posY).toBe(0);
        });
        it('should not go out of bounds when facing east', () => {
            robot.issueCommand('PLACE 4,0,EAST');
            robot.issueCommand('MOVE');
            const result = robot.issueCommand('REPORT');
            expect(result.posX).toBe(4);
        });
    });

    describe('Report Command', () => {
        it('should report current position and face of the robot - NORTH', () => {
            robot.issueCommand('PLACE 0,0,NORTH');
            const result = robot.issueCommand('REPORT');
            expect(result).not.toBeUndefined();
            expect(result.posX).toBe(0);
            expect(result.posY).toBe(0);
            expect(result.face).toBe('NORTH');
        });
        it('should report current position and face of the robot - SOUTH', () => {
            robot.issueCommand('PLACE 0,0,SOUTH');
            const result = robot.issueCommand('REPORT');
            expect(result).not.toBeUndefined();
            expect(result.posX).toBe(0);
            expect(result.posY).toBe(0);
            expect(result.face).toBe('SOUTH');
        });
        it('should report current position and face of the robot - EAST', () => {
            robot.issueCommand('PLACE 0,0,EAST');
            const result = robot.issueCommand('REPORT');
            expect(result).not.toBeUndefined();
            expect(result.posX).toBe(0);
            expect(result.posY).toBe(0);
            expect(result.face).toBe('EAST');
        });
        it('should report current position and face of the robot - WEST', () => {
            robot.issueCommand('PLACE 0,0,WEST');
            const result = robot.issueCommand('REPORT');
            expect(result).not.toBeUndefined();
            expect(result.posX).toBe(0);
            expect(result.posY).toBe(0);
            expect(result.face).toBe('WEST');
        });
    });

    describe('Set Bounds', () => {
        it('should set specified bounds for the board', () => {
            // Verify default board size is 5x5
            expect(robot.getBounds().xBound).toBe(5);
            expect(robot.getBounds().yBound).toBe(5);

            robot.setBounds(100, 100);
            expect(robot.getBounds().xBound).toBe(100);
            expect(robot.getBounds().yBound).toBe(100);
        });
    });

    describe('Reset Robot', () => {
        it('should reset the position and face of the robot', () => {
            robot.issueCommand('PLACE 0,0,WEST');
            let result = robot.issueCommand('REPORT');
            expect(result.posX).toBe(0);
            expect(result.posY).toBe(0);
            expect(result.face).toBe('WEST');

            robot.reset();
            result = robot.issueCommand('REPORT');
            expect(result.posX).toBe(undefined);
            expect(result.posY).toBe(undefined);
            expect(result.face).toBe(undefined);
        });
    });

    describe('Combo Commands', () => {
        it('should execute the sequence of commands supplied and produce expected results', () => {
           let result = robot.issueCommand('PLACE 0,0,NORTH \n MOVE \n REPORT');
           expect(result.posX).toBe(0);
           expect(result.posY).toBe(1);
           expect(result.face).toBe('NORTH');

           result = robot.issueCommand('PLACE 0,0,NORTH \n LEFT \n REPORT');
           expect(result.posX).toBe(0);
           expect(result.posY).toBe(0);
           expect(result.face).toBe('WEST');

           result = robot.issueCommand('PLACE 1,2,EAST \n MOVE \n MOVE \n LEFT \n MOVE \n REPORT');
           expect(result.posX).toBe(3);
           expect(result.posY).toBe(3);
           expect(result.face).toBe('NORTH');

        });
    });
});