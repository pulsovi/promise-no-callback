module.exports = promiseNoCallback;

function promiseNoCallback() {
  const promiseNoCb = {};

  promiseNoCb.promise = new Promise((resolve, reject) => {
    promiseNoCb.resolve = resolve;
    promiseNoCb.reject = reject;
  });

  return promiseNoCb;
}
