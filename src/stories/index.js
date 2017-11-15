import React from 'react';
import 'react-chromatic/storybook-addon';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Random', module)
  .add('number', () => <div className="chromatic-ignore">{Math.random()}</div>)
  .add('three', () => <div><span className="chromatic-ignore">{Math.random()}</span> - <span className="chromatic-ignore">{Math.random()}</span> - <span className="chromatic-ignore">{Math.random()}</span></div>);

storiesOf('gif', module)
  .add('image', () => <img className="chromatic-ignore" src="https://cdn.dribbble.com/users/46315/screenshots/1065283/icons-animation.gif"/>)
