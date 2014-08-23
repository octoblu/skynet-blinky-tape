var exec = require('child_process').exec;

function Plugin(messenger, options){
  this.messenger = messenger;
  this.options = options;
  return this;
}

var optionsSchema = {};

var messageSchema = {
  type: 'object',
  properties: {
    text: {
      type: 'string',
      required: true
    }
  }
};

Plugin.prototype.onMessage = function(message, fn){
  console.log('/Users/roy/.rbenv/shims/blinky-tape-test-tool ' + message.payload);
  exec('/Users/roy/.rbenv/shims/blinky-tape-test-tool ' + message.payload);
};

Plugin.prototype.destroy = function(){
  //clean up
  console.log('destroying.', this.options);
};


module.exports = {
  Plugin: Plugin,
  optionsSchema: optionsSchema,
  messageSchema: messageSchema
};
