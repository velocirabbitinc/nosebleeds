import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import LabeledText from '../client/components/LabeledText';
import Market from '../client/components/Market';
import MarketsDisplay from '../client/components/MarketsDisplay';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });



//describe('')
/**
 * test: does the state change with user login
 * test: does the search bar component render
 * test: does adding a FavoriteArtist/etc render a new FavoriteArtist card
 * test: does clicking on artist/event create a ticket/price card
 * 
 * 
 * 
 * describe('React tests', () => {
 *  describe()})
 */

describe('React unit tests', () => {
  describe('LabeledText', () => {
    let wrapper;
    let props = {
      label: 'Mega',
      text: 'Markets',
    };

    beforeAll(() => {
      wrapper = shallow(<LabeledText {...props} />);
    });

    it('Renders a <p> tag with the label in bold', () => {
      expect(wrapper.type()).toEqual('p');
      expect(wrapper.text()).toEqual('Mega: Markets');
      expect(wrapper.find('strong').text()).toMatch('Mega');
    });
  });

  describe('Market', () => {
    // TODO: Test the following:
    // 1. A Market should display all of its text props inside a
    // LabeledText component
    // 2. It should also contain a div with two buttons
    // 3. The functions passed down should be invoked on click
    // 4. Market should render a div with a class of `marketBox`, and the
    // interior div wrapping the two buttons should have a class of `flex`
    let wrapper;
    let props = {
      index: 1,
      location: '',
      cards: 6969696969,
      percentage: 8008,
      addCard: () => true,
      deleteCard: () => false,
    };
    // https://devhints.io/enzyme
    beforeAll(() => {
      wrapper = shallow(<Market {...props} />);
    });
    // 1. A Market should display all of its text props inside LabeledText component
    it('Market should display all of its text props inside a labeledText component', () => {
      expect(wrapper.find({ label: 'Market ID' }).prop('text')).toBe(props.index);
      expect(wrapper.find({ label: 'Location' }).prop('text')).toBe(props.location);
      expect(wrapper.find({ label: 'Cards' }).prop('text')).toBe(props.cards);
      expect(wrapper.find({ label: '% of total' }).prop('text')).toBe(props.percentage);
    });

    // 2. It should also contain a div with two buttons
    it('Contains a div with two buttons', () => {
      expect(wrapper.find('.flex').find('button').length).toEqual(2);
    });

    // 3. The functions passed down should be invoked on click
    it('The functions passed down should be invoked on click', () => {
      expect(wrapper.find({ className: 'addCard' }).prop('onClick')).toBe(props.addCard);
      expect(wrapper.find({ className: 'deleteCard' }).prop('onClick')).toBe(props.deleteCard);
    });

    it('Market should render a div with a class of `marketBox`, and the interior div wrapping the two buttons should have a class of `flex', () => {
      expect(wrapper.find('.marketBox').find('.flex').find('button').length).toEqual(2);
    });


    describe('MarketsDisplay', () => {
      const stuff = [{ location: 'Alhambra', cards: 11 }];
      props = {
        marketList: stuff,
        index: 1,
        location: 'doodoo',
        percentage: 0,
        totalCards: 11,
        addCard: () => true,
        deleteCard: () => false,
      };

      beforeAll(() => {
        wrapper = shallow(<MarketsDisplay {...props} />);
      });

      it('A MarketsDisplay should have an h4 element to display the Markets title', () => {
        expect(wrapper.find('h4').text()).toMatch('Markets');
        
      });
      //   2. A single Market is rendered for each market in the
      //   marketList prop
      it('A single Market is rendered for each market in the marketList prop', () => {
        expect(wrapper.find('Market').length).toEqual(props.marketList.length);
      });
      //   3. The percentage prop should be a string calculated to two decimals.
      //   Test for zero, a whole number, and a fractional value. (Right now this
      //   is implemented incorrectly, so follow TDD here)
      it('Test percentage', () => {
        const percent = wrapper.find('Market').first().prop('percentage');
        const percentNum = Number(percent);
        const test = Number(percentNum.toFixed(2));
  
        expect(typeof percent).toEqual('string');
        expect(percentNum).toEqual(test);
      });

    });
  });
});
// const percentOfTotal = (cardCount, total) => (
//   cardCount ? ((cardCount / total) * 100).toFixed(2) : 0);

// TODO: Test the following:
//   1. A MarketsDisplay should have an h4 element to display the 'Markets'
//   title
//   2. A single Market is rendered for each market in the
//   marketList prop
//   3. The percentage prop should be a string calculated to two decimals.
//   Test for zero, a whole number, and a fractional value. (Right now this
//   is implemented incorrectly, so follow TDD here)
