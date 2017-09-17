import { Page, PageSummary } from '../interfaces';
import { linkPages } from './link-pages';

describe('linkPages', () => {
  it('should correctly assign the next and previous properties', () => {
    const arr: Page[] = [
      {
        title: 'Page 10'
      } as Page,
      {
        title: 'Page 9'
      } as Page,
      {
        title: 'Page 8'
      } as Page,
      {
        title: 'Page 7'
      } as Page,
      {
        title: 'Page 6'
      } as Page,
      {
        title: 'Page 5'
      } as Page,
      {
        title: 'Page 4'
      } as Page,
      {
        title: 'Page 3'
      } as Page,
      {
        title: 'Page 2'
      } as Page,
      {
        title: 'Page 1'
      } as Page
    ];

    const expected: Page[] = [
      {
        title: 'Page 10',
        prev: {
          title: 'Page 9'
        } as PageSummary
      } as Page,
      {
        title: 'Page 9',
        prev: {
          title: 'Page 8'
        } as PageSummary,
        next: {
          title: 'Page 10'
        } as PageSummary
      } as Page,
      {
        title: 'Page 8',
        prev: {
          title: 'Page 7'
        } as PageSummary,
        next: {
          title: 'Page 9'
        } as PageSummary
      } as Page,
      {
        title: 'Page 7',
        prev: {
          title: 'Page 6'
        } as PageSummary,
        next: {
          title: 'Page 8'
        } as PageSummary
      } as Page,
      {
        title: 'Page 6',
        prev: {
          title: 'Page 5'
        } as PageSummary,
        next: {
          title: 'Page 7'
        } as PageSummary
      } as Page,
      {
        title: 'Page 5',
        prev: {
          title: 'Page 4'
        } as PageSummary,
        next: {
          title: 'Page 6'
        } as PageSummary
      } as Page,
      {
        title: 'Page 4',
        prev: {
          title: 'Page 3'
        } as PageSummary,
        next: {
          title: 'Page 5'
        } as PageSummary
      } as Page,
      {
        title: 'Page 3',
        prev: {
          title: 'Page 2'
        } as PageSummary,
        next: {
          title: 'Page 4'
        } as PageSummary
      } as Page,
      {
        title: 'Page 2',
        prev: {
          title: 'Page 1'
        } as PageSummary,
        next: {
          title: 'Page 3'
        } as PageSummary
      } as Page,
      {
        title: 'Page 1',
        next: {
          title: 'Page 2'
        } as PageSummary
      } as Page
    ];
  });
});
