import C from './helper';

export const nextPage = () => ({
  type: C.NEXT_PAGE
});
export const previousPage = () => ({
  type: C.PREVIOUS_PAGE
});
export const scrollTo = position => ({
  type: C.SCROLL_TO,
  position
});
export const getCurrentPage = (state) => state.currentPage;

export default (state = 0, action) => {
  switch (action.type) {
      case C.NEXT_PAGE:
        return state + 1;
      case C.PREVIOUS_PAGE:
        return state - 1;
      case C.SCROLL_TO:
        return action.position;
      default :
        return state
  }
}