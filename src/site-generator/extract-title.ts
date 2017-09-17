export interface TitleExtract {
  title?: string;
  html?: string;
}

/**
 * Parses the specified html for a h1 and returns
 * an object containing the contents of the h1 and the html
 * with the h1 removed.
 */
export const extractTitle = (html: string): TitleExtract => {
  if (!html || typeof html !== 'string') {
    return {};
  }

  // regex *could* work too but this is simpler
  const titleStart = html.indexOf('<h1>');
  const titleEnd = html.indexOf('</h1>');

  // no title? no problem
  if (titleStart === -1 || titleEnd === -1) {
    return { html, title: '' };
  }

  // get the inner portion of the title, not including the surrounding tag pair
  const title = html.slice(titleStart + 4, titleEnd);
  // remove the title, including the surrounding tag pair, from the containing html
  html = html.slice(0, titleStart) + html.slice(titleEnd + 5);

  return {
    title,
    html
  };
};
