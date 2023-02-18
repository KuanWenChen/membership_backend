import * as config from './configuration';

const env = config.default();
describe('environment', () => {
  it('PEPPER', () => {
    expect(env.pepper).toBeDefined();
    expect(env.pepper).toBe('test pepper');
  });
});
