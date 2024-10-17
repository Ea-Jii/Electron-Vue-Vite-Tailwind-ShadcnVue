import { spawn } from 'child_process';
import electron from 'electron';
import { createServer } from 'vite';

async function startDev() {
  const server = await createServer();
  await server.listen();

  const electronProcess = spawn(electron, ['.'], { stdio: 'inherit' });

  const cleanup = () => {
    electronProcess.kill();
    server.close();
    process.exit();
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  electronProcess.on('close', () => {
    server.close();
    process.exit();
  });
}

startDev();
