import * as path from 'path';
import * as MarkdownIt from 'markdown-it';
import * as matter from 'gray-matter';

// these don't have typings, but we don't do much with them
const blockImagePlugin = require('markdown-it-block-image');
const blockEmbedPlugin = require('markdown-it-block-embed');

import { File } from '../interfaces';
import { extractTitle } from './extract-title';

const markdownItOptions = {
  // highlight: prismHighlighter
};

const md = new MarkdownIt('commonmark', markdownItOptions);

md.use(blockImagePlugin, {
  outputContainer: 'div',
  containerClassName: 'image-container'
});

md.use(blockEmbedPlugin, {
  containerClassName: 'video-embed',
  serviceClassPrefix: 'video-embed--'
});

const toIsoDate = (dateString: string) => {
  const d = new Date(dateString);

  if (isNaN(d.getTime())) {
    return null;
  }

  return d.toISOString();
};

export const toPage = (file: File, basePath: string) => {
  // TODO contents vs content?
  const fm = matter(file.contents);

  const { title, html: content } = extractTitle(md.render(fm.content));

  return {
    ...fm.data,
    path: `/${path.relative(basePath, file.path).slice(0, -3)}`,
    title: title && title.trim(),
    content: content && content.trim(),
    type: path.basename(file.path).slice(0, -3) === 'index' ? 'index' : 'page',
    created: toIsoDate(fm.data.created) || file.created.toISOString(),
    modified: toIsoDate(fm.data.modified) || file.modified.toISOString()
  };
}
