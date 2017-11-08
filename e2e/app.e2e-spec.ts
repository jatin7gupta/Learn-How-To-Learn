import { LearnHowToLearnPage } from './app.po';

describe('learn-how-to-learn App', () => {
  let page: LearnHowToLearnPage;

  beforeEach(() => {
    page = new LearnHowToLearnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
