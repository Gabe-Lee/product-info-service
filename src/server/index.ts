import server from './server';
import * as ENV from '../env';

const { PORT } = ENV.SERVER[ENV.MODE];

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
