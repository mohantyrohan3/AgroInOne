module.exports = {
  apps : [{
    name: 'my-react-app',
    script: 'serve',
    args: 'build',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
}