//  Solution from: https://github.com/storybooks/storybook/issues/2962#issuecomment-411339557
export const wrap = templateFn => storyFn => {
  const story = storyFn();
  return {
    ...story,
    template: templateFn(story.template)
  };
};

export const gridWrap = wrap(
  content => `<app-grid-overlay *ngIf="showgrid"></app-grid-overlay>${content}`
);
