import { config as baseConfig } from './wdio.conf.js';

export const config = {
  ...baseConfig,
  capabilities: [{
    ...baseConfig.capabilities[0],
    device: 'Google Pixel 8a',
    os_version: '14.0'
  }]
};