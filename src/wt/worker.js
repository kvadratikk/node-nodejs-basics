import { isMainThread, parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  const isError = Math.random() < 0.5;
  if (isMainThread || isError) throw new Error('random error');

  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};

sendResult();
