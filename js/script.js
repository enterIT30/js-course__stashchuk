const asyncFn = async () => {
  throw new Error('There was an error!');
};

asyncFn();
