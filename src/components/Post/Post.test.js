import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import Post from './Post';
import 'moment/locale/pl';

moment.locale('pl');

describe('Post', () => {
  const props = {
    post: {
      html: '<p>test</p>',
      fields: {
        tagSlugs: [
          '/test_0',
          '/test_1'
        ]
      },
      frontmatter: {
        date: '2016-09-01',
        tags: [
          'test_0',
          'test_1'
        ],
        title: 'test'
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
