import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import PostTemplate from './post-template';
import 'moment/locale/pl';

moment.locale('pl');

describe('PostTemplate', () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test'
        }
      },
      markdownRemark: {
        html: '<p>test</p>',
        fields: {
          tagSlugs: [
            '/test_0',
            '/test_1'
          ]
        },
        frontmatter: {
          date: '2016-09-01',
          description: 'test',
          title: 'test',
          tags: [
            'test_0',
            'test_1'
          ]
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<PostTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
