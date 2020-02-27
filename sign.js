const jwt = require('jsonwebtoken');
const platform = require('connect-platform');


platform.core.node({
  path: '/jwt/sign',
  public: false,
  inputs: ['payload', 'key', 'options'],
  outputs: ['token'],
  hints: {
    node: 'signs and encrypts given <span class="hl-blue">payload</span>.',
    inputs: {
      payload: 'the payload to sign',
      key: 'the key to sign with',
      key: 'additional options for signing',
    },
    outputs: {
      token: 'the signed and encrypted jwt token containing the given <span class="hl-blue">payload</span>.'
    },
  }
}, (inputs, output, control) => {
  jwt.sign(inputs.payload, inputs.key, inputs.options, (_, token) => output('token', token));
});
