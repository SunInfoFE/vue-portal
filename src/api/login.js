const postLogin = function (params) {
  if (params.userName === 'admin') {
    return Promise.resolve(
      [{
        size: [12, 12],
        content: [{
          size: [12, 12],
          content: ['account-status', {
            size: [10, 14],
            content: ['empty', 'chart']
          }]
        }, 'empty']
      }, {
        size: [8, 8, 8],
        height: '400',
        content: ['empty', 'empty', 'empty']
      }]
    );
  } else {
    return Promise.resolve();
  }
};

export default postLogin;
