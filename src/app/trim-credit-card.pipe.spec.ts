import { TrimCreditCardPipe } from './trim-credit-card.pipe';

describe('TrimCreditCardPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimCreditCardPipe();
    expect(pipe).toBeTruthy();
  });
});
