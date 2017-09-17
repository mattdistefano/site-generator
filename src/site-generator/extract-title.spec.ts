import { extractTitle } from './extract-title';

describe('extractTitle', () => {
  it('should return an empty object when html is null', () => {
    expect(extractTitle(null)).toEqual({});
  });

  it('should return an empty object when html is undefined', () => {
    expect(extractTitle(undefined)).toEqual({});
  });

  it('should return an empty object when html is an empty string', () => {
    expect(extractTitle('')).toEqual({});
  });

  it('should return an empty object when html is number', () => {
    expect(extractTitle(10 as any)).toEqual({});
  });

  it('should return the html and an empty title when html does not contain an h1', () => {
    expect(extractTitle('<p>yo</p>')).toEqual({
      title: '',
      html: '<p>yo</p>'
    });
  });

  it('should separate the title, without tags, from the html when the html contains an h1', () => {
    expect(extractTitle('<h1>yi!</h1><p>yo</p>')).toEqual({
      title: 'yi!',
      html: '<p>yo</p>'
    });
  });

  it('should include tags within the h1', () => {
    expect(extractTitle('<h1>yi! <em>yaaaaaa</em></h1><p>yo</p>')).toEqual({
      title: 'yi! <em>yaaaaaa</em>',
      html: '<p>yo</p>'
    });
  });

  it('should return the title and an empty html when the html contains only an h1', () => {
    expect(extractTitle('<h1>yi! <em>yaaaaaa</em></h1>')).toEqual({
      title: 'yi! <em>yaaaaaa</em>',
      html: ''
    });
  });
});
