const jwt = require('jsonwebtoken');
const platform = require('connect-platform');


platform.core.node({
  path : '/jwt/verify',
  public : false,
  inputs : ['token', 'key'],
  outputs : ['payload'],
  controlOutputs : ['invalid_token'],
  hints: {
    node: 'verifies and decrypts given <span class="hl-blue">token</span>.',
    inputs: {
      token: 'the jwt token to verify and decrypt.',
      key: 'the key to use and decrypt the token.'
    },
    outputs: {
      payload: 'the decrypted version of the payload contained in given <span class="hl">token</span>.'
    },
    controlOutputs: {
      invalid_token: 'activates when given token is not correct, for example signed by a third-party.',
    }
  }
}, (inputs, output, control) => {
  jwt.verify(inputs.token, inputs.key, {}, (err, payload) => {
    if (err) control('invalid_token');
    else output('payload', payload);
  });
});
