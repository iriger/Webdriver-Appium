import { config as baseConfig } from './wdio.conf.js';

export const config = {
  ...baseConfig,
  capabilities: [{
    ...baseConfig.capabilities[0],
    device: 'Samsung Galaxy S24',
    os_version: '14.0'
  }]
};