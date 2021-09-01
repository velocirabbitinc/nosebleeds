import subject from '../client/reducers/geekReducer';

/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */
describe('MegaMarkets reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      totalMarkets: 0,
      totalCards: 0,
      marketList: [],
      newLocation: '',
      synced: true,
    };
  });

  describe('default state', () => {
    xit('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    xit('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(subject(state, action)).toBe(state);
    });
  });

  describe('LOGIN', () => {
    const action = {
      type: 'LOGIN',
      payload: 'Azkaban',
    };

    xit('it logs in', () => {
      const { view } = subject(state, action);
      expect(view).toEqual('logged in');
    });

    xit('includes a marketList not strictly equal to the original', () => {
      const { marketList } = subject(state, action);
      expect(marketList).not.toEqual(state.marketList);
    });

    xit('clears the newLocation field', () => {
      const marketList = subject(state, action);
      expect(marketList.location).toEqual('');
    });
  });

  describe('UPDATE_LOCATION', () => {
    const action = {
      type: 'UPDATE_LOCATION',
      payload: 'Chamber of Secrets',
    };

    it('updates location with the action payload', () => {
      const location = subject(state, action);
      expect(location.newLocation).toEqual(action.payload);
    });

    xit('returns a state object not strictly equal to the original', () => {
    });

    xit('doesn\'t touch the marketList array', () => {
    });
  });
  /*
   * Note: the rest of these tests are an EXTENSION. You should move on
   * to Enzyme testing, and come back to these later. Optionally, you may
   * just do ADD_CARD now, and come back to the rest of these redux tests later.
   */
  describe('ADD_CARD', () => {
    xit('increases card count of market specified by payload', () => {
    });

    xit('increases total card count by 1', () => {
    });

    xit('includes a marketList not strictly equal to the original', () => {
    });

    xit('does not mutate or duplicate other markets in marketList', () => {
    });
  });
  describe('DELETE_CARD', () => {
    xit('decreases card count of market specified by payload', () => {
    });

    xit('decreases total card count by 1', () => {
    });

    xit('includes a marketList not strictly equal to the original', () => {
    });

    xit('does not mutate or duplicate other markets in marketList', () => {
    });
  });

  // The rest is functionality not included in the original MegaMarkets unit.
  // In short:
  //   1. SYNC_MARKETS is our action for writing markets to our "database." The
  //   only part of client state it affects is the "synced" property on
  //   markets, which activates/deactivates the button.
  //   2. LOAD_MARKETS only happens once, on page load, to load up markets from
  //   the database.

});
