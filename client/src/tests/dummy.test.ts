import { isInternalLink } from '../dummy';

test('should recognise external link', () => {
    expect(isInternalLink('https://google.com')).toBe(false);
});

test('should recognise internal link', () => {
    expect(isInternalLink('/some-page')).toBe(true);
});
