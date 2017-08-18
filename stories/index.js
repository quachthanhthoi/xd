import "semantic-ui-less/semantic.less";
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import { Alignment, ControlledAlignment } from '../src/components/Alignment.jsx';
import { Segment, Divider } from 'semantic-ui-react'
import {
	ControlledGroupButton,
	UncontrolledGroupButton
} from '../src/components/GroupButton.jsx';
import ButtonGroup from '../src/components/ButtonGroup';
import { BorderOption } from '../src/components/BorderOption';
import { Slider } from '../src/components/Slider.jsx'
import {InputComponent} from '../src/components/InputComponent.jsx';
storiesOf('Super',module).add('Super', ()=>
  <div style = {{margin: '15px',width : "290px"}}>
    <ButtonGroup onClick={action('clicked')}/>
    <Divider />
    <UncontrolledGroupButton
  		onChange={action('GroupButton')}
  		activeArrange={true}
  	/>
    <Divider />
    <InputComponent onChange={action('Event Trigger')} />
    <Divider />
    <Alignment
      fontOptions = {fontOptions}
      fontWeightOptions = {fontWeightOptions}
    />
    <Divider />
    <Slider value={40} onChange={action('Slider Changed')} />
    <BorderOption
      data={{
        topRight: 1,
        topLeft: 1,
        bottomRight: 1,
        bottomLeft: 1
      }}
      onChange={action('BorderOption Changed')}
    />
    <Divider />
  </div>
);
storiesOf('Custom Position', module).add('Test', () =>
  <InputComponent onChange={action('Event Trigger')} />
);
storiesOf('Slider', module).add('Slider', () =>
  <Slider value={40} onChange={action('Slider Changed')} />
);
storiesOf('BorderOption', module).add('Normal', () =>
  <BorderOption
    data={{
      topRight: 1,
      topLeft: 1,
      bottomRight: 1,
      bottomLeft: 1
    }}
    onChange={action('BorderOption Changed')}
  />
);
storiesOf('GroupButton', module).add('uncontrolled', () =>
	<UncontrolledGroupButton
		onChange={action('GroupButton')}
		activeArrange={true}
	/>
);

storiesOf('ButtonGroup', module)
  .add('with text', () =>
    <ButtonGroup onClick={action('clicked')}/>
  );

storiesOf('Welcome', module).add('UncontrolledAlignment', () =>
  <div style = {{margin: '15px',width : "350px"}}>
    <Segment>
      <Alignment
        fontOptions = {fontOptions}
        fontWeightOptions = {fontWeightOptions}
      />
    </Segment>
  </div>


).add('ControlledAlignment', () =>
  <div style = {{margin: '15px',width : "350px"}}>
    <Segment>
      <ControlledAlignment
        font={''}
        fontSize={''}
        fontWeight={''}
        characterSpacing={''}
        lineSpacing={''}
        fontOptions = {fontOptions}
        fontWeightOptions = {fontWeightOptions}
        onChange={action("onChange")}
      />
    </Segment>
  </div>


);
storiesOf('Button', module)
  .add('with text', () =>
    <Button onClick={action('clicked')}>Hello Button</Button>
  )
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  );
  const fontOptions = [
  	{ key: 'AL', value: 'Helvetica Neue', text: 'Helvetica Neue' },
  	{ key: 'AK', value: 'Impact', text: 'Impact' },
  	{ key: 'AZ', value: 'Arial', text: 'Arial' }
  ];
  const fontWeightOptions = [
  	{ key: 'AL', value: 'Regular', text: 'Regular' },
  	{ key: 'AK', value: 'Italic', text: 'Italic' },
  	{ key: 'AZ', value: 'Bold', text: 'Bold' }
  ];

const groups = [
  {
    text: 'Event',
    value: 'event',
    options: [
      { value: 'signin', text: 'Sign in' },
      { value: 'signup', text: 'Sign up' },
      { value: 'page_view', text: 'Page view' },
      { value: 'content_liked', text: 'Content liked' },
      { value: 'content_consumed', text: 'Content consumed' },
      { value: 'content_favourited', text: 'Content favourited' }
    ]
  },
  {
    text: 'Account',
    value: 'account_property',
    options: [
      { value: 'name', text: 'Name', icon: 'font' },
      { value: 'email', text: 'Email', icon: 'font', description: 'Registered email' },
      { value: 'country', text: 'Country', icon: 'font' },
      { value: 'is_subscribed', text: 'Subscribed', icon: 'selected radio' },
      { value: 'createdAt', text: 'Created date', icon: 'calendar' }
    ]
  },
  {
    text: 'Profile',
    value: 'profile_property',
    options: [
      { value: 'name', text: 'Name', icon: 'font' },
      { value: 'email', text: 'Email', icon: 'font' },
      { value: 'age', text: 'Age', icon: 'hashtag' },
      { value: 'createdAt', text: 'Created date', icon: 'calendar' }
    ]
  }
];
