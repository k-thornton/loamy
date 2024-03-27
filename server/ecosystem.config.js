// launch file for running via PM2
module.exports = {
    apps : [{
      name: 'loamy',
      script: 'index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000 
      }
    }]
  };