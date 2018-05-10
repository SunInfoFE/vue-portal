<template>
  <s-card>
    <div slot="header" class="clearfix">
      <span class="card-title">
        账号状态统计
      </span>
      <div class="card-enter">更多</div>
    </div>
    <s-chart :chart="accountStatusChart"></s-chart>
  </s-card>
</template>

<script>
import getAccountStatus from '../api/accountStatus';

export default {
  name: 'AccountStatus',
  data () {
    return {
      accountStatusChart: {
        name: 'accountStatusChart',
        type: 'pieChart',
        width: '100%',
        height: '300px',
        data: []
      }
    };
  },
  computed: {
    userName () {
      return this.$store.state.userName;
    }
  },
  created () {
    this.accountStatusChart.data = getAccountStatus(this.userName);
  }
};
</script>

<style>

</style>
