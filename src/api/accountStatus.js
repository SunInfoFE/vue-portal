const getAccountStatus = function (userName) {
  if (userName === 'admin') {
    return [
      {
        name: '激活',
        value: 3
      },
      {
        name: '未激活',
        value: 4
      },
      {
        name: '锁定',
        value: 5
      },
      {
        name: '过期',
        value: 6
      },
      {
        name: '离职',
        value: 7
      },
      {
        name: '注销',
        value: 2
      }
    ];
  }
};

export default getAccountStatus;
