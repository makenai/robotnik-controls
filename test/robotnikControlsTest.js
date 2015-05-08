var button = require('..');
var should = require('should');

describe('RobotnikControls', function() {

  describe('Button Events', function() {

    it('Should execute callbacks', function() {
        var pressed = false;
        button.on('up', function() {
          pressed = true;
        });
        button.off('up', function() {
          pressed = false;
        });

        button.trigger('up', 'down');
        pressed.should.equal( true );

        button.trigger('up', 'up');
        pressed.should.equal( false );
    });

    it('Should handle multiple callbacks', function() {

      var balloon = null;
      var color = null;

      button.on('a', function() {
        balloon = 'big';
      });
      button.on('a', function() {
        color = 'red';
      });

      button.trigger('a', 'down');

      balloon.should.equal('big');
      color.should.equal('red');

    });

  });

});
